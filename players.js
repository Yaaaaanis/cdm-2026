/* Classement des parieurs + identité anonyme (pays) — backend Supabase.
 *
 * Modèle :
 *  - Chaque joueur choisit un PAYS (pseudo public, unique) + un PRÉNOM (privé, visible admin seul).
 *  - Le solde de pièces et les stats de paris sont poussés dans Supabase (table `players`).
 *  - Le classement est trié par solde décroissant.
 *  - Mode test (?test=1) : tout passe sur des lignes is_test=true, isolées du vrai classement.
 *
 * Si Supabase n'est pas configuré, le module se dégrade proprement :
 * les paris locaux fonctionnent toujours, mais le classement en ligne est désactivé.
 */

const PLAYER_KEY = "cdm_player";
const PLAYER_ID_KEY = "cdm_player_id";
const STARTING_BALANCE = 100;

let leaderboardCache = [];

function isTestMode() {
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get("test") === "1") sessionStorage.setItem("cdm_test", "1");
    if (params.get("test") === "0") sessionStorage.removeItem("cdm_test");
  } catch (_) {}
  return sessionStorage.getItem("cdm_test") === "1";
}

function setTestMode(on) {
  try {
    if (on) sessionStorage.setItem("cdm_test", "1");
    else sessionStorage.removeItem("cdm_test");
  } catch (_) {}
}

function supabaseCfg() {
  const c = window.CDM_CONFIG;
  if (c && c.supabaseUrl && c.supabaseAnonKey) {
    return { url: c.supabaseUrl.replace(/\/+$/, ""), key: c.supabaseAnonKey };
  }
  return null;
}

function isLeaderboardConfigured() {
  return !!supabaseCfg();
}

async function sbRequest(path, { method = "GET", body = null, prefer = "" } = {}) {
  const cfg = supabaseCfg();
  if (!cfg) throw new Error("supabase-not-configured");
  const headers = {
    apikey: cfg.key,
    Authorization: `Bearer ${cfg.key}`,
    "Content-Type": "application/json"
  };
  if (prefer) headers.Prefer = prefer;
  const res = await fetch(`${cfg.url}/rest/v1/${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  });
  if (!res.ok) {
    const err = new Error(`supabase-${res.status}`);
    err.status = res.status;
    try {
      err.detail = await res.json();
    } catch (_) {}
    throw err;
  }
  if (res.status === 204) return null;
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

function getPlayerId() {
  let id = localStorage.getItem(PLAYER_ID_KEY);
  if (!id) {
    id =
      (crypto.randomUUID && crypto.randomUUID()) ||
      `p_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
    localStorage.setItem(PLAYER_ID_KEY, id);
  }
  return id;
}

function getProfile() {
  try {
    return JSON.parse(localStorage.getItem(PLAYER_KEY)) || null;
  } catch (_) {
    return null;
  }
}

function hasJoined() {
  const p = getProfile();
  return !!(p && p.country);
}

function saveProfile(profile) {
  localStorage.setItem(PLAYER_KEY, JSON.stringify(profile));
}

function clearProfile() {
  localStorage.removeItem(PLAYER_KEY);
}

function allWorldCupTeams() {
  if (typeof GROUPS === "undefined") return [];
  const set = new Set();
  Object.values(GROUPS).forEach((teams) => teams.forEach((t) => set.add(t)));
  return [...set].sort((a, b) => a.localeCompare(b, "fr"));
}

async function fetchPlayers() {
  if (!isLeaderboardConfigured()) return [];
  const test = isTestMode();
  const rows = await sbRequest(
    `players?select=id,country,name,balance,won,lost,placed,profit,updated_at&is_test=eq.${test}&order=balance.desc,updated_at.asc`
  );
  return Array.isArray(rows) ? rows : [];
}

async function getTakenCountries() {
  try {
    const rows = await fetchPlayers();
    return new Set(rows.map((r) => r.country));
  } catch (_) {
    return new Set();
  }
}

async function getAvailableCountries() {
  const taken = await getTakenCountries();
  const mine = getProfile()?.country;
  return allWorldCupTeams().filter((t) => !taken.has(t) || t === mine);
}

function currentStats() {
  const stats =
    window.Betting && window.Betting.getStats
      ? window.Betting.getStats()
      : { balance: STARTING_BALANCE, won: 0, lost: 0, placed: 0 };
  return {
    balance: stats.balance,
    won: stats.won,
    lost: stats.lost,
    placed: stats.placed,
    profit: stats.balance - STARTING_BALANCE
  };
}

// Hash du code secret (pour ne pas le stocker en clair). SHA-256 via sync.js.
async function hashPin(pin) {
  const v = String(pin || "");
  if (window.cdmHashPassword) return window.cdmHashPassword(v);
  return v;
}

function collectData() {
  return window.CDM_collectProfileData ? window.CDM_collectProfileData() : null;
}

async function join(country, name, pin) {
  if (!isLeaderboardConfigured()) {
    return { success: false, error: "Classement en ligne pas encore configuré." };
  }
  const cleanName = (name || "").trim();
  if (!country) return { success: false, error: "Choisis un pays." };
  if (!cleanName) return { success: false, error: "Entre ton prénom." };

  const id = getPlayerId();
  const stats = currentStats();
  const now = new Date().toISOString();
  const alreadyJoined = hasJoined();
  const cleanPin = (pin || "").trim();

  // Code secret requis à la première inscription (sert à se reconnecter ailleurs).
  if (!alreadyJoined && !/^\d{4,6}$/.test(cleanPin)) {
    return { success: false, error: "Choisis un code secret de 4 à 6 chiffres." };
  }

  const data = collectData();
  const pinHash = cleanPin ? await hashPin(cleanPin) : null;

  try {
    if (alreadyJoined) {
      const body = { country, name: cleanName, updated_at: now };
      if (pinHash) body.pin = pinHash;
      if (data) body.data = data;
      await sbRequest(`players?id=eq.${encodeURIComponent(id)}`, {
        method: "PATCH",
        body,
        prefer: "return=minimal"
      });
    } else {
      await sbRequest("players", {
        method: "POST",
        body: {
          id,
          country,
          name: cleanName,
          pin: pinHash,
          balance: stats.balance,
          won: stats.won,
          lost: stats.lost,
          placed: stats.placed,
          profit: stats.profit,
          is_test: isTestMode(),
          updated_at: now,
          data
        },
        prefer: "return=minimal"
      });
    }
  } catch (e) {
    if (e.status === 409) {
      return {
        success: false,
        error: "Ce pays vient d'être pris. Choisis-en un autre.",
        taken: true
      };
    }
    return { success: false, error: "Connexion au classement impossible. Réessaie." };
  }

  saveProfile({ id, country, name: cleanName, joinedAt: now });
  return { success: true };
}

// Connexion sur un autre appareil : pays + code secret → on récupère le profil.
async function loginWithPin(country, pin) {
  if (!isLeaderboardConfigured()) {
    return { success: false, error: "Classement en ligne pas encore configuré." };
  }
  if (!country) return { success: false, error: "Choisis ton pays." };
  const cleanPin = (pin || "").trim();
  if (!cleanPin) return { success: false, error: "Entre ton code secret." };

  const test = isTestMode();
  let rows;
  try {
    rows = await sbRequest(
      `players?country=eq.${encodeURIComponent(country)}&is_test=eq.${test}&select=id,country,name,pin,data`
    );
  } catch (_) {
    return { success: false, error: "Connexion impossible. Réessaie." };
  }
  const row = Array.isArray(rows) && rows[0];
  if (!row) return { success: false, error: "Aucun compte trouvé pour ce pays." };
  if (!row.pin) return { success: false, error: "Ce compte n'a pas de code secret." };

  const pinHash = await hashPin(cleanPin);
  if (row.pin !== pinHash) return { success: false, error: "Code secret incorrect." };

  // On adopte cette identité sur l'appareil courant.
  localStorage.setItem(PLAYER_ID_KEY, row.id);
  saveProfile({ id: row.id, country: row.country, name: row.name, joinedAt: new Date().toISOString() });
  return { success: true, data: row.data || null, country: row.country, name: row.name };
}

// Récupère le blob de profil (solde, paris, favoris) stocké en ligne.
async function pullProfileData() {
  if (!isLeaderboardConfigured() || !hasJoined()) return null;
  const profile = getProfile();
  try {
    const rows = await sbRequest(
      `players?id=eq.${encodeURIComponent(profile.id)}&select=data,balance,country,name`
    );
    return (Array.isArray(rows) && rows[0]) || null;
  } catch (_) {
    return null;
  }
}

// Liste des pays déjà pris (pour le menu de connexion).
async function getTakenCountriesList() {
  try {
    const rows = await fetchPlayers();
    return rows.map((r) => r.country);
  } catch (_) {
    return [];
  }
}

async function pushStats() {
  if (!isLeaderboardConfigured() || !hasJoined()) return;
  const profile = getProfile();
  const stats = currentStats();
  const data = collectData();
  try {
    const body = {
      balance: stats.balance,
      won: stats.won,
      lost: stats.lost,
      placed: stats.placed,
      profit: stats.profit,
      updated_at: new Date().toISOString()
    };
    if (data) body.data = data;
    await sbRequest(`players?id=eq.${encodeURIComponent(profile.id)}`, {
      method: "PATCH",
      body,
      prefer: "return=minimal"
    });
  } catch (e) {
    console.warn("pushStats échoué", e);
  }
}

async function refreshLeaderboard() {
  try {
    leaderboardCache = await fetchPlayers();
  } catch (_) {
    leaderboardCache = leaderboardCache || [];
  }
  return leaderboardCache;
}

function getLeaderboardCache() {
  return leaderboardCache;
}

function getMyRank() {
  const profile = getProfile();
  if (!profile) return null;
  const idx = leaderboardCache.findIndex((r) => r.id === profile.id);
  return idx >= 0 ? idx + 1 : null;
}

/* ===== Outils admin (mode test) : gérer plusieurs joueurs ===== */

async function adminAddPlayer(country, name, balance) {
  if (!isLeaderboardConfigured()) return { success: false, error: "Supabase non configuré." };
  if (!country) return { success: false, error: "Choisis un pays." };
  const bal = Number.isFinite(parseInt(balance, 10)) ? Math.max(0, parseInt(balance, 10)) : STARTING_BALANCE;
  const id = `adm_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  try {
    await sbRequest("players", {
      method: "POST",
      body: {
        id,
        country,
        name: (name || "").trim() || "(test)",
        balance: bal,
        won: 0,
        lost: 0,
        placed: 0,
        profit: bal - STARTING_BALANCE,
        is_test: isTestMode(),
        updated_at: new Date().toISOString()
      },
      prefer: "return=minimal"
    });
    return { success: true };
  } catch (e) {
    if (e.status === 409) return { success: false, error: "Ce pays est déjà pris." };
    return { success: false, error: "Ajout impossible (vérifie les droits Supabase)." };
  }
}

async function adminSetBalance(id, balance) {
  try {
    await sbRequest(`players?id=eq.${encodeURIComponent(id)}`, {
      method: "PATCH",
      body: { balance: Math.max(0, parseInt(balance, 10) || 0), updated_at: new Date().toISOString() },
      prefer: "return=minimal"
    });
    return { success: true };
  } catch (_) {
    return { success: false };
  }
}

async function adminDeletePlayer(id) {
  try {
    await sbRequest(`players?id=eq.${encodeURIComponent(id)}`, { method: "DELETE", prefer: "return=minimal" });
    return { success: true };
  } catch (_) {
    return { success: false };
  }
}

window.Players = {
  STARTING_BALANCE,
  isTestMode,
  setTestMode,
  isLeaderboardConfigured,
  getProfile,
  hasJoined,
  clearProfile,
  allWorldCupTeams,
  getAvailableCountries,
  getTakenCountriesList,
  join,
  loginWithPin,
  pullProfileData,
  pushStats,
  refreshLeaderboard,
  getLeaderboardCache,
  getMyRank,
  currentStats,
  adminAddPlayer,
  adminSetBalance,
  adminDeletePlayer
};
