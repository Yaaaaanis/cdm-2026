/* Synchronisation classements + scores (lecture publique, écriture admin) */

async function cdmHashPassword(password) {
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(password)
  );
  return [...new Uint8Array(buf)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

window.cdmHashPassword = cdmHashPassword;

const DATA_KEY = "cdm2026_data";

function defaultStandings() {
  const init = {};
  Object.keys(GROUPS).forEach((g) => {
    init[g] = {};
    GROUPS[g].forEach((team) => {
      init[g][team] = 0;
    });
  });
  return init;
}

function defaultScores() {
  return {};
}

function isSyncEnabled() {
  const c = window.CDM_CONFIG;
  return !!(c && c.syncEnabled && c.jsonBinId);
}

function getAdminSessionExpiry() {
  const raw = sessionStorage.getItem("cdm_admin_until");
  return raw ? parseInt(raw, 10) : 0;
}

function isAdminUser() {
  if (!isSyncEnabled()) return true;
  return Date.now() < getAdminSessionExpiry();
}

function isLegacyStandingsOnly(remote) {
  return remote && typeof remote === "object" && remote.A && !remote.standings;
}

function mergeStandings(remoteStandings) {
  const base = defaultStandings();
  if (!remoteStandings || typeof remoteStandings !== "object") return base;
  Object.keys(GROUPS).forEach((g) => {
    if (remoteStandings[g]) Object.assign(base[g], remoteStandings[g]);
  });
  return base;
}

function parseRemoteData(remote) {
  if (!remote || typeof remote !== "object") {
    return { standings: defaultStandings(), scores: defaultScores(), oddsOverrides: {}, bettingMaintenance: false };
  }
  if (isLegacyStandingsOnly(remote)) {
    return { standings: mergeStandings(remote), scores: defaultScores(), oddsOverrides: {}, bettingMaintenance: false };
  }
  return {
    standings: mergeStandings(remote.standings),
    scores:
      remote.scores && typeof remote.scores === "object"
        ? { ...remote.scores }
        : defaultScores(),
    oddsOverrides:
      remote.oddsOverrides && typeof remote.oddsOverrides === "object"
        ? { ...remote.oddsOverrides }
        : {},
    bettingMaintenance: !!remote.bettingMaintenance
  };
}

function packRemoteData() {
  return { standings, scores, oddsOverrides, bettingMaintenance };
}

async function fetchRemoteData() {
  const id = window.CDM_CONFIG.jsonBinId;
  const headers = { "X-Bin-Meta": "false" };
  const readKey = window.CDM_CONFIG.jsonBinReadKey;
  if (readKey) headers["X-Access-Key"] = readKey;
  const res = await fetch(`https://api.jsonbin.io/v3/b/${id}/latest`, { headers });
  if (!res.ok) throw new Error("fetch");
  const data = await res.json();
  return data.record || data;
}

async function pushRemoteData(data) {
  const id = window.CDM_CONFIG.jsonBinId;
  const key = sessionStorage.getItem("cdm_jsonbin_key");
  if (!key) throw new Error("nokey");
  const res = await fetch(`https://api.jsonbin.io/v3/b/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": key,
      "X-Bin-Meta": "false"
    },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error("push");
}

function loadDataLocal() {
  try {
    const raw = localStorage.getItem(DATA_KEY);
    if (raw) return parseRemoteData(JSON.parse(raw));
  } catch (_) {}
  try {
    const legacy = localStorage.getItem("cdm2026_standings");
    if (legacy) return { standings: mergeStandings(JSON.parse(legacy)), scores: defaultScores(), oddsOverrides: {}, bettingMaintenance: false };
  } catch (_) {}
  return { standings: defaultStandings(), scores: defaultScores(), oddsOverrides: {}, bettingMaintenance: false };
}

function saveDataLocal() {
  localStorage.setItem(DATA_KEY, JSON.stringify(packRemoteData()));
}

async function initStandingsSync() {
  if (!isSyncEnabled()) {
    const local = loadDataLocal();
    standings = local.standings;
    scores = local.scores;
    oddsOverrides = local.oddsOverrides || {};
    bettingMaintenance = !!local.bettingMaintenance;
    return { mode: "local" };
  }

  try {
    const remote = await fetchRemoteData();
    const parsed = parseRemoteData(remote);
    standings = parsed.standings;
    scores = parsed.scores;
    oddsOverrides = parsed.oddsOverrides || {};
    bettingMaintenance = !!parsed.bettingMaintenance;
    saveDataLocal();
    return { mode: "cloud" };
  } catch (_) {
    const local = loadDataLocal();
    standings = local.standings;
    scores = local.scores;
    oddsOverrides = local.oddsOverrides || {};
    bettingMaintenance = !!local.bettingMaintenance;
    return { mode: "offline" };
  }
}

async function persistData() {
  saveDataLocal();

  if (!isSyncEnabled()) return;
  if (!isAdminUser()) return;

  try {
    await pushRemoteData(packRemoteData());
  } catch (e) {
    console.warn("Sauvegarde cloud échouée", e);
    alert(
      "Impossible d’enregistrer en ligne. Vérifie ta connexion admin et la clé JSONBin."
    );
  }
}

async function persistStandings() {
  await persistData();
}

async function unlockAdmin(password) {
  const cfg = window.CDM_CONFIG;
  if (!cfg.adminPasswordHash) {
    throw new Error("Mot de passe admin non configuré dans config.js");
  }
  const hash = await cdmHashPassword(password);
  if (hash !== cfg.adminPasswordHash) {
    throw new Error("Mot de passe incorrect");
  }

  let key = sessionStorage.getItem("cdm_jsonbin_key");
  if (!key) {
    key = prompt(
      "Colle ta clé secrète JSONBin (X-Master-Key).\n" +
        "Tu la trouves sur jsonbin.io → ton bac → API Keys.\n" +
        "Elle reste uniquement dans ton navigateur."
    );
    if (!key || !key.trim()) throw new Error("Clé annulée");
    sessionStorage.setItem("cdm_jsonbin_key", key.trim());
  }

  const week = 7 * 24 * 60 * 60 * 1000;
  sessionStorage.setItem("cdm_admin_until", String(Date.now() + week));
}

function lockAdmin() {
  sessionStorage.removeItem("cdm_admin_until");
  sessionStorage.removeItem("cdm_jsonbin_key");
}

async function refreshStandingsFromCloud() {
  if (!isSyncEnabled()) return;
  try {
    const parsed = parseRemoteData(await fetchRemoteData());
    standings = parsed.standings;
    scores = parsed.scores;
    oddsOverrides = parsed.oddsOverrides || {};
    bettingMaintenance = !!parsed.bettingMaintenance;
    saveDataLocal();
    if (typeof resolveDueBets === "function") resolveDueBets();
    render();
    renderGroups();
    if (typeof renderBettingPage === "function") renderBettingPage();
  } catch (_) {
    /* garde les données locales */
  }
}
