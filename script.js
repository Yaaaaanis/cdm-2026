/* Calendrier phase de groupes — heures Paris (CEST) — source FIFA */
const matches = [
  {d:1,date:"2026-06-11",t:"21:00",g:"A",h:"Mexique",a:"Afrique du Sud"},
  {d:1,date:"2026-06-12",t:"04:00",g:"A",h:"Corée du Sud",a:"République tchèque"},
  {d:1,date:"2026-06-12",t:"21:00",g:"B",h:"Canada",a:"Bosnie-Herzégovine"},
  {d:1,date:"2026-06-13",t:"03:00",g:"D",h:"États-Unis",a:"Paraguay"},
  {d:1,date:"2026-06-13",t:"21:00",g:"B",h:"Qatar",a:"Suisse"},
  {d:1,date:"2026-06-14",t:"00:00",g:"C",h:"Brésil",a:"Maroc",tag:"ma"},
  {d:1,date:"2026-06-14",t:"03:00",g:"C",h:"Haïti",a:"Écosse"},
  {d:1,date:"2026-06-13",t:"06:00",g:"D",h:"Australie",a:"Turquie"},
  {d:1,date:"2026-06-14",t:"19:00",g:"E",h:"Allemagne",a:"Curaçao"},
  {d:1,date:"2026-06-14",t:"22:00",g:"F",h:"Pays-Bas",a:"Japon"},
  {d:1,date:"2026-06-15",t:"01:00",g:"E",h:"Côte d'Ivoire",a:"Équateur"},
  {d:1,date:"2026-06-15",t:"04:00",g:"F",h:"Suède",a:"Tunisie"},
  {d:1,date:"2026-06-15",t:"18:00",g:"H",h:"Espagne",a:"Cap-Vert"},
  {d:1,date:"2026-06-15",t:"21:00",g:"G",h:"Belgique",a:"Égypte"},
  {d:1,date:"2026-06-16",t:"00:00",g:"H",h:"Arabie saoudite",a:"Uruguay"},
  {d:1,date:"2026-06-16",t:"03:00",g:"G",h:"Iran",a:"Nouvelle-Zélande"},
  {d:1,date:"2026-06-16",t:"21:00",g:"I",h:"France",a:"Sénégal",tag:"fr"},
  {d:1,date:"2026-06-17",t:"00:00",g:"I",h:"Irak",a:"Norvège"},
  {d:1,date:"2026-06-17",t:"03:00",g:"J",h:"Argentine",a:"Algérie"},
  {d:1,date:"2026-06-17",t:"06:00",g:"J",h:"Autriche",a:"Jordanie"},
  {d:1,date:"2026-06-17",t:"19:00",g:"K",h:"Portugal",a:"RD Congo",tag:"pt"},
  {d:1,date:"2026-06-17",t:"22:00",g:"L",h:"Angleterre",a:"Croatie"},
  {d:1,date:"2026-06-18",t:"01:00",g:"L",h:"Ghana",a:"Panama"},
  {d:1,date:"2026-06-18",t:"04:00",g:"K",h:"Ouzbékistan",a:"Colombie"},

  {d:2,date:"2026-06-18",t:"18:00",g:"A",h:"République tchèque",a:"Afrique du Sud"},
  {d:2,date:"2026-06-18",t:"21:00",g:"B",h:"Suisse",a:"Bosnie-Herzégovine"},
  {d:2,date:"2026-06-19",t:"00:00",g:"B",h:"Canada",a:"Qatar"},
  {d:2,date:"2026-06-19",t:"03:00",g:"A",h:"Mexique",a:"Corée du Sud"},
  {d:2,date:"2026-06-19",t:"21:00",g:"D",h:"États-Unis",a:"Australie"},
  {d:2,date:"2026-06-20",t:"00:00",g:"C",h:"Écosse",a:"Maroc",tag:"ma"},
  {d:2,date:"2026-06-20",t:"02:30",g:"C",h:"Brésil",a:"Haïti"},
  {d:2,date:"2026-06-20",t:"05:00",g:"D",h:"Turquie",a:"Paraguay"},
  {d:2,date:"2026-06-20",t:"19:00",g:"F",h:"Pays-Bas",a:"Suède"},
  {d:2,date:"2026-06-20",t:"22:00",g:"E",h:"Allemagne",a:"Côte d'Ivoire"},
  {d:2,date:"2026-06-21",t:"02:00",g:"E",h:"Équateur",a:"Curaçao"},
  {d:2,date:"2026-06-21",t:"06:00",g:"F",h:"Tunisie",a:"Japon"},
  {d:2,date:"2026-06-21",t:"18:00",g:"H",h:"Espagne",a:"Arabie saoudite"},
  {d:2,date:"2026-06-21",t:"21:00",g:"G",h:"Belgique",a:"Iran"},
  {d:2,date:"2026-06-22",t:"00:00",g:"H",h:"Uruguay",a:"Cap-Vert"},
  {d:2,date:"2026-06-22",t:"03:00",g:"G",h:"Nouvelle-Zélande",a:"Égypte"},
  {d:2,date:"2026-06-22",t:"19:00",g:"J",h:"Argentine",a:"Autriche"},
  {d:2,date:"2026-06-22",t:"23:00",g:"I",h:"France",a:"Irak",tag:"fr"},
  {d:2,date:"2026-06-23",t:"02:00",g:"I",h:"Norvège",a:"Sénégal"},
  {d:2,date:"2026-06-23",t:"05:00",g:"J",h:"Jordanie",a:"Algérie"},
  {d:2,date:"2026-06-23",t:"19:00",g:"K",h:"Portugal",a:"Ouzbékistan",tag:"pt"},
  {d:2,date:"2026-06-23",t:"22:00",g:"L",h:"Angleterre",a:"Ghana"},
  {d:2,date:"2026-06-24",t:"01:00",g:"L",h:"Panama",a:"Croatie"},
  {d:2,date:"2026-06-24",t:"04:00",g:"K",h:"Colombie",a:"RD Congo"},

  {d:3,date:"2026-06-24",t:"21:00",g:"B",h:"Suisse",a:"Canada"},
  {d:3,date:"2026-06-24",t:"21:00",g:"B",h:"Bosnie-Herzégovine",a:"Qatar"},
  {d:3,date:"2026-06-25",t:"00:00",g:"C",h:"Écosse",a:"Brésil"},
  {d:3,date:"2026-06-25",t:"00:00",g:"C",h:"Maroc",a:"Haïti",tag:"ma"},
  {d:3,date:"2026-06-25",t:"03:00",g:"A",h:"République tchèque",a:"Mexique"},
  {d:3,date:"2026-06-25",t:"03:00",g:"A",h:"Afrique du Sud",a:"Corée du Sud"},
  {d:3,date:"2026-06-25",t:"22:00",g:"E",h:"Équateur",a:"Allemagne"},
  {d:3,date:"2026-06-25",t:"22:00",g:"E",h:"Curaçao",a:"Côte d'Ivoire"},
  {d:3,date:"2026-06-26",t:"01:00",g:"F",h:"Tunisie",a:"Pays-Bas"},
  {d:3,date:"2026-06-26",t:"01:00",g:"F",h:"Japon",a:"Suède"},
  {d:3,date:"2026-06-26",t:"04:00",g:"D",h:"Turquie",a:"États-Unis"},
  {d:3,date:"2026-06-26",t:"04:00",g:"D",h:"Paraguay",a:"Australie"},
  {d:3,date:"2026-06-26",t:"21:00",g:"I",h:"Norvège",a:"France",tag:"fr"},
  {d:3,date:"2026-06-26",t:"21:00",g:"I",h:"Sénégal",a:"Irak"},
  {d:3,date:"2026-06-27",t:"02:00",g:"H",h:"Uruguay",a:"Espagne"},
  {d:3,date:"2026-06-27",t:"02:00",g:"H",h:"Cap-Vert",a:"Arabie saoudite"},
  {d:3,date:"2026-06-27",t:"05:00",g:"G",h:"Nouvelle-Zélande",a:"Belgique"},
  {d:3,date:"2026-06-27",t:"05:00",g:"G",h:"Égypte",a:"Iran"},
  {d:3,date:"2026-06-27",t:"23:00",g:"L",h:"Panama",a:"Angleterre"},
  {d:3,date:"2026-06-27",t:"23:00",g:"L",h:"Croatie",a:"Ghana"},
  {d:3,date:"2026-06-28",t:"01:30",g:"K",h:"Colombie",a:"Portugal",tag:"pt"},
  {d:3,date:"2026-06-28",t:"01:30",g:"K",h:"RD Congo",a:"Ouzbékistan"},
  {d:3,date:"2026-06-28",t:"04:00",g:"J",h:"Jordanie",a:"Argentine"},
  {d:3,date:"2026-06-28",t:"04:00",g:"J",h:"Algérie",a:"Autriche"}
];

matches.forEach((m, i) => {
  m.id = String(i);
});

const GROUPS = {
  A: ["Mexique", "Afrique du Sud", "Corée du Sud", "République tchèque"],
  B: ["Canada", "Qatar", "Suisse", "Bosnie-Herzégovine"],
  C: ["Brésil", "Maroc", "Haïti", "Écosse"],
  D: ["États-Unis", "Paraguay", "Australie", "Turquie"],
  E: ["Allemagne", "Curaçao", "Côte d'Ivoire", "Équateur"],
  F: ["Pays-Bas", "Japon", "Suède", "Tunisie"],
  G: ["Belgique", "Égypte", "Iran", "Nouvelle-Zélande"],
  H: ["Espagne", "Cap-Vert", "Arabie saoudite", "Uruguay"],
  I: ["France", "Sénégal", "Irak", "Norvège"],
  J: ["Argentine", "Algérie", "Autriche", "Jordanie"],
  K: ["Portugal", "RD Congo", "Ouzbékistan", "Colombie"],
  L: ["Angleterre", "Croatie", "Ghana", "Panama"]
};

let OPENING = new Date("2026-06-11T21:00:00");
const FINAL = new Date("2026-07-19T21:00:00");

// DEV : ?soon=N avance le 1er match à N minutes (défaut 2) à partir de maintenant.
// Sert à tester en local le passage « à venir → en cours », la home et les paris.
// Sans le paramètre dans l'URL, rien ne change (sûr à déployer).
function applyDevSoon() {
  const params = new URLSearchParams(window.location.search);
  if (!params.has("soon")) return;
  const mins = parseInt(params.get("soon"), 10);
  const delay = Number.isFinite(mins) && mins >= 0 ? mins : 2;
  const start = new Date(Date.now() + delay * 60000);
  const pad = (n) => String(n).padStart(2, "0");
  const dateStr = `${start.getFullYear()}-${pad(start.getMonth() + 1)}-${pad(start.getDate())}`;
  const timeStr = `${pad(start.getHours())}:${pad(start.getMinutes())}`;
  if (matches[0]) {
    matches[0].date = dateStr;
    matches[0].t = timeStr;
    OPENING = new Date(`${dateStr}T${timeStr}:00`);
    console.log(`[DEV] 1er match (${matches[0].h} vs ${matches[0].a}) avancé à ${dateStr} ${timeStr}`);
  }
}

function isDevSoonMode() {
  return new URLSearchParams(window.location.search).has("soon");
}

// Scores saisis en ?soon=N : locaux à la session, jamais synchronisés au cloud.
const DEV_SOON_SCORES_KEY = "cdm_dev_soon_scores";

function getDevSoonScores() {
  try {
    return JSON.parse(sessionStorage.getItem(DEV_SOON_SCORES_KEY)) || {};
  } catch (_) {
    return {};
  }
}

function saveDevSoonScores(o) {
  sessionStorage.setItem(DEV_SOON_SCORES_KEY, JSON.stringify(o));
}

function getScoreRecord(m) {
  if (isDevSoonMode()) {
    return getDevSoonScores()[m.id] || null;
  }
  return scores[m.id] || null;
}

function setScoreRecord(m, record) {
  if (isDevSoonMode()) {
    const o = getDevSoonScores();
    if (record == null) delete o[m.id];
    else o[m.id] = record;
    saveDevSoonScores(o);
    return;
  }
  if (record == null) delete scores[m.id];
  else scores[m.id] = record;
}
const FAV_KEY = "cdm_favorites";
const THEME_KEY = "cdm_theme";
const BRACKET_KEY = "cdm_bracket_predictions";
const WELCOME_KEY = "cdm_welcome_seen";
const BET_INTRO_KEY = "cdm_bet_intro_seen";
const MATCH_MS = 105 * 60 * 1000;
const BRACKET_ROUNDS = [
  { key: "r32", label: "16es de finale", short: "16e", matchCount: 16 },
  { key: "r16", label: "8es de finale", short: "8e", matchCount: 8 },
  { key: "qf", label: "Quarts", short: "QF", matchCount: 4 },
  { key: "sf", label: "Demi-finales", short: "DF", matchCount: 2 },
  { key: "final", label: "Finale", short: "Finale", matchCount: 1 }
];

const BRACKET_PAIRS = {
  r16: [[1, 4], [0, 2], [3, 5], [6, 7], [10, 11], [8, 9], [13, 15], [12, 14]],
  qf: [[0, 1], [4, 5], [2, 3], [6, 7]],
  sf: [[0, 1], [2, 3]],
  final: [[0, 1]]
};

function getAnyMatch(id) {
  return matches.find((m) => m.id === id) || null;
}

/* ===== Mode test sur de VRAIS matchs =====
 * En mode test, l'admin peut "marquer" n'importe quel match du calendrier comme
 * match de test. Il saisit alors un score fictif (+ buteurs) qui sert UNIQUEMENT
 * à résoudre les paris instantanément. Ces données restent dans la session
 * (sessionStorage) : elles ne touchent JAMAIS les vrais scores / classements
 * synchronisés via JSONBin.
 */
const TEST_MATCH_IDS_KEY = "cdm_test_match_ids";
const TEST_SCORES_KEY = "cdm_test_scores";

function getTestMatchIds() {
  try {
    return new Set(JSON.parse(sessionStorage.getItem(TEST_MATCH_IDS_KEY)) || []);
  } catch (_) {
    return new Set();
  }
}

function isTestFlagged(m) {
  return !!(window.Players && window.Players.isTestMode() && getTestMatchIds().has(m.id));
}

function toggleTestMatch(id) {
  const set = getTestMatchIds();
  if (set.has(id)) {
    set.delete(id);
    const o = getTestScores();
    delete o[id];
    saveTestScores(o);
  } else {
    set.add(id);
  }
  sessionStorage.setItem(TEST_MATCH_IDS_KEY, JSON.stringify([...set]));
}

function getTestScores() {
  try {
    return JSON.parse(sessionStorage.getItem(TEST_SCORES_KEY)) || {};
  } catch (_) {
    return {};
  }
}

function saveTestScores(o) {
  sessionStorage.setItem(TEST_SCORES_KEY, JSON.stringify(o));
}

function getTestScore(m) {
  const s = getTestScores()[m.id];
  if (!s || s.h === undefined || s.a === undefined) return null;
  return { h: Number(s.h), a: Number(s.a) };
}

function getTestScorers(m) {
  const s = getTestScores()[m.id];
  return Array.isArray(s && s.scorers) ? s.scorers : [];
}

// Contexte de résolution d'un match : score de test si le match est en test,
// sinon le vrai score officiel.
function betContext(m) {
  if (isTestFlagged(m)) {
    return { score: getTestScore(m), scorers: getTestScorers(m), isTest: true };
  }
  return { score: getScore(m), scorers: getScorers(m), isTest: false };
}

let standings = defaultStandings();
let scores = defaultScores();
let oddsOverrides = {}; // cotes forcées par l'admin, synchronisées : { matchId: { "market|sel": cote } }
let oddsEditMatches = new Set(); // cartes en cours d'édition de cotes (transitoire, non synchronisé)
let bettingMaintenance = false; // si true, les paris sont masqués pour tout le monde sauf l'admin (synchronisé)
let syncMode = "local";

// Panier de paris combinés (local, transitoire mais conservé entre rechargements).
const COMBO_SLIP_KEY = "cdm_combo_slip";
let comboSlip = loadComboSlip();

function loadComboSlip() {
  try {
    const raw = JSON.parse(localStorage.getItem(COMBO_SLIP_KEY) || "[]");
    return Array.isArray(raw) ? raw : [];
  } catch (_) {
    return [];
  }
}

function saveComboSlip() {
  localStorage.setItem(COMBO_SLIP_KEY, JSON.stringify(comboSlip));
}

function comboOdds() {
  return comboSlip.reduce((p, l) => p * l.odds, 1);
}

// Ajoute (ou remplace) une sélection au combiné. Une seule jambe par match.
function addToCombo(leg) {
  // On autorise plusieurs sélections d'un même match (ex. "France gagne" +
  // "Mbappé buteur"). Une seule sélection par marché à choix unique ; pour les
  // buteurs on peut en cumuler plusieurs (dédup. par buteur exact).
  const i = comboSlip.findIndex((l) =>
    l.matchId === leg.matchId && l.market === leg.market &&
    (leg.market === "scorer" ? l.selection === leg.selection : true)
  );
  if (i !== -1) comboSlip[i] = leg;
  else comboSlip.push(leg);
  saveComboSlip();
  showToast("success", "Ajouté au combiné 🎰", `${leg.label} · cote ${leg.odds.toFixed(2)}`);
  renderComboSlip();
  const slip = document.getElementById("comboSlip");
  if (slip && !slip.classList.contains("hidden")) {
    const y = slip.getBoundingClientRect().top + window.pageYOffset - 70;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  }
}

// État courant d'une sélection d'un combiné : "won" (passé), "lost" (raté) ou
// "pending" (match pas encore joué / score non saisi). Utilise le vrai score,
// ou le score de test si le match est flaggé en test.
function comboLegStatus(leg) {
  const m = getAnyMatch(leg.matchId);
  if (!m || !window.Betting) return "pending";
  const ctx = betContext(m);
  if (!ctx || !ctx.score) return "pending";
  // Score provisoire (OK sans Fin du match) : on n'affiche pas gagné/perdu.
  if (!ctx.isTest && !isMatchFinalized(m)) return "pending";
  const o = window.Betting.betOutcome(
    { market: leg.market, selection: leg.selection },
    ctx.score,
    ctx.scorers
  );
  return o === "won" ? "won" : o === "lost" ? "lost" : "pending";
}

// Rend une ligne de sélection d'un combiné avec sa pastille d'état.
function comboLegHtml(leg, forceWon = false) {
  const st = forceWon ? "won" : comboLegStatus(leg);
  const icon = st === "won" ? "✅" : st === "lost" ? "❌" : "⏳";
  const tip = forceWon ? "Validé" : st === "won" ? "Passé" : st === "lost" ? "Raté" : "En attente";
  return `<div class="combo-bet-leg leg-${st}" title="${tip}">
    <span class="leg-state">${icon}</span>
    <span class="leg-text"><span class="leg-match">${escapeHtml(leg.matchLabel)}</span><span class="leg-pick">${escapeHtml(leg.label)} · ${leg.odds.toFixed(2)}</span></span>
  </div>`;
}

function betPickerRowHtml(bet) {
  const st =
    bet.status === "won" ? "Gagné" : bet.status === "lost" ? "Perdu" : "En attente";
  let desc;
  if (bet.type === "combo") {
    desc = `Combiné · ${bet.legs.length} sélections · ${bet.amount} 💰 → ${bet.potentialWin} 💰`;
  } else {
    const m = getAnyMatch(bet.matchId);
    const pick = bet.label || bet.selection || "—";
    desc = m ? `${teamLabel(m.h)} vs ${teamLabel(m.a)} · ${pick}` : pick;
  }
  return `<button type="button" class="admin-bet-pick" data-bet-id="${escapeHtml(bet.id)}">
    <span class="admin-bet-pick-st bet-status ${bet.status}">${st}</span>
    <span class="admin-bet-pick-desc">${escapeHtml(desc)}</span>
  </button>`;
}

function openAdminBetPicker() {
  if (!canEditStandings() || !window.Betting) return;
  const modal = document.getElementById("betEditModal");
  const body = document.getElementById("betEditBody");
  const title = document.getElementById("betEditTitle");
  const hint = document.getElementById("betEditHint");
  const saveBtn = document.getElementById("betEditSave");
  if (!modal || !body) return;

  modal.dataset.pickerMode = "1";
  delete modal.dataset.betId;
  delete modal.dataset.betType;
  if (title) title.textContent = "Choisir un pari";
  hint?.classList.add("hidden");
  saveBtn?.classList.add("hidden");

  const bets = [...window.Betting.getAllBets()].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  body.innerHTML = bets.length
    ? bets.map(betPickerRowHtml).join("")
    : "<p class='empty-msg'>Aucun pari sur ce profil.</p>";

  body.querySelectorAll(".admin-bet-pick").forEach((btn) => {
    btn.addEventListener("click", () => openBetEditModal(btn.dataset.betId));
  });
  modal.classList.remove("hidden");
}

function betLegEditRow(leg, i) {
  const markets = ["1x2", "dc", "ou", "btts", "exact", "scorer"];
  const opts = markets.map((m) => `<option value="${m}"${leg.market === m ? " selected" : ""}>${m}</option>`).join("");
  return `
    <fieldset class="bet-leg-edit" data-leg="${i}">
      <legend>${escapeHtml(leg.matchLabel || "Sélection " + (i + 1))}</legend>
      <input type="hidden" class="leg-match-id" value="${escapeHtml(leg.matchId)}">
      <input type="hidden" class="leg-match-label" value="${escapeHtml(leg.matchLabel || "")}">
      <label>Libellé affiché<input type="text" class="leg-label" value="${escapeHtml(leg.label || "")}"></label>
      <label>Marché<select class="leg-market">${opts}</select></label>
      <label>Sélection <span class="leg-sel-hint">(ex. away, X2, under_1.5, but:Ismaël Saibari)</span>
        <input type="text" class="leg-selection" value="${escapeHtml(leg.selection || "")}">
      </label>
      <label>Cote<input type="number" class="leg-odds" min="1.01" step="0.01" value="${Number(leg.odds || 2).toFixed(2)}"></label>
    </fieldset>`;
}

function betSingleEditForm(bet, match) {
  const markets = ["1x2", "dc", "ou", "btts", "exact", "scorer"];
  const opts = markets.map((m) => `<option value="${m}"${bet.market === m ? " selected" : ""}>${m}</option>`).join("");
  return `
    <fieldset class="bet-leg-edit">
      <legend>${match ? `${teamLabel(match.h)} vs ${teamLabel(match.a)}` : "Pari simple"}</legend>
      <label>Libellé affiché<input type="text" id="singleBetLabel" value="${escapeHtml(bet.label || "")}"></label>
      <label>Marché<select id="singleBetMarket">${opts}</select></label>
      <label>Sélection<input type="text" id="singleBetSelection" value="${escapeHtml(bet.selection || "")}"></label>
      <label>Cote<input type="number" id="singleBetOdds" min="1.01" step="0.01" value="${Number(bet.odds || 2).toFixed(2)}"></label>
    </fieldset>`;
}

function openBetEditModal(betId) {
  const modal = document.getElementById("betEditModal");
  const body = document.getElementById("betEditBody");
  const title = document.getElementById("betEditTitle");
  const hint = document.getElementById("betEditHint");
  const saveBtn = document.getElementById("betEditSave");
  if (!modal || !body || !window.Betting) return;

  const bet = window.Betting.getAllBets().find((b) => b.id === betId);
  if (!bet) return;

  delete modal.dataset.pickerMode;
  modal.dataset.betId = betId;
  modal.dataset.betType = bet.type === "combo" ? "combo" : "single";
  if (title) title.textContent = "✏️ Modifier mon pari";
  hint?.classList.remove("hidden");
  saveBtn?.classList.remove("hidden");

  if (bet.type === "combo") {
    body.innerHTML = bet.legs.map((leg, i) => betLegEditRow(leg, i)).join("");
  } else {
    const match = getAnyMatch(bet.matchId);
    body.innerHTML = betSingleEditForm(bet, match);
  }

  modal.classList.remove("hidden");
}

function closeBetEditModal() {
  const modal = document.getElementById("betEditModal");
  modal?.classList.add("hidden");
  delete modal?.dataset.pickerMode;
}

function saveBetEditModal() {
  const modal = document.getElementById("betEditModal");
  if (!modal || !window.Betting) return;

  const betId = modal.dataset.betId;
  const betType = modal.dataset.betType;
  const bet = window.Betting.getAllBets().find((b) => b.id === betId);
  if (!bet) return;

  if (bet.status !== "pending") window.Betting.resetBetToPending(betId);

  let r;
  if (betType === "combo") {
    const legs = [...modal.querySelectorAll(".bet-leg-edit")].map((row) => ({
      matchId: row.querySelector(".leg-match-id")?.value || "",
      matchLabel: row.querySelector(".leg-match-label")?.value || "",
      label: row.querySelector(".leg-label")?.value || "",
      market: row.querySelector(".leg-market")?.value || "1x2",
      selection: row.querySelector(".leg-selection")?.value || "",
      odds: row.querySelector(".leg-odds")?.value || "2"
    }));
    r = window.Betting.updateComboBet(betId, legs);
  } else {
    r = window.Betting.updateSingleBet(betId, {
      label: document.getElementById("singleBetLabel")?.value,
      market: document.getElementById("singleBetMarket")?.value,
      selection: document.getElementById("singleBetSelection")?.value,
      odds: document.getElementById("singleBetOdds")?.value
    });
  }

  if (!r.success) {
    showToast("error", "Erreur", r.error || "Modification impossible.");
    return;
  }

  resolveDueBets();
  closeBetEditModal();
  window.Betting.renderWalletBalance();
  syncAfterBetChange();
  renderBettingPage();

  const updated = window.Betting.getAllBets().find((b) => b.id === betId);
  if (updated?.status === "won") {
    showToast("success", "Pari mis à jour", "Combiné gagné — résolution normale ✅");
  } else if (updated?.status === "lost") {
    showToast("info", "Pari mis à jour", "Certaines sélections ne passent pas encore avec le score actuel.");
  } else {
    showToast("success", "Pari mis à jour", "Valide le match avec 🏁 Fin du match pour résoudre automatiquement.");
  }
}

function bindAdminWalletSecret(el) {
  if (!el) return;
  el.classList.add("wallet-admin-secret");

  el.addEventListener("dblclick", (e) => {
    if (e.altKey && canEditStandings()) {
      e.preventDefault();
      openAdminBetPicker();
    }
  });

  // Appui long mobile (menu contextuel)
  el.addEventListener("contextmenu", (e) => {
    if (!canEditStandings()) return;
    e.preventDefault();
    openAdminBetPicker();
  });

  let pressTimer = null;
  const stopPress = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      pressTimer = null;
    }
  };

  el.addEventListener("pointerdown", (e) => {
    if (!canEditStandings() || e.pointerType === "mouse") return;
    stopPress();
    pressTimer = setTimeout(() => {
      pressTimer = null;
      openAdminBetPicker();
      if (navigator.vibrate) navigator.vibrate(40);
    }, 480);
  });
  el.addEventListener("pointerup", stopPress);
  el.addEventListener("pointercancel", stopPress);
  el.addEventListener("pointerleave", stopPress);

  // Triple tap (le plus fiable sur iPhone / Android)
  let lastTap = 0;
  let tapCount = 0;
  el.addEventListener("touchend", (e) => {
    if (!canEditStandings()) return;
    const now = Date.now();
    tapCount = now - lastTap < 450 ? tapCount + 1 : 1;
    lastTap = now;
    if (tapCount >= 3) {
      tapCount = 0;
      stopPress();
      e.preventDefault();
      openAdminBetPicker();
      if (navigator.vibrate) navigator.vibrate(40);
    }
  });
}

function initBetEditModal() {
  const modal = document.getElementById("betEditModal");
  if (!modal) return;
  modal.querySelectorAll("[data-bet-edit-dismiss]").forEach((b) => b.addEventListener("click", closeBetEditModal));
  document.getElementById("betEditSave")?.addEventListener("click", saveBetEditModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeBetEditModal();
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "m" && canEditStandings()) {
      e.preventDefault();
      openAdminBetPicker();
    }
  });
  document.querySelectorAll("#walletBalance, #walletBalancePage").forEach(bindAdminWalletSecret);
}

// Lecture d'une cote forcée par l'admin (utilisée par odds.js).
window.CDM_getOddsOverride = function (matchId, market, sel) {
  const o = oddsOverrides[matchId];
  return o ? o[`${market}|${sel}`] : undefined;
};

// Définit/efface une cote forcée puis synchronise (value null/NaN => retour auto).
function setOddsOverride(matchId, market, sel, value) {
  const key = `${market}|${sel}`;
  if (value == null || Number.isNaN(value) || value <= 1) {
    if (oddsOverrides[matchId]) {
      delete oddsOverrides[matchId][key];
      if (!Object.keys(oddsOverrides[matchId]).length) delete oddsOverrides[matchId];
    }
  } else {
    if (!oddsOverrides[matchId]) oddsOverrides[matchId] = {};
    oddsOverrides[matchId][key] = Math.round(value * 100) / 100;
  }
  persistData();
}

function setBettingMaintenance(on) {
  bettingMaintenance = !!on;
  persistData();
  renderBettingPage();
  showToast(
    "info",
    bettingMaintenance ? "Paris en maintenance" : "Paris ouverts",
    bettingMaintenance
      ? "Les paris sont maintenant cachés pour les autres joueurs."
      : "Les paris sont de nouveau visibles par tout le monde."
  );
}
let knockoutFilter = "all";
let bracket = loadBracket();
let matchRefreshTimer = null;

function getScore(m) {
  const s = getScoreRecord(m);
  if (!s || s.h === undefined || s.a === undefined) return null;
  return { h: Number(s.h), a: Number(s.a) };
}

// Liste des buteurs saisie par l'admin (pour résoudre les paris "buteur").
function getScorers(m) {
  const s = getScoreRecord(m);
  return Array.isArray(s && s.scorers) ? s.scorers : [];
}

function setScorers(m, names) {
  const rec = getScoreRecord(m);
  if (!rec) return;
  setScoreRecord(m, { ...rec, scorers: Array.from(new Set(names)) });
  if (!isDevSoonMode()) persistData();
  showToast("success", "Buteurs enregistrés", names.length ? names.join(", ") : "Aucun buteur retenu.");
  if (!canSettleMatchBets(m)) return;
  const win = settleMatchBets(m, { score: getScore(m), scorers: getScorers(m) });
  renderBettingPage();
  if (win > 0) showToast("success", "Paris buteur gagnés", `+${win} 💰 ajoutés au solde.`);
}

function isBigMatch(m) {
  return !!(window.Odds && window.Odds.isBigMatch(m));
}

function hasScore(m) {
  const s = getScore(m);
  return s !== null && !Number.isNaN(s.h) && !Number.isNaN(s.a);
}

function isMatchFinalized(m) {
  const s = getScoreRecord(m);
  return !!(s && s.final === true);
}

function canSettleMatchBets(m) {
  if (isTestFlagged(m)) return true;
  return isMatchFinalized(m);
}

function recalcStandingsFromScores() {
  Object.keys(GROUPS).forEach((g) => {
    GROUPS[g].forEach((team) => {
      standings[g][team] = 0;
    });
  });

  matches.forEach((m) => {
    const s = getScore(m);
    if (!s || Number.isNaN(s.h) || Number.isNaN(s.a)) return;
    if (!isMatchFinalized(m)) return;
    const g = m.g;
    if (s.h > s.a) {
      standings[g][m.h] = (standings[g][m.h] ?? 0) + 3;
    } else if (s.h < s.a) {
      standings[g][m.a] = (standings[g][m.a] ?? 0) + 3;
    } else {
      standings[g][m.h] = (standings[g][m.h] ?? 0) + 1;
      standings[g][m.a] = (standings[g][m.a] ?? 0) + 1;
    }
  });
}

function saveMatchScore(m, h, a) {
  if (h === "" && a === "") {
    setScoreRecord(m, null);
  } else {
    const hi = parseInt(h, 10);
    const ai = parseInt(a, 10);
    if (Number.isNaN(hi) || Number.isNaN(ai) || hi < 0 || ai < 0) {
      showToast("error", "Erreur", "Score invalide.");
      return;
    }
    const prev = getScoreRecord(m);
    const next = { h: hi, a: ai };
    if (prev && Array.isArray(prev.scorers)) next.scorers = prev.scorers;
    if (prev && prev.final && prev.h === hi && prev.a === ai) next.final = true;
    setScoreRecord(m, next);
  }
  recalcStandingsFromScores();
  if (!isDevSoonMode()) persistData();
  else if (h !== "" && a !== "") showToast("info", "Mode ?soon", "Score local uniquement — rien n'est envoyé sur le site public.");
  // Résout les paris seulement si le match est terminé (ou en mode test).
  const winnings =
    h === "" || a === "" || !canSettleMatchBets(m)
      ? 0
      : settleMatchBets(m, { score: getScore(m), scorers: getScorers(m) });
  render();
  renderGroups();
  if (window.Betting) window.Betting.renderWalletBalance();
  renderBettingPage();
  if (winnings > 0) {
    setTimeout(() => showToast("success", "Paris gagnés", `+${winnings} 💰 ajoutés au solde.`), 150);
  }
}

// Résout, pour un match donné, tous les paris en attente à partir du score
// et des buteurs saisis. Les paris "buteur" non tranchables (buteurs pas
// encore saisis alors qu'il y a eu des buts) restent en attente.
function settleMatchBets(m, ctx) {
  if (!window.Betting || !window.Betting.resolveBetWith) return 0;
  if (!canSettleMatchBets(m)) return 0;
  if (!ctx) ctx = betContext(m);
  if (!ctx.score) return 0;
  const pending = window.Betting.getPendingBets().filter((b) => b.matchId === m.id);

  let changed = false;
  let winnings = 0;
  pending.forEach((bet) => {
    const r = window.Betting.resolveBetWith(bet.id, ctx.score, ctx.scorers);
    if (r.success) {
      changed = true;
      if (r.won) winnings += r.amount;
    }
  });

  // Combinés touchant ce match : tentés dès qu'un score est saisi.
  const combos = window.Betting.getPendingBets().filter(
    (b) => b.type === "combo" && b.legs.some((l) => l.matchId === m.id)
  );
  combos.forEach((bet) => {
    const r = window.Betting.resolveComboWith(bet.id, resolvableCtx);
    if (r.success) {
      changed = true;
      if (r.won) winnings += r.amount;
    }
  });

  if (changed) {
    window.Betting.renderWalletBalance();
    syncAfterBetChange();
  }
  return winnings;
}

// Saisie d'un score de test sur un vrai match (mode test). Ne touche pas aux
// vrais scores ni au classement réel : résout les paris immédiatement.
function saveTestScore(m, h, a) {
  const o = getTestScores();
  if (h === "" && a === "") {
    delete o[m.id];
    saveTestScores(o);
    renderBettingPage();
    showToast("info", "Score test effacé", "Le match repart à zéro.");
    return;
  }
  const hi = parseInt(h, 10);
  const ai = parseInt(a, 10);
  if (Number.isNaN(hi) || Number.isNaN(ai) || hi < 0 || ai < 0) {
    showToast("error", "Erreur", "Score invalide.");
    return;
  }
  o[m.id] = { ...(o[m.id] || {}), h: hi, a: ai };
  saveTestScores(o);
  const win = settleMatchBets(m, { score: { h: hi, a: ai }, scorers: getTestScorers(m) });
  renderBettingPage();
  showToast("success", "Score test enregistré", win > 0 ? `+${win} 💰 de gains résolus.` : "Paris résolus.");
}

function setTestScorers(m, names) {
  const o = getTestScores();
  if (!o[m.id]) return;
  o[m.id] = { ...o[m.id], scorers: Array.from(new Set(names)) };
  saveTestScores(o);
  const win = settleMatchBets(m, { score: getTestScore(m), scorers: o[m.id].scorers });
  renderBettingPage();
  if (win > 0) showToast("success", "Paris buteur gagnés", `+${win} 💰 ajoutés au solde.`);
}

function isMatchClockEnded(m) {
  return Date.now() >= getDateObj(m).getTime() + MATCH_MS;
}

function finalizeMatch(m) {
  if (!hasScore(m)) {
    showToast("error", "Score requis", "Enregistre d'abord le score avec OK, puis clique « Fin du match ».");
    return;
  }
  if (isMatchFinalized(m)) return;
  if (!isTestFlagged(m) && !isMatchClockEnded(m)) {
    showToast(
      "error",
      "Trop tôt",
      "Le temps réglementaire n'est pas écoulé. OK = score en direct · 🏁 Fin du match = uniquement à la fin."
    );
    return;
  }
  setScoreRecord(m, { ...getScoreRecord(m), final: true });
  recalcStandingsFromScores();
  if (!isDevSoonMode()) persistData();
  else showToast("info", "Mode ?soon", "Match validé en local seulement — le site public n'est pas modifié.");
  const winnings = settleMatchBets(m, { score: getScore(m), scorers: getScorers(m) });
  render();
  renderGroups();
  if (window.Betting) window.Betting.renderWalletBalance();
  renderBettingPage();
  if (winnings > 0) {
    showToast("success", "Match terminé", `Score validé · +${winnings} 💰 de gains résolus.`);
  } else {
    showToast("success", "Match terminé", "Score validé · les paris sont résolus (buteurs : saisis-les si besoin).");
  }
}

function clearMatchScore(m) {
  setScoreRecord(m, null);
  recalcStandingsFromScores();
  if (!isDevSoonMode()) persistData();
  render();
  renderGroups();
  showToast("info", "Score effacé", "Le classement est mis à jour. Les paris déjà résolus ne sont pas annulés.");
}

function scoreBlockHtml(m) {
  const s = getScore(m);
  const admin = canEditStandings() && !m._knockout;

  if (admin) {
    const hv = s ? s.h : "";
    const av = s ? s.a : "";
    const finalized = isMatchFinalized(m);
    const canFinalize = s && !finalized && (isTestFlagged(m) || isMatchClockEnded(m));
    return `
      <div class="score-row score-admin">
        <label class="score-label">Score${finalized ? " · validé ✓" : ""}</label>
        <input type="number" min="0" max="15" class="score-in" data-side="h" value="${hv}" placeholder="0" aria-label="Buts ${m.h}"${finalized ? " readonly" : ""}>
        <span class="score-sep">–</span>
        <input type="number" min="0" max="15" class="score-in" data-side="a" value="${av}" placeholder="0" aria-label="Buts ${m.a}"${finalized ? " readonly" : ""}>
        ${finalized ? "" : '<button type="button" class="score-save">OK</button>'}
        ${canFinalize ? '<button type="button" class="score-finalize">🏁 Fin du match</button>' : ""}
        ${s ? '<button type="button" class="score-clear" title="Effacer le score">✕</button>' : ""}
      </div>
      ${!finalized && s && !canFinalize ? '<p class="score-admin-hint">OK = score provisoire en direct · le bouton 🏁 Fin du match apparaît à la fin du temps réglementaire.</p>' : ""}
      ${!finalized && s && canFinalize ? '<p class="score-admin-hint">OK = enregistrer le score provisoire · 🏁 Fin du match = valider définitivement et résoudre les paris.</p>' : ""}
      ${scorersEditorHtml(m)}
    `;
  }

  if (s) {
    return `
      <div class="score-row score-result">
        <span class="score-num">${s.h}</span>
        <span class="score-sep">–</span>
        <span class="score-num">${s.a}</span>
      </div>
    `;
  }

  return "";
}

// Éditeur de buteurs : visible en mode admin, sur les matchs d'une grosse
// équipe, une fois le score saisi. Sert à résoudre les paris "buteur".
function scorersEditorHtml(m, test = false) {
  if (!isBigMatch(m) || typeof SQUADS === "undefined") return "";
  const score = test ? getTestScore(m) : getScore(m);
  if (!score) return "";
  const selected = new Set(test ? getTestScorers(m) : getScorers(m));
  const teamBlock = (team) => {
    if (!SQUADS[team]) return "";
    const chips = Object.values(SQUADS[team].groups)
      .flat()
      .map(
        (p) =>
          `<button type="button" class="scorer-chip${selected.has(p.name) ? " on" : ""}" data-scorer="${escapeHtml(p.name)}">${escapeHtml(p.name)}</button>`
      )
      .join("");
    return `<div class="scorers-team"><div class="scorers-team-name">${teamLabel(team)}</div><div class="scorer-chips">${chips}</div></div>`;
  };
  const saveClass = test ? "test-scorers-save" : "scorers-save";
  return `
    <div class="scorers-editor">
      <button type="button" class="scorers-toggle">⚽ Buteurs (${selected.size}) ▾</button>
      <div class="scorers-panel hidden">
        <p class="section-hint">Coche les joueurs qui ont marqué puis enregistre — nécessaire pour résoudre les paris « buteur ».</p>
        ${teamBlock(m.h)}
        ${teamBlock(m.a)}
        <div class="scorer-custom-add">
          <input type="text" class="scorer-custom-in" placeholder="Autre buteur (ex. Ismaël Saibari)" aria-label="Autre buteur">
          <span class="section-hint">Pas dans la liste ? Saisis le nom ici — il sera compté à l'enregistrement.</span>
        </div>
        <button type="button" class="admin-btn ${saveClass}">Enregistrer les buteurs</button>
      </div>
    </div>
  `;
}

function bindScoreControls(card, m) {
  const toggle = card.querySelector(".scorers-toggle");
  if (toggle) {
    const panel = card.querySelector(".scorers-panel");
    toggle.addEventListener("click", () => panel?.classList.toggle("hidden"));
    card.querySelectorAll(".scorer-chip").forEach((chip) => {
      chip.addEventListener("click", () => chip.classList.toggle("on"));
    });
    card.querySelector(".scorers-save")?.addEventListener("click", () => {
      const names = [...card.querySelectorAll(".scorer-chip.on")].map((c) => c.dataset.scorer);
      const custom = card.querySelector(".scorer-custom-in")?.value?.trim();
      if (custom) names.push(custom);
      setScorers(m, names);
    });
  }

  const saveBtn = card.querySelector(".score-save");
  saveBtn?.addEventListener("click", () => {
    const h = card.querySelector('.score-in[data-side="h"]')?.value ?? "";
    const a = card.querySelector('.score-in[data-side="a"]')?.value ?? "";
    saveMatchScore(m, h, a);
  });

  card.querySelector(".score-finalize")?.addEventListener("click", () => finalizeMatch(m));

  card.querySelector(".score-clear")?.addEventListener("click", () => clearMatchScore(m));

  if (saveBtn) {
    card.querySelectorAll(".score-in").forEach((input) => {
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") saveBtn.click();
      });
    });
  }
}

function bindBettingControls(card, m) {
  const section = card.querySelector(".betting-section");
  if (!section) return;

  const options = section.querySelectorAll(".betting-option");
  const quickAmounts = section.querySelectorAll(".quick-amount");
  const input = section.querySelector(".betting-input");
  const btn = section.querySelector(".betting-btn");
  const info = section.querySelector(".betting-selection-info");
  if (!input || !btn) return; // mode édition des cotes : pas de zone de mise
  let sel = null;

  options.forEach((opt) => {
    opt.addEventListener("click", () => {
      options.forEach((o) => o.classList.remove("selected"));
      opt.classList.add("selected");
      sel = {
        market: opt.dataset.market,
        selection: opt.dataset.selection,
        odds: parseFloat(opt.dataset.odds),
        label: opt.dataset.label
      };
      if (info) {
        info.hidden = false;
        info.innerHTML = `<span>Sélection : <strong>${escapeHtml(sel.label)}</strong> · cote ${sel.odds.toFixed(2)}</span><button type="button" class="combo-add-btn">➕ Combiné</button>`;
        info.querySelector(".combo-add-btn")?.addEventListener("click", () => {
          if (!isTestFlagged(m) && getMatchStatus(m).key !== "upcoming") {
            showToast("error", "Trop tard", "Le match a commencé.");
            return;
          }
          addToCombo({
            matchId: m.id,
            market: sel.market,
            selection: sel.selection,
            label: sel.label,
            odds: sel.odds,
            matchLabel: `${m.h} - ${m.a}`
          });
        });
      }
      updateBetButton();
    });
  });

  quickAmounts.forEach((qa) => {
    qa.addEventListener("click", () => {
      const amount = parseInt(qa.dataset.amount, 10);
      if (amount <= window.Betting.getBalance()) {
        input.value = amount;
        updateBetButton();
      } else {
        showToast("error", "Erreur", "Solde insuffisant");
      }
    });
  });

  input.addEventListener("input", updateBetButton);

  function updateBetButton() {
    const amount = parseInt(input.value, 10);
    if (sel && amount > 0 && amount <= window.Betting.getBalance()) {
      btn.disabled = false;
      btn.textContent = `Parier ${amount} 💰 · gain ${Math.floor(amount * sel.odds)} 💰`;
    } else {
      btn.disabled = true;
      btn.textContent = "Parier";
    }
  }

  btn.addEventListener("click", () => {
    if (!isTestFlagged(m) && getMatchStatus(m).key !== "upcoming") {
      showToast("error", "Trop tard", "Les paris sont fermés : le match a commencé.");
      renderBettingPage();
      return;
    }
    if (!sel) return;
    const amount = parseInt(input.value, 10);
    const result = window.Betting.createBet(m.id, sel.market, sel.selection, sel.label, amount, sel.odds);
    if (result.success) {
      showToast("success", "Pari placé !", `${sel.label} — gain potentiel ${result.bet.potentialWin} 💰`);
      window.Betting.renderWalletBalance();
      syncAfterBetChange();
      renderBettingPage();
    } else {
      showToast("error", "Erreur", result.error);
    }
  });
}

// Résout, sur CHAQUE appareil, les paris dont le match a un résultat officiel.
// Les vrais matchs ne sont résolus qu'une fois terminés ; les matchs de test
// dès qu'un score est saisi par l'admin. Les paris "buteur" attendent la
// saisie des buteurs (sauf 0-0 où personne n'a marqué).
function resolveDueBets() {
  if (!window.Betting || !window.Betting.resolveBetWith) return;
  const pending = window.Betting.getPendingBets();
  if (!pending.length) return;

  let changed = false;
  let winnings = 0;

  pending.forEach((bet) => {
    let r;
    if (bet.type === "combo") {
      r = window.Betting.resolveComboWith(bet.id, resolvableCtx);
    } else {
      const m = getAnyMatch(bet.matchId);
      if (!m) return;
      const ctx = betContext(m);
      if (!ctx.score) return;
      if (!canSettleMatchBets(m)) return;
      r = window.Betting.resolveBetWith(bet.id, ctx.score, ctx.scorers);
    }
    if (r && r.success) {
      changed = true;
      if (r.won) winnings += r.amount;
    }
  });

  if (changed) {
    window.Betting.renderWalletBalance();
    syncAfterBetChange();
    if (winnings > 0) {
      showToast("success", "Paris gagnés", `+${winnings} 💰 ajoutés à ton solde.`);
    }
  }
}

// Pousse les stats à jour puis re-télécharge le classement (dans l'ordre).
async function syncAfterBetChange() {
  if (!window.Players) return;
  await window.Players.pushStats();
  renderLeaderboard();
}

function escapeHtml(str) {
  return String(str ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[c]));
}

function bettingOddsBtn(market, s) {
  return `
    <button type="button" class="betting-option${s.custom ? " custom" : ""}" data-market="${market}" data-selection="${escapeHtml(s.sel)}" data-label="${escapeHtml(s.label)}" data-odds="${s.odds}">
      <span class="bo-label">${escapeHtml(s.short)}</span>
      <span class="betting-odds">${s.odds.toFixed(2)}</span>
    </button>`;
}

function marketBoardHtml(m) {
  if (!window.Odds) return "";
  return window.Odds.getMarketBoard(m)
    .map(
      (mk) => `
      <div class="market-block">
        <div class="market-title">${escapeHtml(mk.title)}</div>
        <div class="market-options${mk.layout === "row" ? " scroll" : ""}">
          ${mk.selections.map((s) => bettingOddsBtn(mk.key, s)).join("")}
        </div>
      </div>`
    )
    .join("");
}

// Rendu d'édition des cotes (mode admin) : chaque sélection devient un champ
// éditable. Remplacer la valeur + Entrée force la cote ; vider = retour auto.
function editableBoardHtml(m) {
  if (!window.Odds) return "";
  return window.Odds.getMarketBoard(m)
    .map(
      (mk) => `
      <div class="market-block">
        <div class="market-title">${escapeHtml(mk.title)}</div>
        <div class="odds-edit-list">
          ${mk.selections
            .map(
              (s) => `
            <label class="odds-edit-row${s.custom ? " custom" : ""}">
              <span class="oe-label">${escapeHtml(s.short)}</span>
              <input type="number" step="0.01" min="1.01" class="odds-edit-in" data-market="${mk.key}" data-sel="${escapeHtml(s.sel)}" value="${s.odds.toFixed(2)}">
            </label>`
            )
            .join("")}
        </div>
      </div>`
    )
    .join("");
}

function createBettingMatchCard(m) {
  const big = isBigMatch(m);
  const admin = canEditStandings();
  const editing = admin && oddsEditMatches.has(m.id);
  const card = document.createElement("div");
  card.className = "card betting-match-card" + (big ? " big-match" : "") + (editing ? " editing-odds" : "");

  const hasOverrides = !!(oddsOverrides[m.id] && Object.keys(oddsOverrides[m.id]).length);
  const editHead = admin
    ? `<div class="market-board-head">
        ${editing ? '<span class="oe-hint">Remplace une cote puis Entrée · champ vide = auto</span>' : ""}
        <button type="button" class="odds-edit-toggle">${editing ? "✓ Terminer" : "✏️ Modifier les cotes"}</button>
        <button type="button" class="odds-reset-btn"${hasOverrides ? "" : " disabled"} title="Remettre toutes les cotes de ce match en auto">↺ Réinitialiser</button>
      </div>`
    : "";

  const betSection = editing
    ? `<div class="market-board editable">${editableBoardHtml(m)}</div>`
    : `<div class="market-board">${marketBoardHtml(m)}</div>
      <div class="quick-bet-amounts">
        <button class="quick-amount" data-amount="10">10 💰</button>
        <button class="quick-amount" data-amount="25">25 💰</button>
        <button class="quick-amount" data-amount="50">50 💰</button>
        <button class="quick-amount" data-amount="100">100 💰</button>
      </div>
      <div class="betting-selection-info" hidden></div>
      <div class="betting-input-row">
        <input type="number" class="betting-input" placeholder="Montant (💰)" min="1" max="${window.Betting.getBalance()}">
        <button class="betting-btn" disabled>Parier</button>
      </div>`;

  card.innerHTML = `
    <div class="row">
      <div class="teams">
        <span class="team-line">${teamLabel(m.h)}</span>
        <span class="vs">vs</span>
        <span class="team-line">${teamLabel(m.a)}</span>
      </div>
      <div class="time-col">
        ${big ? '<span class="big-badge">+ de paris</span>' : ""}
        <span class="time">${m.t}</span>
      </div>
    </div>
    <div class="betting-section" data-match-id="${m.id}">
      ${editHead}
      ${betSection}
    </div>
    ${testControlsHtml(m)}
    <div class="meta">
      <span class="date">📅 ${getDateLabel(m)}</span>
      ${m.g ? `<span class="badge">Groupe ${m.g}</span>` : ""}
      ${m.d ? `<span class="badge jour">J${m.d}</span>` : ""}
    </div>
  `;
  bindBettingControls(card, m);
  bindTestMatchControls(card, m);
  bindOddsEditControls(card, m);
  return card;
}

function bindOddsEditControls(card, m) {
  card.querySelector(".odds-edit-toggle")?.addEventListener("click", () => {
    if (oddsEditMatches.has(m.id)) oddsEditMatches.delete(m.id);
    else oddsEditMatches.add(m.id);
    renderBettingPage();
  });

  card.querySelector(".odds-reset-btn")?.addEventListener("click", () => {
    if (!oddsOverrides[m.id] || !Object.keys(oddsOverrides[m.id]).length) {
      showToast("info", "Rien à réinitialiser", "Ce match utilise déjà les cotes auto.");
      return;
    }
    if (!window.confirm(`Remettre toutes les cotes de ${m.h} vs ${m.a} en automatique ?`)) return;
    delete oddsOverrides[m.id];
    persistData();
    renderBettingPage();
    showToast("success", "Cotes réinitialisées", "Le match repasse sur les cotes auto.");
  });

  card.querySelectorAll(".odds-edit-in").forEach((inp) => {
    const commit = () => {
      const raw = inp.value.trim();
      const v = parseFloat(raw);
      const isAuto = raw === "" || Number.isNaN(v) || v <= 1;
      setOddsOverride(m.id, inp.dataset.market, inp.dataset.sel, isAuto ? null : v);
      const row = inp.closest(".odds-edit-row");
      if (isAuto) {
        row?.classList.remove("custom");
      } else {
        row?.classList.add("custom");
        inp.value = (Math.round(v * 100) / 100).toFixed(2);
      }
    };
    inp.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        commit();
        inp.blur();
      }
    });
    inp.addEventListener("change", commit);
  });
}

// Contrôles de test affichés sur les cartes de paris quand le mode test est actif.
function testControlsHtml(m) {
  if (!(window.Players && window.Players.isTestMode())) return "";
  const flagged = getTestMatchIds().has(m.id);
  const admin = canEditStandings();
  let html = `<div class="test-controls">
    <button type="button" class="test-flag-btn${flagged ? " on" : ""}">${flagged ? "🧪 En test — clique pour retirer" : "🧪 Tester ce match"}</button>`;
  if (flagged && admin) {
    const s = getTestScore(m);
    html += `
      <div class="score-row score-admin test-score-row">
        <label class="score-label">Score test</label>
        <input type="number" min="0" max="15" class="test-score-in" data-side="h" value="${s ? s.h : ""}" placeholder="0" aria-label="Buts ${m.h}">
        <span class="score-sep">–</span>
        <input type="number" min="0" max="15" class="test-score-in" data-side="a" value="${s ? s.a : ""}" placeholder="0" aria-label="Buts ${m.a}">
        <button type="button" class="test-score-save">OK</button>
        ${s ? '<button type="button" class="test-score-clear" title="Effacer le score test">✕</button>' : ""}
      </div>
      ${scorersEditorHtml(m, true)}`;
  } else if (flagged && !admin) {
    html += `<p class="section-hint">Connecte-toi en admin (page Poules) pour saisir un score de test.</p>`;
  }
  html += "</div>";
  return html;
}

function bindTestMatchControls(card, m) {
  card.querySelector(".test-flag-btn")?.addEventListener("click", () => {
    toggleTestMatch(m.id);
    renderBettingPage();
  });

  const save = card.querySelector(".test-score-save");
  if (save) {
    save.addEventListener("click", () => {
      const h = card.querySelector('.test-score-in[data-side="h"]')?.value ?? "";
      const a = card.querySelector('.test-score-in[data-side="a"]')?.value ?? "";
      saveTestScore(m, h, a);
    });
    card.querySelectorAll(".test-score-in").forEach((inp) => {
      inp.addEventListener("keydown", (e) => {
        if (e.key === "Enter") save.click();
      });
    });
  }
  card.querySelector(".test-score-clear")?.addEventListener("click", () => saveTestScore(m, "", ""));

  const toggle = card.querySelector(".scorers-toggle");
  if (toggle) {
    const panel = card.querySelector(".scorers-panel");
    toggle.addEventListener("click", () => panel?.classList.toggle("hidden"));
    card.querySelectorAll(".scorer-chip").forEach((chip) => {
      chip.addEventListener("click", () => chip.classList.toggle("on"));
    });
    card.querySelector(".test-scorers-save")?.addEventListener("click", () => {
      const names = [...card.querySelectorAll(".scorer-chip.on")].map((c) => c.dataset.scorer);
      setTestScorers(m, names);
      showToast("success", "Buteurs test enregistrés", names.length ? names.join(", ") : "Aucun buteur retenu.");
    });
  }
}

function getDateObj(m) {
  return new Date(`${m.date}T${m.t}:00`);
}

function getDateLabel(m) {
  return getDateObj(m).toLocaleString("fr-FR", {
    weekday: "short",
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function todayKey() {
  const n = new Date();
  return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}-${String(n.getDate()).padStart(2, "0")}`;
}

function isMatchToday(m) {
  return !!(m && m.date === todayKey());
}

function getTodayAllMatches() {
  const key = todayKey();
  const group = matches.filter((m) => m.date === key);
  const ko = KNOCKOUT.filter((k) => k.date === key).map((k) => ({
    ...k,
    id: `ko-${k.phase}-${k.date}-${k.t}`,
    _knockout: true
  }));
  return sortMatches([...group, ...ko]);
}

function betInvolvesToday(bet) {
  if (!bet || bet.status !== "pending") return false;
  if (bet.type === "combo") {
    return bet.legs.some((l) => isMatchToday(getAnyMatch(l.matchId)));
  }
  return isMatchToday(getAnyMatch(bet.matchId));
}

function getTodayPendingBets() {
  if (!window.Betting) return [];
  return window.Betting.getPendingBets().filter(betInvolvesToday);
}

function todayBetCardHtml(bet) {
  const isCombo = bet.type === "combo";
  if (isCombo) {
    const legs = bet.legs
      .map((l) => {
        const mm = getAnyMatch(l.matchId);
        const today = isMatchToday(mm);
        return `<div class="today-bet-leg${today ? " today-leg" : ""}">${today ? "📅 " : ""}${escapeHtml(l.matchLabel)} · ${escapeHtml(l.label)}</div>`;
      })
      .join("");
    return `
      <div class="bet-card combo-bet today-bet-card">
        <div class="bet-header"><span class="bet-status pending">Combiné</span><span class="bet-odds">${bet.odds.toFixed(2)}</span></div>
        <div class="combo-bet-legs">${legs}</div>
        <div class="bet-details"><span class="bet-amount">${bet.amount} 💰</span><span class="bet-potential">→ ${bet.potentialWin} 💰</span></div>
      </div>`;
  }
  const match = getAnyMatch(bet.matchId);
  if (!match) return "";
  const pick = bet.label || (bet.betType === "home" ? match.h : bet.betType === "away" ? match.a : "Nul");
  const st = getMatchStatus(match);
  return `
    <div class="bet-card today-bet-card">
      <div class="bet-header">
        <span class="bet-status pending">${st.label}</span>
        <span class="bet-odds">${bet.odds.toFixed(2)}</span>
      </div>
      <div class="bet-match">${teamLabel(match.h)} vs ${teamLabel(match.a)} · ${match.t}</div>
      <div class="bet-details">
        <span>${escapeHtml(pick)}</span>
        <span class="bet-potential">${bet.amount} 💰 → ${bet.potentialWin} 💰</span>
      </div>
    </div>`;
}

function getMatchStatus(m) {
  if (isMatchFinalized(m)) return { key: "done", label: "Terminé" };
  const start = getDateObj(m);
  const end = new Date(start.getTime() + MATCH_MS);
  const now = new Date();
  if (now < start) return { key: "upcoming", label: "À venir" };
  if (now <= end) return { key: "live", label: "En cours" };
  if (hasScore(m)) return { key: "await", label: "À valider" };
  return { key: "await", label: "Score manquant" };
}

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAV_KEY) || "[]");
  } catch (_) {
    return [];
  }
}

function isFavorite(team) {
  return getFavorites().includes(team);
}

function setFavorites(list) {
  localStorage.setItem(FAV_KEY, JSON.stringify(Array.isArray(list) ? list : []));
}

// Données de profil synchronisées entre appareils (solde + paris + favoris).
window.CDM_collectProfileData = function () {
  const st = window.Betting && window.Betting.exportState ? window.Betting.exportState() : { wallet: null, bets: [] };
  return { wallet: st.wallet, bets: st.bets, favorites: getFavorites(), bracket };
};

function applyProfileData(data) {
  if (!data || typeof data !== "object") return;
  if (window.Betting && window.Betting.importState) {
    window.Betting.importState({ wallet: data.wallet, bets: data.bets });
  }
  if (Array.isArray(data.favorites)) setFavorites(data.favorites);
  if (data.bracket) {
    bracket = normalizeBracket(data.bracket);
    saveBracketLocal();
    renderKnockout();
    renderBracketTease();
  }
}

function toggleFavorite(team) {
  let list = getFavorites();
  if (list.includes(team)) {
    list = list.filter((t) => t !== team);
  } else {
    list = [...list, team];
    // Donner le bonus favori si c'est le premier favori
    if (window.Betting && list.length === 1) {
      const bonusGiven = window.Betting.giveFavoriteBonus();
      if (bonusGiven) {
        setTimeout(() => showToast("success", "Bonus reçu !", `+${FAVORITE_BONUS} 💰 Bonus favori`), 100);
      }
    }
  }
  localStorage.setItem(FAV_KEY, JSON.stringify(list));
  render();
  renderGroups();
  if (window.Betting) window.Betting.renderWalletBalance();
  // Synchronise les favoris (et le profil) en ligne si l'utilisateur est inscrit.
  if (window.Players && window.Players.hasJoined()) window.Players.pushStats();
}

function teamFavButton(team) {
  const on = isFavorite(team) ? " on" : "";
  return `<button type="button" class="fav-star${on}" data-fav-team="${team}" title="${on ? "Retirer des favoris" : "Ajouter aux favoris"}">★</button>`;
}

function bindFavStars(root) {
  root.querySelectorAll(".fav-star").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(btn.dataset.favTeam);
    });
  });
}

function filterMatch(m, q) {
  const s = `${m.h} ${m.a} ${m.g}`.toLowerCase();
  return s.includes(q.toLowerCase());
}

function sortMatches(list) {
  return [...list].sort((a, b) => getDateObj(a) - getDateObj(b));
}

function matchInvolvesFav(m) {
  const fav = getFavorites();
  return fav.includes(m.h) || fav.includes(m.a);
}

function createCard(m, opts = {}) {
  const { knockout = false } = opts;
  const status = knockout ? null : getMatchStatus(m);
  const card = document.createElement("div");
  card.className = "card " + (m.tag || "");
  if (hasScore(m)) card.classList.add("has-score");
  if (status?.key === "live") card.classList.add("live");
  if (status?.key === "await") card.classList.add("await");
  if (status?.key === "done") card.classList.add("done");

  const favMark = (t) => (isFavorite(t) ? '<span class="fav-dot" title="Favori">★</span>' : "");
  const admin = canEditStandings() && !knockout;
  const s = knockout ? null : getScore(m);
  const scorePublic =
    !admin && s
      ? `<div class="score-row score-result"><span class="score-num">${s.h}</span><span class="score-sep">–</span><span class="score-num">${s.a}</span></div>`
      : "";
  const scoreAdmin = admin ? scoreBlockHtml(m) : "";

  card.innerHTML = `
    <div class="row">
      <div class="teams">
        <span class="team-line">${favMark(m.h)}${teamLabel(m.h)}</span>
        <span class="vs">vs</span>
        <span class="team-line">${favMark(m.a)}${teamLabel(m.a)}</span>
      </div>
      <div class="time-col">
        ${scorePublic}
        ${status ? `<span class="status status-${status.key}">${status.label}</span>` : ""}
        <span class="time">${m.t}</span>
      </div>
    </div>
    ${scoreAdmin}
    <div class="meta">
      <span class="date">📅 ${knockout ? formatKnockoutDate(m) : getDateLabel(m)}</span>
      ${m.g ? `<span class="badge">Groupe ${m.g}</span>` : ""}
      ${m.d ? `<span class="badge jour">J${m.d}</span>` : ""}
      ${knockout && m.phase ? `<span class="badge">${PHASE_LABELS[m.phase] || m.phase}</span>` : ""}
    </div>
  `;

  if (!knockout) bindScoreControls(card, m);

  // Clic sur la carte = fiche détaillée du match (sauf clics sur un contrôle).
  card.classList.add("clickable-card");
  card.addEventListener("click", (e) => {
    if (e.target.closest("button, input, select, a, [data-team-roster]")) return;
    openMatchModal(m);
  });

  return card;
}

function formatKnockoutDate(m) {
  return getDateObj(m).toLocaleString("fr-FR", {
    weekday: "short",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function createKnockoutCard(k) {
  const card = document.createElement("div");
  card.className = "card knockout";
  if (k.phase === "finale") card.classList.add("finale");
  card.innerHTML = `
    <div class="knockout-label">${k.label}</div>
    <div class="meta">
      <span class="date">📅 ${formatKnockoutDate(k)}</span>
      <span class="badge">${PHASE_LABELS[k.phase]}</span>
    </div>
  `;
  return card;
}

function parseSlot(text) {
  if (!text) return null;
  const t = text.trim();
  const single = t.match(/(1er|2e)\s+groupe\s+([A-L])/i);
  if (single) return { kind: single[1].toLowerCase(), groups: [single[2].toUpperCase()] };
  const third = t.match(/3e\s*\(([A-Z/]+)\)/i);
  if (third) return { kind: "3e", groups: third[1].split("/").map((g) => g.toUpperCase()) };
  return null;
}

function slotShortLabel(slot) {
  if (!slot) return "?";
  if (slot.kind === "1er") return `1ᵉʳ ${slot.groups[0]}`;
  if (slot.kind === "2e") return `2ᵉ ${slot.groups[0]}`;
  return `3ᵉ (${slot.groups.join("/")})`;
}

const ROUND16_MATCHES = KNOCKOUT
  .filter((k) => k.phase === "16es")
  .map((k, i) => {
    const sides = k.label.split(/\s+vs\s+/i);
    return {
      idx: i,
      number: 73 + i,
      label: k.label,
      slots: [parseSlot(sides[0]), parseSlot(sides[1])]
    };
  });

function eligibleTeamsForSlot(slot) {
  if (!slot) return [];
  const set = new Set();
  slot.groups.forEach((g) => (GROUPS[g] || []).forEach((t) => set.add(t)));
  return [...set].sort((a, b) => a.localeCompare(b, "fr"));
}

function emptyBracket() {
  return {
    groups: Object.fromEntries(
      Object.keys(GROUPS).map((g) => [g, { first: "", second: "", third: "" }])
    ),
    thirdOrder: Object.keys(GROUPS).sort(),
    picks: {
      r32: Array(16).fill(""),
      r16: Array(8).fill(""),
      qf: Array(4).fill(""),
      sf: Array(2).fill(""),
      final: Array(1).fill("")
    }
  };
}

function normalizeBracket(data) {
  const base = emptyBracket();
  if (!data || typeof data !== "object") return base;

  if (data.groups && typeof data.groups === "object") {
    Object.keys(GROUPS).forEach((g) => {
      const p = data.groups[g];
      base.groups[g] = {
        first: p?.first || "",
        second: p?.second || "",
        third: p?.third || ""
      };
    });
  }

  if (Array.isArray(data.thirdOrder)) {
    const order = [];
    const seen = new Set();
    data.thirdOrder.forEach((g) => {
      if (GROUPS[g] && !seen.has(g)) {
        order.push(g);
        seen.add(g);
      }
    });
    Object.keys(GROUPS).forEach((g) => {
      if (!seen.has(g)) order.push(g);
    });
    base.thirdOrder = order.slice(0, 12);
  }

  BRACKET_ROUNDS.forEach((round) => {
    if (!Array.isArray(data.picks?.[round.key])) return;
    base.picks[round.key] = data.picks[round.key].slice(0, round.matchCount);
    while (base.picks[round.key].length < round.matchCount) base.picks[round.key].push("");
  });

  return base;
}

function groupPickComplete(g) {
  const p = bracket.groups?.[g];
  if (!p?.first || !p?.second || !p?.third) return false;
  return new Set([p.first, p.second, p.third]).size === 3;
}

function groupsComplete() {
  return Object.keys(GROUPS).every(groupPickComplete);
}

function clearKnockoutPicks() {
  BRACKET_ROUNDS.forEach((round) => {
    bracket.picks[round.key] = Array(round.matchCount).fill("");
  });
}

function validateBracket() {
  Object.keys(GROUPS).forEach((g) => {
    const p = bracket.groups[g];
    if (!p) return;
    ["first", "second", "third"].forEach((rank) => {
      if (p[rank] && !GROUPS[g].includes(p[rank])) p[rank] = "";
    });
  });

  BRACKET_ROUNDS.forEach((round) => {
    for (let i = 0; i < round.matchCount; i += 1) {
      const [a, b] = getBracketTeams(round.key, i);
      const pick = bracket.picks[round.key][i];
      if (pick && pick !== a && pick !== b) bracket.picks[round.key][i] = "";
    }
  });
}

function loadBracket() {
  try {
    return normalizeBracket(JSON.parse(localStorage.getItem(BRACKET_KEY)));
  } catch {
    return emptyBracket();
  }
}

function saveBracketLocal() {
  localStorage.setItem(BRACKET_KEY, JSON.stringify(bracket));
}

function persistBracket() {
  saveBracketLocal();
  syncAfterBetChange();
}

function setGroupPick(g, rank, team) {
  if (!bracket.groups[g]) bracket.groups[g] = { first: "", second: "", third: "" };
  bracket.groups[g][rank] = team;
  ["first", "second", "third"].forEach((r) => {
    if (r !== rank && bracket.groups[g][r] === team) bracket.groups[g][r] = "";
  });
  clearKnockoutPicks();
  persistBracket();
  renderKnockout();
}

function moveThirdGroup(group, dir) {
  const order = [...bracket.thirdOrder];
  const i = order.indexOf(group);
  const j = i + dir;
  if (i < 0 || j < 0 || j >= order.length) return;
  [order[i], order[j]] = [order[j], order[i]];
  bracket.thirdOrder = order;
  clearKnockoutPicks();
  persistBracket();
  renderKnockout();
}

function setBracketWinner(roundKey, matchIndex, team) {
  if (!team) return;
  bracket.picks[roundKey][matchIndex] = team;
  const idx = BRACKET_ROUNDS.findIndex((round) => round.key === roundKey);
  BRACKET_ROUNDS.slice(idx + 1).forEach((round) => {
    bracket.picks[round.key] = Array(round.matchCount).fill("");
  });
  persistBracket();
  renderKnockout();
}

function getBracketTeams(roundKey, matchIndex) {
  if (roundKey === "r32") {
    const auto = computeAutoSeeds()[matchIndex] || { home: "", away: "" };
    return [auto.home, auto.away];
  }

  const pair = BRACKET_PAIRS[roundKey]?.[matchIndex];
  if (!pair) return ["", ""];
  const prevKey = BRACKET_ROUNDS[BRACKET_ROUNDS.findIndex((round) => round.key === roundKey) - 1].key;
  return [
    bracket.picks[prevKey][pair[0]] || "",
    bracket.picks[prevKey][pair[1]] || ""
  ];
}

function bestThirdGroups() {
  return (bracket.thirdOrder || []).slice(0, 8);
}

// Affecte les 8 meilleurs 3es (choisis par l'utilisateur) aux slots FIFA.
function matchThirdsToSlots() {
  const qual = bestThirdGroups();
  const slots = [];
  ROUND16_MATCHES.forEach((m, mi) => {
    ["home", "away"].forEach((side) => {
      const slot = m.slots[side === "home" ? 0 : 1];
      if (slot && slot.kind === "3e") slots.push({ key: `${mi}-${side}`, allowed: slot.groups });
    });
  });
  slots.sort(
    (a, b) =>
      qual.filter((g) => a.allowed.includes(g)).length -
      qual.filter((g) => b.allowed.includes(g)).length
  );

  const assign = {};
  const used = new Set();
  const bt = (i) => {
    if (i === slots.length) return true;
    const slot = slots[i];
    for (const g of qual) {
      if (used.has(g) || !slot.allowed.includes(g)) continue;
      used.add(g);
      assign[slot.key] = g;
      if (bt(i + 1)) return true;
      used.delete(g);
      delete assign[slot.key];
    }
    return false;
  };
  bt(0);
  return assign;
}

function computeAutoSeeds() {
  if (!groupsComplete()) {
    return ROUND16_MATCHES.map(() => ({ home: "", away: "" }));
  }
  const thirds = matchThirdsToSlots();
  return ROUND16_MATCHES.map((m, mi) => {
    const teamFor = (slot, side) => {
      if (!slot) return "";
      if (slot.kind === "1er") return bracket.groups[slot.groups[0]]?.first || "";
      if (slot.kind === "2e") return bracket.groups[slot.groups[0]]?.second || "";
      const g = thirds[`${mi}-${side}`];
      return g ? bracket.groups[g]?.third || "" : "";
    };
    return { home: teamFor(m.slots[0], "home"), away: teamFor(m.slots[1], "away") };
  });
}

function resetBracketGame() {
  if (!window.confirm("Tout effacer ? Poules, 3es et tableau seront remis à zéro.")) return;
  bracket = emptyBracket();
  persistBracket();
  renderKnockout();
}

function groupRankSelect(g, rank) {
  const teams = GROUPS[g] || [];
  const current = bracket.groups[g]?.[rank] || "";
  const used = new Set(
    ["first", "second", "third"]
      .filter((r) => r !== rank)
      .map((r) => bracket.groups[g]?.[r])
      .filter(Boolean)
  );
  const labels = { first: "1er", second: "2e", third: "3e" };
  const opts = ['<option value="">— ' + labels[rank] + " —</option>"]
    .concat(
      teams.map((t) => {
        const sel = t === current ? " selected" : "";
        const dis = used.has(t) && t !== current ? " disabled" : "";
        return `<option value="${escapeHtml(t)}"${sel}${dis}>${teamLabel(t)}</option>`;
      })
    )
    .join("");
  return `<select class="bg-pick" data-group="${g}" data-rank="${rank}" aria-label="${labels[rank]} groupe ${g}">${opts}</select>`;
}

function groupGoalStats(g) {
  const stats = {};
  (GROUPS[g] || []).forEach((t) => {
    stats[t] = { gf: 0, ga: 0 };
  });
  matches.forEach((m) => {
    if (m.g !== g) return;
    const s = getScore(m);
    if (!s || Number.isNaN(s.h) || Number.isNaN(s.a)) return;
    if (!stats[m.h] || !stats[m.a]) return;
    stats[m.h].gf += s.h;
    stats[m.h].ga += s.a;
    stats[m.a].gf += s.a;
    stats[m.a].ga += s.h;
  });
  return stats;
}

function rankedGroup(g) {
  const gs = groupGoalStats(g);
  return [...GROUPS[g]].sort((a, b) => {
    const diff = (standings[g]?.[b] ?? 0) - (standings[g]?.[a] ?? 0);
    if (diff !== 0) return diff;
    const gdA = gs[a].gf - gs[a].ga;
    const gdB = gs[b].gf - gs[b].ga;
    if (gdB !== gdA) return gdB - gdA;
    if (gs[b].gf !== gs[a].gf) return gs[b].gf - gs[a].gf;
    return a.localeCompare(b, "fr");
  });
}

// Ordre d'affichage "en arbre" : chaque round est ordonné de haut en bas pour
// que les deux matchs qui alimentent un match du tour suivant soient adjacents.
function bracketDisplayOrder() {
  const keys = BRACKET_ROUNDS.map((r) => r.key);
  const order = {};
  order[keys[keys.length - 1]] = [0];
  for (let ri = keys.length - 2; ri >= 0; ri -= 1) {
    const key = keys[ri];
    const parentKey = keys[ri + 1];
    const arr = [];
    order[parentKey].forEach((pm) => {
      const pair = BRACKET_PAIRS[parentKey][pm];
      arr.push(pair[0], pair[1]);
    });
    order[key] = arr;
  }
  return order;
}

// Une ligne d'équipe dans une carte de match.
function bracketSlotHtml(roundKey, matchIndex, side, team) {
  const pick = bracket.picks[roundKey][matchIndex];
  const win = team && pick === team;
  const lose = pick && team && pick !== team;
  const cls = `bk-slot${win ? " win" : ""}${lose ? " lose" : ""}`;

  if (roundKey === "r32") {
    const name = team ? teamLabel(team) : '<span class="bk-empty">—</span>';
    return `<div class="${cls} bk-slot-readonly">
      <span class="bk-name">${name}</span>
      <button type="button" class="bk-pick" data-bracket-winner="${escapeHtml(team)}" data-round="r32" data-match="${matchIndex}" ${team ? "" : "disabled"} title="Désigner vainqueur">✓</button>
    </div>`;
  }

  const name = team ? teamLabel(team) : '<span class="bk-empty">à venir</span>';
  return `<button type="button" class="${cls} bk-team" data-bracket-winner="${escapeHtml(team)}" data-round="${roundKey}" data-match="${matchIndex}" ${team ? "" : "disabled"}>
    <span class="bk-name">${name}</span>
    <span class="bk-check">✓</span>
  </button>`;
}

// Carte d'un match du bracket.
function bracketCellHtml(roundKey, matchIndex) {
  const [home, away] = getBracketTeams(roundKey, matchIndex);
  const pick = bracket.picks[roundKey][matchIndex];
  const r32 = roundKey === "r32" ? ROUND16_MATCHES[matchIndex] : null;
  const meta = r32
    ? `<div class="bk-match-meta"><span class="bk-fifa">M${r32.number}</span><span class="bk-slotline">${slotShortLabel(r32.slots[0])} · ${slotShortLabel(r32.slots[1])}</span></div>`
    : "";
  return `<div class="bk-match${pick ? " decided" : ""}">
    ${meta}
    ${bracketSlotHtml(roundKey, matchIndex, "home", home)}
    <span class="bk-vs">vs</span>
    ${bracketSlotHtml(roundKey, matchIndex, "away", away)}
  </div>`;
}

// Étape 1 : choix manuel 1er / 2e / 3e de chaque poule.
function renderBracketGroups() {
  const box = document.getElementById("bracketGroups");
  if (!box) return;
  box.innerHTML = "";
  Object.keys(GROUPS).forEach((g) => {
    const done = groupPickComplete(g);
    const mini = document.createElement("div");
    mini.className = "bg-group" + (done ? " done" : "");
    mini.innerHTML = `
      <div class="bg-title">Groupe ${g}${done ? " ✓" : ""}</div>
      <div class="bg-pickers">
        <label class="bg-pick-row"><span>1er</span>${groupRankSelect(g, "first")}</label>
        <label class="bg-pick-row"><span>2e</span>${groupRankSelect(g, "second")}</label>
        <label class="bg-pick-row"><span>3e</span>${groupRankSelect(g, "third")}</label>
      </div>
    `;
    box.appendChild(mini);
  });

  box.querySelectorAll(".bg-pick").forEach((sel) => {
    sel.addEventListener("change", () => {
      setGroupPick(sel.dataset.group, sel.dataset.rank, sel.value);
    });
  });
}

// Étape 2 : classement des 12 troisièmes (8 premiers = qualifiés).
function renderBracketThirds() {
  const wrap = document.getElementById("bracketThirdsWrap");
  const list = document.getElementById("bracketThirds");
  if (!wrap || !list) return;

  if (!groupsComplete()) {
    wrap.classList.add("hidden");
    list.innerHTML = "";
    return;
  }
  wrap.classList.remove("hidden");
  list.innerHTML = "";

  bracket.thirdOrder.forEach((g, i) => {
    const team = bracket.groups[g]?.third || "";
    const qual = i < 8;
    const li = document.createElement("li");
    li.className = "bt-row" + (qual ? " qual" : "");
    li.innerHTML = `
      <span class="bt-rank">${i + 1}</span>
      <span class="bt-group">Grp ${g}</span>
      <span class="bt-team">${team ? teamLabel(team) : "—"}</span>
      ${qual ? '<span class="bg-badge t">Qualifié</span>' : ""}
      <span class="bt-actions">
        <button type="button" class="bt-move" data-group="${g}" data-dir="-1" ${i === 0 ? "disabled" : ""} title="Monter">↑</button>
        <button type="button" class="bt-move" data-group="${g}" data-dir="1" ${i === bracket.thirdOrder.length - 1 ? "disabled" : ""} title="Descendre">↓</button>
      </span>
    `;
    list.appendChild(li);
  });

  list.querySelectorAll(".bt-move").forEach((btn) => {
    btn.addEventListener("click", () => {
      moveThirdGroup(btn.dataset.group, parseInt(btn.dataset.dir, 10));
    });
  });
}

function renderBracketBuilder() {
  const box = document.getElementById("bracketBuilder");
  if (!box) return;

  if (!groupsComplete()) {
    box.innerHTML = `
      <div class="bracket-placeholder">
        <span class="bracket-placeholder-icon">🏆</span>
        <strong>Étape 3 — Ton tableau</strong>
        <p>Complète d'abord les 12 poules ci-dessus, puis classe les 3es. Les 16es se rempliront automatiquement.</p>
      </div>`;
    return;
  }

  const champion = bracket.picks.final[0];
  const finalTeams = getBracketTeams("final", 0).filter(Boolean);
  box.innerHTML = `
    <div class="bracket-head">
      <div>
        <h3>🏆 Étape 3 — Ton tableau</h3>
        <p class="section-hint">Les 16es sont pré-remplis d'après tes poules. Clique l'équipe qui passe pour la faire avancer jusqu'à la finale.</p>
      </div>
      <div class="bracket-actions">
        <button type="button" class="admin-btn outline" id="bracketShare">🔗 Partager</button>
        <button type="button" class="admin-btn outline danger" id="bracketReset">↺ Tout effacer</button>
      </div>
    </div>
    <div class="bracket-champion ${champion ? "filled" : ""}">
      <span class="bracket-trophy">🏆</span>
      <div>
        <span class="bracket-champion-label">Champion du monde</span>
        <strong>${champion ? teamLabel(champion) : "À déterminer"}</strong>
        ${finalTeams.length === 2 ? `<small>Finale : ${teamLabel(finalTeams[0])} — ${teamLabel(finalTeams[1])}</small>` : ""}
      </div>
    </div>
    <div class="bracket-scroll">
      <div class="bk-tree"></div>
    </div>
  `;

  const tree = box.querySelector(".bk-tree");
  const order = bracketDisplayOrder();
  const keys = BRACKET_ROUNDS.map((r) => r.key);

  keys.forEach((key, ri) => {
    const round = BRACKET_ROUNDS[ri];
    const col = document.createElement("div");
    col.className = `bk-round bk-round-${key}`;
    const head = document.createElement("div");
    head.className = "bk-round-head";
    head.textContent = round.label;
    const cells = document.createElement("div");
    cells.className = "bk-cells";
    order[key].forEach((mi) => {
      const cell = document.createElement("div");
      cell.className = "bk-cell";
      cell.innerHTML = bracketCellHtml(key, mi);
      cells.appendChild(cell);
    });
    col.appendChild(head);
    col.appendChild(cells);
    tree.appendChild(col);

    if (ri < keys.length - 1) {
      const nextKey = keys[ri + 1];
      const link = document.createElement("div");
      link.className = "bk-link";
      const linkHead = document.createElement("div");
      linkHead.className = "bk-link-head";
      const linkCells = document.createElement("div");
      linkCells.className = "bk-link-cells";
      order[nextKey].forEach((parentIdx) => {
        const item = document.createElement("div");
        item.className = "bk-link-item" + (bracket.picks[nextKey][parentIdx] ? " done" : "");
        linkCells.appendChild(item);
      });
      link.appendChild(linkHead);
      link.appendChild(linkCells);
      tree.appendChild(link);
    }
  });

  box.querySelectorAll("[data-bracket-winner]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.disabled) return;
      setBracketWinner(btn.dataset.round, parseInt(btn.dataset.match, 10), btn.dataset.bracketWinner);
    });
  });

  box.querySelector("#bracketReset")?.addEventListener("click", resetBracketGame);

  box.querySelector("#bracketShare")?.addEventListener("click", shareBracket);
}

function shareBracket() {
  const champion = bracket.picks.final[0];
  const finalTeams = getBracketTeams("final", 0).filter(Boolean);
  const text = [
    "🏆 Mon bracket CDM 2026",
    finalTeams.length === 2 ? `Finale : ${teamLabel(finalTeams[0])} vs ${teamLabel(finalTeams[1])}` : "Finale : à déterminer",
    champion ? `Champion : ${teamLabel(champion)}` : "Champion : à déterminer",
    window.location.href
  ].join("\n");

  const copy = navigator.clipboard?.writeText?.(text);
  if (!copy) {
    showToast("info", "Bracket", text, 7000);
    return;
  }

  copy
    .then(() => showToast("success", "Bracket copié", "Tu peux le coller à tes potes."))
    .catch(() => showToast("info", "Bracket", text, 7000));
}

function canEditStandings() {
  // Toujours nécessiter d'être admin, même en mode local
  return isAdminUser();
}

function clearContainer(id) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = "";
}

function render() {
  const q = document.getElementById("search")?.value?.trim().toLowerCase() || "";

  ["j1", "j2", "j3", "fr", "ma", "pt", "searchResults", "favMatches"].forEach(clearContainer);

  const byDay = { 1: [], 2: [], 3: [] };
  matches.forEach((m) => byDay[m.d].push(m));

  [1, 2, 3].forEach((day) => {
    const container = document.getElementById("j" + day);
    if (!container) return;
    const title = document.createElement("p");
    title.className = "section-hint";
    title.textContent =
      day === 1 ? "11 – 18 juin 2026" : day === 2 ? "18 – 24 juin 2026" : "24 – 28 juin 2026";
    container.appendChild(title);
    sortMatches(byDay[day]).forEach((m) => container.appendChild(createCard(m)));
  });

  const teamPages = { fr: "fr", ma: "ma", pt: "pt" };
  matches.forEach((m) => {
    const card = createCard(m);
    Object.entries(teamPages).forEach(([tag, id]) => {
      if (m.tag === tag) document.getElementById(id)?.appendChild(card.cloneNode(true));
    });
    if (q && filterMatch(m, q)) {
      document.getElementById("searchResults")?.appendChild(card.cloneNode(true));
    }
  });

  if (q) {
    const allTeams = new Set();
    Object.values(GROUPS).forEach((teams) => teams.forEach((t) => allTeams.add(t)));
    const matchingTeams = [...allTeams]
      .filter((t) => t.toLowerCase().includes(q))
      .sort((a, b) => a.localeCompare(b, "fr"));
    const resultsEl = document.getElementById("searchResults");
    if (resultsEl && matchingTeams.length) {
      const header = document.createElement("p");
      header.className = "section-hint";
      header.textContent = `Équipe${matchingTeams.length > 1 ? "s" : ""} trouvée${matchingTeams.length > 1 ? "s" : ""}`;
      resultsEl.prepend(header);
      const list = document.createElement("div");
      list.className = "team-results";
      matchingTeams.forEach((team) => {
        const hasRoster = hasSquad(team);
        const card = document.createElement("button");
        card.type = "button";
        card.className = "team-result-card";
        card.dataset.teamRoster = team;
        card.innerHTML = `
          <span class="team-result-name">${teamLabel(team)}</span>
          <span class="team-result-cta">${hasRoster ? "Voir l'effectif →" : "Détails →"}</span>
        `;
        list.appendChild(card);
      });
      header.after(list);
    }
  }

  renderHome();
  renderToday();
  renderFavorites();
  renderKnockout();
}

function renderHome() {
  renderLiveBanner();
  renderCountdown();
  renderHomeStats();
  renderBracketTease();
  renderTodayHome();
  renderLastResultsHome();
  renderQuickNav();
}

function renderLiveBanner() {
  const el = document.getElementById("liveBanner");
  if (!el) return;
  const live = matches.filter((m) => getMatchStatus(m).key === "live");
  if (!live.length) {
    el.classList.add("hidden");
    el.innerHTML = "";
    return;
  }
  el.classList.remove("hidden");
  el.innerHTML = live
    .map((m) => {
      const s = getScore(m);
      const score = s ? `<span class="live-score">${s.h} – ${s.a}</span>` : `<span class="live-score muted">– vs –</span>`;
      const elapsed = Math.max(0, Math.floor((Date.now() - getDateObj(m).getTime()) / 60000));
      const minute = elapsed > 0 ? `${Math.min(elapsed, 120)}'` : "Coup d'envoi";
      return `
        <button type="button" class="live-card" data-match-jump="${m.id}">
          <span class="live-dot"></span>
          <span class="live-status">EN DIRECT · ${minute}</span>
          <span class="live-teams">${teamLabel(m.h)} ${score} ${teamLabel(m.a)}</span>
        </button>
      `;
    })
    .join("");
  el.querySelectorAll("[data-match-jump]").forEach((btn) => {
    btn.addEventListener("click", () => show(1));
  });
}

function renderBracketTease() {
  const el = document.getElementById("bracketTease");
  if (!el) return;
  const started = groupsComplete() || bracket.picks.final[0] || bracket.picks.r32.some(Boolean);
  if (started) {
    el.classList.add("hidden");
    el.innerHTML = "";
    return;
  }
  el.classList.remove("hidden");
  el.innerHTML = `
    <div class="bracket-tease-inner">
      <span class="bracket-tease-icon">🏆</span>
      <div>
        <strong>Fais ton bracket de prédictions</strong>
        <span>Classe les 12 poules, choisis les meilleurs 3es, puis prédit le champion !</span>
      </div>
      <button type="button" class="admin-btn" data-page="10">C'est parti →</button>
    </div>
  `;
  el.querySelector("[data-page]")?.addEventListener("click", () => show(10));
}

function renderTodayHome() {
  const el = document.getElementById("todayHome");
  if (!el) return;
  el.innerHTML = "";

  const todayMatches = sortMatches(matches.filter((m) => m.date === todayKey()));
  const liveOrUpcoming = todayMatches.filter((m) => getMatchStatus(m).key !== "done");

  if (liveOrUpcoming.length) {
    liveOrUpcoming.slice(0, 4).forEach((m) => el.appendChild(createCard(m)));
    return;
  }

  const next = sortMatches(matches.filter((m) => getMatchStatus(m).key === "upcoming"))[0];
  if (!next) {
    el.innerHTML = "<p class='empty-msg'>Phase de groupes terminée.</p>";
    return;
  }
  const hint = document.createElement("p");
  hint.className = "section-hint";
  hint.textContent = "Aucun match aujourd'hui — prochain au programme :";
  el.appendChild(hint);
  el.appendChild(createCard(next));
}

function renderLastResultsHome() {
  const el = document.getElementById("lastResultsHome");
  if (!el) return;
  el.innerHTML = "";

  const done = matches
    .filter((m) => getMatchStatus(m).key === "done" && hasScore(m))
    .sort((a, b) => getDateObj(b) - getDateObj(a))
    .slice(0, 3);

  if (!done.length) {
    el.innerHTML = "<p class='empty-msg'>Aucun match terminé pour le moment.</p>";
    return;
  }
  done.forEach((m) => el.appendChild(createCard(m)));
}

function renderHomeStats() {
  const el = document.getElementById("homeStats");
  if (!el) return;
  const now = new Date();
  const upcoming = matches.filter((m) => getMatchStatus(m).key === "upcoming").length;
  const live = matches.filter((m) => getMatchStatus(m).key === "live").length;
  const fav = getFavorites().length;
  el.innerHTML = `
    <div class="stat"><span class="stat-n">${matches.length}</span><span class="stat-l">Matchs poules</span></div>
    <div class="stat"><span class="stat-n">${upcoming}</span><span class="stat-l">À venir</span></div>
    <div class="stat ${live ? "pulse" : ""}"><span class="stat-n">${live}</span><span class="stat-l">En cours</span></div>
    <div class="stat"><span class="stat-n">${fav}</span><span class="stat-l">Favoris</span></div>
  `;
}

function renderQuickNav() {
  const el = document.getElementById("quickNav");
  if (!el) return;
  const links = [
    { page: 1, label: "Aujourd'hui", icon: "📅" },
    { page: 5, label: "Favoris", icon: "⭐" },
    { page: 9, label: "Poules", icon: "📊" },
    { page: 7, label: "Maroc", icon: "🇲🇦" },
    { page: 10, label: "Finale", icon: "🏆" }
  ];
  el.innerHTML = "";
  links.forEach((l) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "quick-tile";
    b.innerHTML = `<span class="qt-icon">${l.icon}</span><span>${l.label}</span>`;
    b.onclick = () => show(l.page);
    el.appendChild(b);
  });
}

function renderToday() {
  const label = document.getElementById("todayLabel");
  const statsEl = document.getElementById("todayStats");
  const bonusEl = document.getElementById("todayBonus");
  const betsBlock = document.getElementById("todayBetsBlock");
  const betsEl = document.getElementById("todayBets");
  const sectionsEl = document.getElementById("todayMatchSections");
  if (!label || !sectionsEl) return;

  const key = todayKey();
  const allToday = getTodayAllMatches();
  const live = allToday.filter((m) => getMatchStatus(m).key === "live");
  const upcoming = allToday.filter((m) => getMatchStatus(m).key === "upcoming");
  const awaitVal = allToday.filter((m) => getMatchStatus(m).key === "await");
  const done = allToday.filter((m) => getMatchStatus(m).key === "done");
  const todayBets = getTodayPendingBets();

  label.textContent = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  if (statsEl) {
    statsEl.innerHTML = `
      <div class="today-stat"><span class="today-stat-n">${allToday.length}</span><span class="today-stat-l">match${allToday.length !== 1 ? "s" : ""}</span></div>
      <div class="today-stat live"><span class="today-stat-n">${live.length}</span><span class="today-stat-l">en direct</span></div>
      <div class="today-stat"><span class="today-stat-n">${upcoming.length}</span><span class="today-stat-l">à venir</span></div>
      <div class="today-stat"><span class="today-stat-n">${todayBets.length}</span><span class="today-stat-l">pari${todayBets.length !== 1 ? "s" : ""}</span></div>
    `;
  }

  if (bonusEl && window.Betting) {
    if (window.Betting.canClaimDaily()) {
      bonusEl.innerHTML = `
        <div class="today-bonus-banner">
          <span>🎁 Bonus quotidien disponible — +20 💰</span>
          <button type="button" class="admin-btn" id="todayClaimBonus">Réclamer</button>
        </div>`;
      bonusEl.querySelector("#todayClaimBonus")?.addEventListener("click", () => {
        const r = window.Betting.claimDailyBonus();
        if (r.claimed) {
          showToast("success", "Bonus réclamé !", `+${r.amount} 💰 ajoutés à ton solde.`);
          window.Betting.renderWalletBalance();
          syncAfterBetChange();
          renderToday();
          renderBettingPage();
        }
      });
    } else {
      bonusEl.innerHTML = "";
    }
  }

  if (betsBlock && betsEl) {
    if (todayBets.length) {
      betsBlock.classList.remove("hidden");
      betsEl.innerHTML = todayBets.map(todayBetCardHtml).join("");
      betsBlock.querySelector(".today-goto-bets")?.addEventListener("click", () => show(12));
    } else {
      betsBlock.classList.add("hidden");
      betsEl.innerHTML = "";
    }
  }

  sectionsEl.innerHTML = "";

  const appendSection = (title, items, extraClass = "") => {
    if (!items.length) return;
    const sec = document.createElement("div");
    sec.className = `today-match-section ${extraClass}`.trim();
    sec.innerHTML = `<h4 class="today-section-title">${title}</h4>`;
    const list = document.createElement("div");
    list.className = "match-list";
    items.forEach((m) => list.appendChild(createCard(m, { knockout: !!m._knockout })));
    sec.appendChild(list);
    sectionsEl.appendChild(sec);
  };

  if (!allToday.length) {
    const next = sortMatches(matches.filter((m) => getMatchStatus(m).key === "upcoming"))[0];
    sectionsEl.innerHTML = `<p class="empty-msg">Aucun match prévu aujourd'hui.</p>`;
    if (next) {
      const hint = document.createElement("p");
      hint.className = "section-hint";
      hint.textContent = "Prochain match :";
      sectionsEl.appendChild(hint);
      sectionsEl.appendChild(createCard(next));
    }
    return;
  }

  appendSection("🔴 En direct", live, "section-live");
  appendSection("⏳ À venir", upcoming);
  if (awaitVal.length) appendSection("⚠️ À valider", awaitVal, "section-await");
  appendSection("✅ Terminés", done, "section-done");
}

function renderFavorites() {
  const teamsEl = document.getElementById("favTeams");
  const matchEl = document.getElementById("favMatches");
  if (!teamsEl || !matchEl) return;

  const fav = getFavorites();
  teamsEl.innerHTML = "";
  if (!fav.length) {
    teamsEl.innerHTML =
      "<p class='empty-msg'>Aucune équipe favorite. Va dans <strong>Poules</strong> et clique ★ à côté d'un pays.</p>";
    matchEl.innerHTML = "";
    return;
  }

  fav.forEach((team) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.textContent = teamLabel(team);
    chip.onclick = () => {
      const search = document.getElementById("search");
      if (search) search.value = team;
      show(11);
      render();
    };
    teamsEl.appendChild(chip);
  });

  const favMatches = sortMatches(matches.filter(matchInvolvesFav));
  favMatches.forEach((m) => matchEl.appendChild(createCard(m)));
}

function renderKnockout() {
  const filters = document.getElementById("knockoutFilters");
  const list = document.getElementById("knockoutList");
  if (!filters || !list) return;

  renderBracketGroups();
  renderBracketThirds();
  renderBracketBuilder();

  const phases = ["all", "16es", "8es", "qf", "df", "3e", "finale"];
  filters.innerHTML = "";
  phases.forEach((p) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip" + (knockoutFilter === p ? " active" : "");
    b.textContent = p === "all" ? "Tout" : PHASE_LABELS[p] || p;
    b.onclick = () => {
      knockoutFilter = p;
      renderKnockout();
    };
    filters.appendChild(b);
  });

  list.innerHTML = "";
  let items = sortMatches(KNOCKOUT.map((k) => ({ ...k })));
  if (knockoutFilter !== "all") items = items.filter((k) => k.phase === knockoutFilter);

  let lastPhase = "";
  items.forEach((k) => {
    if (k.phase !== lastPhase && knockoutFilter === "all") {
      const h = document.createElement("h3");
      h.className = "phase-title";
      h.textContent = PHASE_LABELS[k.phase];
      list.appendChild(h);
      lastPhase = k.phase;
    }
    list.appendChild(createKnockoutCard(k));
  });
}

let bettingFilter = "all";
let lastBettingSignature = "";

function bettingSignature() {
  const test = window.Players && window.Players.isTestMode() ? "T:" : "";
  const ids = matches.filter((m) => getMatchStatus(m).key === "upcoming").map((m) => m.id);
  return test + ids.join(",");
}

// Rafraîchit la page Paris uniquement si elle est ouverte ET que la liste des
// matchs pariables a changé (ex : un match vient de débuter → il disparaît).
function maybeRefreshBetting() {
  const page = document.getElementById("bettingMatches")?.closest(".page");
  if (!page || !page.classList.contains("active")) return;
  if (bettingSignature() !== lastBettingSignature) renderBettingPage();
}

// Contexte résolvable : score + match validé (Fin du match) ou mode test.
function resolvableCtx(matchId) {
  const m = getAnyMatch(matchId);
  if (!m) return null;
  const ctx = betContext(m);
  if (!ctx.score) return null;
  if (!canSettleMatchBets(m)) return null;
  return ctx;
}

// Bonus de connexion quotidien.
function renderDailyBonus() {
  const el = document.getElementById("dailyBonus");
  if (!el || !window.Betting) return;
  if (!window.Betting.canClaimDaily()) {
    el.innerHTML = "";
    el.classList.add("hidden");
    return;
  }
  el.classList.remove("hidden");
  el.innerHTML = `
    <button type="button" class="daily-bonus-btn" id="dailyBonusBtn">
      🎁 <span>Récupère ton bonus du jour</span> <strong>+20 💰</strong>
    </button>`;
  el.querySelector("#dailyBonusBtn")?.addEventListener("click", () => {
    const r = window.Betting.claimDailyBonus();
    if (r.claimed) {
      showToast("success", "Bonus du jour 🎁", `+${r.amount} 💰 ajoutés à ton solde. Reviens demain !`);
      window.Betting.renderWalletBalance();
      syncAfterBetChange();
      renderBettingPage();
    }
  });
}

// Panier de paris combinés.
function renderComboSlip() {
  const el = document.getElementById("comboSlip");
  if (!el || !window.Betting) return;
  if (!comboSlip.length) {
    el.innerHTML = "";
    el.classList.add("hidden");
    return;
  }
  el.classList.remove("hidden");
  const odds = comboOdds();
  const enough = comboSlip.length >= 2;
  el.innerHTML = `
    <div class="combo-head">🎰 Mon combiné <span class="combo-count">${comboSlip.length} sélection${comboSlip.length > 1 ? "s" : ""}</span></div>
    <div class="combo-legs">
      ${comboSlip
        .map(
          (l, i) => `
        <div class="combo-leg">
          <div class="combo-leg-info">
            <span class="combo-leg-match">${escapeHtml(l.matchLabel)}</span>
            <span class="combo-leg-pick">${escapeHtml(l.label)} · ${l.odds.toFixed(2)}</span>
          </div>
          <button type="button" class="combo-leg-del" data-i="${i}" aria-label="Retirer">✕</button>
        </div>`
        )
        .join("")}
    </div>
    <div class="combo-total">Cote totale : <strong>${odds.toFixed(2)}</strong></div>
    ${
      enough
        ? `<div class="combo-stake-row">
            <input type="number" class="betting-input combo-stake" placeholder="Mise (💰)" min="1" max="${window.Betting.getBalance()}">
            <button type="button" class="betting-btn combo-validate" disabled>Valider</button>
          </div>`
        : `<p class="combo-hint">Ajoute au moins 2 sélections pour valider (tu peux en cumuler plusieurs sur le même match).</p>`
    }
    <button type="button" class="link-btn combo-clear">Vider le combiné</button>
  `;

  el.querySelectorAll(".combo-leg-del").forEach((b) =>
    b.addEventListener("click", () => {
      comboSlip.splice(parseInt(b.dataset.i, 10), 1);
      saveComboSlip();
      renderComboSlip();
    })
  );
  el.querySelector(".combo-clear")?.addEventListener("click", () => {
    comboSlip = [];
    saveComboSlip();
    renderComboSlip();
  });

  const stake = el.querySelector(".combo-stake");
  const validate = el.querySelector(".combo-validate");
  const upd = () => {
    if (!validate) return;
    const a = parseInt(stake.value, 10);
    const ok = a > 0 && a <= window.Betting.getBalance();
    validate.disabled = !ok;
    validate.textContent = ok ? `Valider ${a} 💰 · gain ${Math.floor(a * odds)} 💰` : "Valider";
  };
  stake?.addEventListener("input", upd);
  upd();

  validate?.addEventListener("click", () => {
    const bad = comboSlip.find((l) => {
      const mm = getAnyMatch(l.matchId);
      return !mm || (!isTestFlagged(mm) && getMatchStatus(mm).key !== "upcoming");
    });
    if (bad) {
      showToast("error", "Combiné impossible", "Un des matchs a commencé. Retire-le du combiné.");
      return;
    }
    const a = parseInt(stake.value, 10);
    const r = window.Betting.createCombo(comboSlip, a);
    if (r.success) {
      showToast("success", "Combiné placé ! 🎰", `Cote ${r.bet.odds.toFixed(2)} · gain potentiel ${r.bet.potentialWin} 💰`);
      comboSlip = [];
      saveComboSlip();
      window.Betting.renderWalletBalance();
      syncAfterBetChange();
      renderBettingPage();
    } else {
      showToast("error", "Erreur", r.error);
    }
  });
}

const BADGES = [
  { id: "first_bet", emoji: "🎲", title: "Premier pari", desc: "Placer ton 1er pari", test: (s) => s.placed >= 1 },
  { id: "first_win", emoji: "✅", title: "Premier gain", desc: "Gagner un pari", test: (s) => s.won >= 1 },
  { id: "streak3", emoji: "🔥", title: "Triplé gagnant", desc: "3 paris gagnés d'affilée", test: (s) => s.maxStreak >= 3 },
  { id: "bigodds", emoji: "💎", title: "Gros coup", desc: "Gagner une cote ≥ 5", test: (s) => s.wonBigOdds },
  { id: "combo", emoji: "🎰", title: "Combinard", desc: "Gagner un combiné", test: (s) => s.wonCombo },
  { id: "sniper", emoji: "🎯", title: "Sniper", desc: "Gagner un score exact", test: (s) => s.wonExact },
  { id: "highroller", emoji: "🏦", title: "Gros parieur", desc: "Placer 10 paris", test: (s) => s.placed >= 10 },
  { id: "rich", emoji: "🤑", title: "Fortuné", desc: "Atteindre 300 💰", test: (s) => s.balance >= 300 }
];

function computeBetStats() {
  const all = window.Betting.getAllBets();
  const balance = window.Betting.getBalance();
  const won = all.filter((b) => b.status === "won");
  const lost = all.filter((b) => b.status === "lost");
  const settled = all
    .filter((b) => b.status === "won" || b.status === "lost")
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  let streak = 0;
  let maxStreak = 0;
  settled.forEach((b) => {
    if (b.status === "won") {
      streak += 1;
      maxStreak = Math.max(maxStreak, streak);
    } else {
      streak = 0;
    }
  });

  // Équipe fétiche : équipe la plus présente dans les matchs pariés.
  const tally = {};
  const bump = (t) => {
    if (t) tally[t] = (tally[t] || 0) + 1;
  };
  all.forEach((b) => {
    if (b.type === "combo") {
      (b.legs || []).forEach((l) => {
        const mm = getAnyMatch(l.matchId);
        if (mm) {
          bump(mm.h);
          bump(mm.a);
        }
      });
    } else {
      const mm = getAnyMatch(b.matchId);
      if (mm) {
        bump(mm.h);
        bump(mm.a);
      }
    }
  });
  let favTeam = null;
  let favCount = 0;
  Object.entries(tally).forEach(([t, c]) => {
    if (c > favCount) {
      favCount = c;
      favTeam = t;
    }
  });

  return {
    balance,
    placed: all.length,
    won: won.length,
    lost: lost.length,
    pending: all.filter((b) => b.status === "pending").length,
    winRate: won.length + lost.length ? Math.round((won.length / (won.length + lost.length)) * 100) : null,
    biggestWin: won.reduce((max, b) => Math.max(max, b.potentialWin), 0),
    maxStreak,
    wonBigOdds: won.some((b) => b.odds >= 5),
    wonCombo: won.some((b) => b.type === "combo"),
    wonExact: won.some((b) => b.market === "exact"),
    favTeam
  };
}

// Stats perso + badges.
function renderBettingStats() {
  const el = document.getElementById("bettingStats");
  if (!el || !window.Betting) return;
  const s = computeBetStats();

  const unlocked = BADGES.filter((b) => b.test(s));
  const unlockedIds = unlocked.map((b) => b.id);

  // Toast pour les nouveaux badges débloqués — seulement si la page Paris est ouverte.
  const pageActive = document.getElementById("bettingMatches")?.closest(".page")?.classList.contains("active");
  const seen = window.Betting.getSeenBadges();
  const fresh = unlocked.filter((b) => !seen.includes(b.id));
  if (fresh.length && pageActive) {
    window.Betting.addSeenBadges(unlockedIds);
    fresh.forEach((b) => showToast("success", `Badge débloqué ${b.emoji}`, b.title));
  }

  const stat = (label, value) => `<div class="bstat"><span class="bstat-v">${value}</span><span class="bstat-l">${label}</span></div>`;

  el.innerHTML = `
    <h3 class="block-title">Mes stats</h3>
    <div class="bstats-row">
      ${stat("Paris placés", s.placed)}
      ${stat("Gagnés", s.won)}
      ${stat("Réussite", s.winRate == null ? "—" : s.winRate + "%")}
      ${stat("Plus gros gain", s.biggestWin + " 💰")}
      ${stat("Série max", s.maxStreak)}
      ${stat("Équipe fétiche", s.favTeam ? teamLabel(s.favTeam) : "—")}
    </div>
    <div class="badges-grid">
      ${BADGES.map(
        (b) => `
        <div class="badge ${unlockedIds.includes(b.id) ? "unlocked" : "locked"}" title="${escapeHtml(b.desc)}">
          <span class="badge-emoji">${b.emoji}</span>
          <span class="badge-title">${b.title}</span>
        </div>`
      ).join("")}
    </div>
  `;
}

function renderBettingPage() {
  if (!window.Betting) return;

  const balanceEl = document.getElementById("walletBalancePage");
  const winningsEl = document.getElementById("totalWinnings");
  const pendingCountEl = document.getElementById("pendingBetsCount");
  const bettingFiltersEl = document.getElementById("bettingFilters");
  const bettingMatchesEl = document.getElementById("bettingMatches");
  const pendingBetsEl = document.getElementById("pendingBets");
  const completedBetsEl = document.getElementById("completedBets");

  renderDailyBonus();
  renderBettingStats();
  renderComboSlip();

  if (balanceEl) balanceEl.textContent = `${window.Betting.getBalance()} 💰`;
  if (winningsEl) winningsEl.textContent = `${window.Betting.getAllBets().reduce((sum, b) => b.status === 'won' ? sum + b.potentialWin : sum, 0)} 💰`;
  if (pendingCountEl) {
    const pendingCount = window.Betting.getPendingBets().length;
    pendingCountEl.textContent = pendingCount;
    const cardEl = pendingCountEl.closest(".wallet-card");
    if (cardEl) {
      cardEl.classList.toggle("clickable", pendingCount > 0);
      cardEl.title = pendingCount > 0 ? "Voir mes paris en cours" : "";
      let cta = cardEl.querySelector(".wallet-card-cta");
      if (pendingCount > 0) {
        if (!cta) {
          cta = document.createElement("span");
          cta.className = "wallet-card-cta";
          cardEl.appendChild(cta);
        }
        cta.textContent = "Cliquer pour voir ↓";
      } else if (cta) {
        cta.remove();
      }
      cardEl.onclick = pendingCount > 0
        ? () => document.getElementById("pendingBets")?.scrollIntoView({ behavior: "smooth", block: "start" })
        : null;
    }
  }

  // Afficher les filtres (filtres par journée cachés si paris en maintenance
  // pour un visiteur, mais on garde le raccourci vers l'historique).
  if (bettingFiltersEl) {
    bettingFiltersEl.innerHTML = "";
    const showDayFilters = !(bettingMaintenance && !canEditStandings());
    if (showDayFilters) {
      const filters = ["all", "J1", "J2", "J3"];
      filters.forEach(f => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "chip" + (bettingFilter === f ? " active" : "");
        b.textContent = f === "all" ? "Tous" : f;
        b.onclick = () => {
          bettingFilter = f;
          renderBettingPage();
        };
        bettingFiltersEl.appendChild(b);
      });
    }
    if (window.Betting.getCompletedBets().length) {
      const hist = document.createElement("button");
      hist.type = "button";
      hist.className = "chip chip-jump";
      hist.innerHTML = "📜 Mon historique ↓";
      hist.title = "Aller à l'historique de mes paris";
      hist.onclick = () =>
        document.getElementById("completedBets")?.scrollIntoView({ behavior: "smooth", block: "start" });
      bettingFiltersEl.appendChild(hist);
    }
  }

  // Afficher les matchs disponibles pour les paris
  if (bettingMatchesEl) {
    bettingMatchesEl.innerHTML = "";

    // Toggle maintenance (admin uniquement) : cache les paris aux autres joueurs.
    if (canEditStandings()) {
      const mc = document.createElement("div");
      mc.className = "maintenance-admin";
      mc.innerHTML = `
        <label class="maintenance-toggle">
          <input type="checkbox" id="maintenanceToggle" ${bettingMaintenance ? "checked" : ""}>
          <span>🔧 Mettre les paris en maintenance</span>
        </label>
        <p class="maintenance-hint">${bettingMaintenance
          ? "🔒 Cachés pour tout le monde sauf toi (admin)."
          : "👀 Visibles par tous les joueurs."}</p>
      `;
      bettingMatchesEl.appendChild(mc);
      mc.querySelector("#maintenanceToggle")?.addEventListener("change", (e) => {
        setBettingMaintenance(e.target.checked);
      });
    }

    // Maintenance active + visiteur non-admin : on masque les matchs (mais on
    // garde les paris en cours / historique affichés plus bas).
    const hideMarkets = bettingMaintenance && !canEditStandings();

    if (hideMarkets) {
      const msg = document.createElement("div");
      msg.className = "maintenance-banner";
      msg.innerHTML = `
        <div class="maintenance-emoji">🔧</div>
        <strong>Les paris sont en maintenance</strong>
        <span>Reviens un peu plus tard, ça arrive très vite !</span>
      `;
      bettingMatchesEl.appendChild(msg);
    } else {
      // Incitation à rejoindre le classement (visiteurs non inscrits)
      if (window.Players && window.Players.isLeaderboardConfigured() && !window.Players.hasJoined()) {
        const nudge = document.createElement("div");
        nudge.className = "join-nudge";
        nudge.innerHTML = `
          <span>🏆 Rejoins le classement pour comparer ton solde avec les autres.</span>
          <div class="join-card-actions">
            <button type="button" class="admin-btn" id="bettingJoinBtn">Choisir mon pays →</button>
            <button type="button" class="link-btn" id="bettingLoginBtn">Déjà un compte ? Se connecter</button>
          </div>
        `;
        nudge.querySelector("#bettingJoinBtn")?.addEventListener("click", openJoinModal);
        nudge.querySelector("#bettingLoginBtn")?.addEventListener("click", openLoginModal);
        bettingMatchesEl.appendChild(nudge);
      }

      // Bannière mode test : explique comment tester un vrai match.
      if (window.Players && window.Players.isTestMode()) {
        const flaggedCount = getTestMatchIds().size;
        const banner = document.createElement("div");
        banner.className = "test-panel";
        banner.innerHTML = `<div class="test-panel-head">🧪 Mode test actif — <span>choisis un match ci-dessous et clique « Tester ce match » pour saisir un score fictif et résoudre les paris instantanément (sans toucher aux vrais scores).${flaggedCount ? ` ${flaggedCount} match(s) en test.` : ""}</span></div>`;
        bettingMatchesEl.appendChild(banner);
      }

      let upcomingMatches = matches.filter(m => getMatchStatus(m).key === 'upcoming');

      // Appliquer le filtre
      if (bettingFilter !== "all") {
        const day = parseInt(bettingFilter.replace("J", ""), 10);
        upcomingMatches = upcomingMatches.filter(m => m.d === day);
      }

      if (upcomingMatches.length === 0) {
        const none = document.createElement("p");
        none.className = "empty-msg";
        none.textContent = "Aucun match à venir disponible pour les paris.";
        bettingMatchesEl.appendChild(none);
      } else {
        sortMatches(upcomingMatches).forEach(m => {
          bettingMatchesEl.appendChild(createBettingMatchCard(m));
        });
      }
    }
  }

  // Afficher les paris en attente
  if (pendingBetsEl) {
    pendingBetsEl.innerHTML = "";
    const pendingBets = window.Betting.getPendingBets();
    if (pendingBets.length === 0) {
      pendingBetsEl.innerHTML = "<p class='empty-msg'>Aucun pari en cours.</p>";
    } else {
      pendingBets.forEach(bet => {
        const isCombo = bet.type === "combo";
        const match = isCombo ? null : getAnyMatch(bet.matchId);
        if (!isCombo && !match) return;
        const card = document.createElement("div");
        card.className = "bet-card";
        const cancellable = isCombo
          ? bet.legs.every((l) => {
              const mm = getAnyMatch(l.matchId);
              return mm && (isTestFlagged(mm) || getMatchStatus(mm).key === "upcoming");
            })
          : isTestFlagged(match) || getMatchStatus(match).key === "upcoming";
        const cancelHtml = cancellable
          ? '<button type="button" class="bet-cancel">↩ Retirer ma mise</button>'
          : '<span class="bet-locked">🔒 Verrouillé</span>';

        if (isCombo) {
          card.classList.add("combo-bet");
          card.innerHTML = `
            <div class="bet-header">
              <span class="bet-status pending">En attente</span>
              ${cancelHtml}
            </div>
            <div class="bet-match">🎰 Combiné · ${bet.legs.length} sélections</div>
            <div class="combo-bet-legs">
              ${bet.legs.map(comboLegHtml).join("")}
            </div>
            <div class="bet-details">
              <span class="bet-amount">Mise : ${bet.amount} 💰</span>
              <span class="bet-odds">Cote : ${bet.odds.toFixed(2)}</span>
            </div>
            <div class="bet-details">
              <span class="bet-potential">Gain : ${bet.potentialWin} 💰</span>
            </div>
          `;
        } else {
          const pick = bet.label || (bet.betType === 'home' ? match.h : bet.betType === 'away' ? match.a : 'Nul');
          card.innerHTML = `
            <div class="bet-header">
              <span class="bet-status pending">En attente</span>
              ${cancelHtml}
            </div>
            <div class="bet-match">${teamLabel(match.h)} vs ${teamLabel(match.a)}</div>
            <div class="bet-details">
              <span>Pari : ${escapeHtml(pick)}</span>
              <span class="bet-odds">Cote : ${bet.odds.toFixed(2)}</span>
            </div>
            <div class="bet-details">
              <span class="bet-amount">Mise : ${bet.amount} 💰</span>
              <span class="bet-potential">Gain : ${bet.potentialWin} 💰</span>
            </div>
          `;
        }
        card.querySelector(".bet-cancel")?.addEventListener("click", () => {
          if (bet.type === "combo") {
            const stillOk = bet.legs.every((l) => {
              const mm = getAnyMatch(l.matchId);
              return mm && (isTestFlagged(mm) || getMatchStatus(mm).key === "upcoming");
            });
            if (!stillOk) {
              showToast("error", "Trop tard", "Un match du combiné a commencé.");
              renderBettingPage();
              return;
            }
            const r = window.Betting.cancelBet(bet.id);
            if (r.success) {
              showToast("info", "Combiné retiré", `${r.amount} 💰 récupérés.`);
              window.Betting.renderWalletBalance();
              syncAfterBetChange();
              renderBettingPage();
            }
            return;
          }
          const m = getAnyMatch(bet.matchId);
          // Re-vérifie au moment du clic : le match a pu démarrer entre-temps.
          if (!m || (!isTestFlagged(m) && getMatchStatus(m).key !== "upcoming")) {
            showToast("error", "Trop tard", "Le match a commencé, impossible de retirer ta mise.");
            renderBettingPage();
            return;
          }
          const r = window.Betting.cancelBet(bet.id);
          if (r.success) {
            showToast("info", "Pari retiré", `${r.amount} 💰 récupérés.`);
            window.Betting.renderWalletBalance();
            syncAfterBetChange();
            renderBettingPage();
          } else {
            showToast("error", "Erreur", r.error || "Retrait impossible.");
          }
        });
        pendingBetsEl.appendChild(card);
      });
    }
  }

  // Afficher l'historique des paris
  if (completedBetsEl) {
    completedBetsEl.innerHTML = "";
    const completedBets = window.Betting.getCompletedBets();
    if (completedBets.length === 0) {
      completedBetsEl.innerHTML = "<p class='empty-msg'>Aucun pari terminé.</p>";
    } else {
      completedBets.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).forEach(bet => {
        const isCombo = bet.type === "combo";
        const match = isCombo ? null : getAnyMatch(bet.matchId);
        if (!isCombo && !match) return;
        const card = document.createElement("div");
        card.className = `bet-card ${bet.status}`;
        const statusLabel = bet.status === 'won' ? 'Gagné' : 'Perdu';
        const gainCell = `<span class="${bet.status === 'won' ? 'bet-potential' : ''}">${bet.status === 'won' ? 'Gain : ' + bet.potentialWin + ' 💰' : 'Perdu'}</span>`;
        const legForce = !!bet.adminOverride;

        if (isCombo) {
          card.classList.add("combo-bet");
          card.innerHTML = `
            <div class="bet-header"><span class="bet-status ${bet.status}">${statusLabel}</span></div>
            <div class="bet-match">🎰 Combiné · ${bet.legs.length} sélections</div>
            <div class="combo-bet-legs">
              ${bet.legs.map((l) => comboLegHtml(l, legForce)).join("")}
            </div>
            <div class="bet-details">
              <span class="bet-amount">Mise : ${bet.amount} 💰</span>
              <span class="bet-odds">Cote : ${bet.odds.toFixed(2)}</span>
            </div>
            <div class="bet-details">${gainCell}</div>
          `;
        } else {
          const pick = bet.label || (bet.betType === 'home' ? match.h : bet.betType === 'away' ? match.a : 'Nul');
          card.innerHTML = `
            <div class="bet-header">
              <span class="bet-status ${bet.status}">${statusLabel}</span>
            </div>
            <div class="bet-match">${teamLabel(match.h)} vs ${teamLabel(match.a)}</div>
            <div class="bet-details">
              <span>Pari : ${escapeHtml(pick)}</span>
              <span class="bet-odds">Cote : ${bet.odds.toFixed(2)}</span>
            </div>
            <div class="bet-details">
              <span class="bet-amount">Mise : ${bet.amount} 💰</span>
              ${gainCell}
            </div>
          `;
        }
        completedBetsEl.appendChild(card);
      });
    }
  }
  lastBettingSignature = bettingSignature();
}

async function renderLeaderboard() {
  const badge = document.getElementById("lbTestBadge");
  const joinCard = document.getElementById("lbJoinCard");
  const mine = document.getElementById("lbMine");
  const list = document.getElementById("leaderboard");
  if (!list) return;

  const P = window.Players;
  if (!P) return;

  const test = P.isTestMode();
  badge?.classList.toggle("hidden", !test);
  document.body.classList.toggle("test-mode", test);

  if (!P.isLeaderboardConfigured()) {
    if (joinCard) {
      joinCard.classList.remove("hidden");
      joinCard.innerHTML = `
        <div class="join-card-inner">
          <span class="bracket-tease-icon">🏆</span>
          <div>
            <strong>Classement en ligne bientôt</strong>
            <span>Il sera activé une fois Supabase configuré. Tes paris locaux fonctionnent déjà.</span>
          </div>
        </div>`;
    }
    mine?.classList.add("hidden");
    document.getElementById("lbAdmin")?.classList.add("hidden");
    list.innerHTML = "<p class='empty-msg'>Classement partagé indisponible pour le moment.</p>";
    return;
  }

  if (P.hasJoined()) {
    joinCard?.classList.add("hidden");
    if (joinCard) joinCard.innerHTML = "";
  } else {
    joinCard?.classList.remove("hidden");
    if (joinCard) {
      joinCard.innerHTML = `
        <div class="join-card-inner">
          <span class="bracket-tease-icon">🏆</span>
          <div>
            <strong>Rejoins le classement</strong>
            <span>Choisis un pays (pseudo public) + ton prénom (privé) pour apparaître.</span>
          </div>
          <div class="join-card-actions">
            <button type="button" class="admin-btn" id="lbJoinBtn">Rejoindre →</button>
            <button type="button" class="link-btn" id="lbLoginBtn">Déjà un compte ? Se connecter</button>
          </div>
        </div>`;
      joinCard.querySelector("#lbJoinBtn")?.addEventListener("click", openJoinModal);
      joinCard.querySelector("#lbLoginBtn")?.addEventListener("click", openLoginModal);
    }
  }

  list.innerHTML = "<p class='empty-msg'>Chargement du classement…</p>";
  await P.refreshLeaderboard();
  renderLeaderboardTable();
  renderAdminPlayersPanel();
}

function renderAdminPlayersPanel() {
  const box = document.getElementById("lbAdmin");
  if (!box) return;
  const P = window.Players;

  if (!P || !P.isLeaderboardConfigured() || !canEditStandings() || !P.isTestMode()) {
    box.classList.add("hidden");
    box.innerHTML = "";
    return;
  }

  box.classList.remove("hidden");
  const rows = P.getLeaderboardCache();
  const taken = new Set(rows.map((r) => r.country));
  const available = P.allWorldCupTeams().filter((c) => !taken.has(c));

  box.innerHTML = `
    <div class="lb-admin-head">🛠️ Admin (test) — ajoute et gère des joueurs fictifs</div>
    <div class="lb-admin-add">
      <select id="lbAddCountry" class="join-input">
        ${available.map((c) => `<option value="${c}">${flag(c)} ${c}</option>`).join("") || "<option value=''>Tous les pays sont pris</option>"}
      </select>
      <input id="lbAddName" class="join-input" type="text" placeholder="Prénom (privé)" maxlength="30">
      <input id="lbAddBalance" class="join-input lb-add-bal" type="number" min="0" value="100" title="Solde de départ">
      <button type="button" class="admin-btn" id="lbAddBtn">Ajouter</button>
    </div>
    <div class="lb-admin-list"></div>
  `;

  const list = box.querySelector(".lb-admin-list");
  rows.forEach((r) => {
    const row = document.createElement("div");
    row.className = "lb-admin-row";
    row.innerHTML = `
      <span class="lb-admin-team">${teamLabel(r.country)}</span>
      <span class="lb-admin-pname">${r.name ? escapeHtml(r.name) : "—"}</span>
      <span class="lb-admin-bal">${r.balance} 💰</span>
      <span class="lb-admin-actions">
        <button type="button" class="pts-btn" data-adj="-50">−50</button>
        <button type="button" class="pts-btn" data-adj="50">+50</button>
        <button type="button" class="score-clear" data-del title="Supprimer">✕</button>
      </span>
    `;
    row.querySelector('[data-adj="-50"]').addEventListener("click", async () => {
      await P.adminSetBalance(r.id, Math.max(0, r.balance - 50));
      renderLeaderboard();
    });
    row.querySelector('[data-adj="50"]').addEventListener("click", async () => {
      await P.adminSetBalance(r.id, r.balance + 50);
      renderLeaderboard();
    });
    row.querySelector("[data-del]").addEventListener("click", async () => {
      if (!window.confirm(`Supprimer ${r.country} du classement test ?`)) return;
      await P.adminDeletePlayer(r.id);
      renderLeaderboard();
    });
    list.appendChild(row);
  });

  box.querySelector("#lbAddBtn")?.addEventListener("click", async () => {
    const country = box.querySelector("#lbAddCountry")?.value;
    const name = box.querySelector("#lbAddName")?.value;
    const balance = box.querySelector("#lbAddBalance")?.value;
    const res = await P.adminAddPlayer(country, name, balance);
    if (res.success) {
      showToast("success", "Joueur ajouté", `${country} ajouté au classement test.`);
      renderLeaderboard();
    } else {
      showToast("error", "Erreur", res.error || "Ajout impossible.");
    }
  });
}

function renderLeaderboardTable() {
  const list = document.getElementById("leaderboard");
  const mine = document.getElementById("lbMine");
  const P = window.Players;
  if (!list || !P) return;

  const rows = P.getLeaderboardCache();
  const profile = P.getProfile();
  const admin = canEditStandings();

  if (mine) {
    if (profile && P.hasJoined()) {
      const rank = P.getMyRank();
      const me = rows.find((r) => r.id === profile.id);
      const bal = me ? me.balance : P.currentStats().balance;
      mine.classList.remove("hidden");
      mine.innerHTML = `
        <span class="lb-mine-rank">${rank ? "#" + rank : "—"}</span>
        <span class="lb-mine-team">${teamLabel(profile.country)}</span>
        <span class="lb-mine-balance">${bal} 💰</span>
        <button type="button" class="link-btn" id="lbChange">Changer de pays</button>
      `;
      mine.querySelector("#lbChange")?.addEventListener("click", openJoinModal);
    } else {
      mine.classList.add("hidden");
    }
  }

  if (!rows.length) {
    list.innerHTML = "<p class='empty-msg'>Personne dans le classement pour l'instant. Sois le premier !</p>";
    return;
  }

  const table = document.createElement("table");
  table.className = "standings-table leaderboard-table";
  table.innerHTML = `<thead><tr><th>#</th><th>Pays</th><th>Solde</th><th>V/P</th>${admin ? "<th>Prénom 🔒</th>" : ""}</tr></thead><tbody></tbody>`;
  const tbody = table.querySelector("tbody");

  rows.forEach((r, i) => {
    const tr = document.createElement("tr");
    if (profile && r.id === profile.id) tr.classList.add("lb-self");
    const medal = i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : i + 1;
    tr.innerHTML = `
      <td class="lb-rank">${medal}</td>
      <td class="team-cell">${teamLabel(r.country)}</td>
      <td class="lb-balance"><strong>${r.balance} 💰</strong></td>
      <td class="lb-record">${r.won}/${r.placed}</td>
      ${admin ? `<td class="lb-name">${r.name ? escapeHtml(r.name) : "—"}</td>` : ""}
    `;
    tbody.appendChild(tr);
  });

  list.innerHTML = "";
  list.appendChild(table);
}

function openJoinModal() {
  const modal = document.getElementById("joinModal");
  if (!modal || !window.Players) return;
  if (!window.Players.isLeaderboardConfigured()) {
    showToast("info", "Bientôt", "Le classement en ligne sera activé après la configuration Supabase.");
    return;
  }

  const select = document.getElementById("joinCountry");
  const nameInput = document.getElementById("joinName");
  const pinInput = document.getElementById("joinPin");
  const err = document.getElementById("joinError");
  const submit = document.getElementById("joinSubmit");
  const profile = window.Players.getProfile();

  err?.classList.add("hidden");
  if (nameInput) nameInput.value = profile?.name || "";
  if (pinInput) {
    pinInput.value = "";
    pinInput.placeholder = profile ? "Laisse vide pour garder ton code" : "4 à 6 chiffres";
  }
  if (submit) submit.textContent = profile ? "Mettre à jour ⚽" : "Rejoindre ⚽";
  if (select) select.innerHTML = "<option value=''>Chargement…</option>";

  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");

  window.Players.getAvailableCountries().then((countries) => {
    if (!select) return;
    if (!countries.length) {
      select.innerHTML = "<option value=''>Tous les pays sont pris !</option>";
      return;
    }
    select.innerHTML = countries
      .map((c) => `<option value="${c}"${c === profile?.country ? " selected" : ""}>${flag(c)} ${c}</option>`)
      .join("");
  });
}

function closeJoinModal() {
  const modal = document.getElementById("joinModal");
  if (!modal) return;
  modal.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function initJoinModal() {
  const modal = document.getElementById("joinModal");
  if (!modal) return;

  modal.querySelectorAll("[data-join-dismiss]").forEach((b) => b.addEventListener("click", closeJoinModal));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeJoinModal();
  });

  document.getElementById("joinToLogin")?.addEventListener("click", () => {
    closeJoinModal();
    openLoginModal();
  });

  const submit = document.getElementById("joinSubmit");
  submit?.addEventListener("click", async () => {
    const country = document.getElementById("joinCountry")?.value;
    const name = document.getElementById("joinName")?.value;
    const pin = document.getElementById("joinPin")?.value;
    const err = document.getElementById("joinError");

    submit.disabled = true;
    const res = await window.Players.join(country, name, pin);
    submit.disabled = false;

    if (res.success) {
      closeJoinModal();
      showToast("success", "Bienvenue !", `Tu joues sous ${teamLabel(country)}.`);
      await window.Players.pushStats();
      renderLeaderboard();
      renderBettingPage();
    } else if (err) {
      err.textContent = res.error;
      err.classList.remove("hidden");
      if (res.taken) openJoinModal();
    }
  });
}

function openLoginModal() {
  const modal = document.getElementById("loginModal");
  if (!modal || !window.Players) return;
  if (!window.Players.isLeaderboardConfigured()) {
    showToast("info", "Bientôt", "Le classement en ligne sera activé après la configuration Supabase.");
    return;
  }

  const select = document.getElementById("loginCountry");
  const pinInput = document.getElementById("loginPin");
  const err = document.getElementById("loginError");

  err?.classList.add("hidden");
  if (pinInput) pinInput.value = "";
  if (select) select.innerHTML = "<option value=''>Chargement…</option>";

  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");

  window.Players.getTakenCountriesList().then((countries) => {
    if (!select) return;
    if (!countries.length) {
      select.innerHTML = "<option value=''>Aucun compte pour l'instant</option>";
      return;
    }
    select.innerHTML = countries
      .sort((a, b) => a.localeCompare(b, "fr"))
      .map((c) => `<option value="${c}">${flag(c)} ${c}</option>`)
      .join("");
  });
}

function closeLoginModal() {
  const modal = document.getElementById("loginModal");
  if (!modal) return;
  modal.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

// Fiche détaillée d'un match (stade, ville, heure locale, cotes…).
function matchModalHtml(m) {
  const status = getMatchStatus(m);
  const v = window.Venues ? window.Venues.venueFor(m) : null;
  const s = getScore(m);
  const dateLabel = getDateObj(m).toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  let oddsHtml = "";
  try {
    const board = window.Odds && window.Odds.getMarketBoard(m);
    const m1x2 = board && board.find((b) => b.key === "1x2");
    if (m1x2) {
      oddsHtml = `<div class="mm-odds">${m1x2.selections
        .map(
          (sel) =>
            `<div class="mm-odd"><span class="mm-odd-l">${escapeHtml(sel.short)}</span><span class="mm-odd-v">${sel.odds.toFixed(2)}</span></div>`
        )
        .join("")}</div>`;
    }
  } catch (_) {}

  const scoreLine = s
    ? `<div class="mm-score">${s.h} <span>–</span> ${s.a}</div>`
    : '<div class="mm-vs">vs</div>';

  return `
    <div class="mm-head">
      <span class="status status-${status.key} mm-status">${status.label}</span>
      <div class="mm-teams">
        <span class="mm-team">${teamLabel(m.h)}</span>
        ${scoreLine}
        <span class="mm-team">${teamLabel(m.a)}</span>
      </div>
    </div>
    <div class="mm-info">
      <div class="mm-row"><span class="mm-ic">📅</span><span>${dateLabel}</span></div>
      <div class="mm-row"><span class="mm-ic">🕒</span><span><strong>${m.t}</strong> heure de Paris${v ? ` · <strong>${v.local}</strong> sur place` : ""}</span></div>
      ${v ? `<div class="mm-row"><span class="mm-ic">🏟️</span><span>${escapeHtml(v.stadium)}</span></div>` : ""}
      ${v ? `<div class="mm-row"><span class="mm-ic">📍</span><span>${escapeHtml(v.city)}, ${v.flag} ${escapeHtml(v.country)}</span></div>` : ""}
      ${m.g ? `<div class="mm-row"><span class="mm-ic">🏆</span><span>Groupe ${m.g}${m.d ? ` · Journée ${m.d}` : ""}</span></div>` : ""}
    </div>
    ${oddsHtml ? `<div class="mm-section-title">Cotes — résultat du match</div>${oddsHtml}` : ""}
    ${status.key === "upcoming" ? '<button type="button" class="welcome-cta" id="mmBetBtn">💰 Parier sur ce match</button>' : ""}
  `;
}

function openMatchModal(m) {
  const modal = document.getElementById("matchModal");
  const body = document.getElementById("matchModalBody");
  if (!modal || !body || !m) return;
  body.innerHTML = matchModalHtml(m);
  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
  body.querySelector("#mmBetBtn")?.addEventListener("click", () => {
    closeMatchModal();
    show(12);
  });
}

function closeMatchModal() {
  const modal = document.getElementById("matchModal");
  if (!modal) return;
  modal.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function initMatchModal() {
  const modal = document.getElementById("matchModal");
  if (!modal) return;
  modal.querySelectorAll("[data-match-dismiss]").forEach((b) => b.addEventListener("click", closeMatchModal));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeMatchModal();
  });
}

function initLoginModal() {
  const modal = document.getElementById("loginModal");
  if (!modal) return;

  modal.querySelectorAll("[data-login-dismiss]").forEach((b) => b.addEventListener("click", closeLoginModal));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeLoginModal();
  });

  document.getElementById("loginToJoin")?.addEventListener("click", () => {
    closeLoginModal();
    openJoinModal();
  });

  const submit = document.getElementById("loginSubmit");
  submit?.addEventListener("click", async () => {
    const country = document.getElementById("loginCountry")?.value;
    const pin = document.getElementById("loginPin")?.value;
    const err = document.getElementById("loginError");

    submit.disabled = true;
    const res = await window.Players.loginWithPin(country, pin);
    submit.disabled = false;

    if (res.success) {
      if (res.data) applyProfileData(res.data);
      resolveDueBets();
      closeLoginModal();
      showToast("success", "Connecté !", `Te voilà de retour sous ${teamLabel(res.country)}.`);
      if (window.Betting) window.Betting.renderWalletBalance();
      render();
      renderGroups();
      renderLeaderboard();
      renderBettingPage();
      await window.Players.pushStats();
    } else if (err) {
      err.textContent = res.error;
      err.classList.remove("hidden");
    }
  });
}

function renderCountdown() {
  const el = document.getElementById("countdown");
  if (!el) return;
  const now = new Date();
  const diff = OPENING - now;
  if (diff <= 0 && now < FINAL) {
    el.innerHTML = "<span class='hero-live'>⚽ La Coupe du monde est en cours !</span>";
    return;
  }
  if (now >= FINAL) {
    el.textContent = "🏆 Tournoi terminé — à bientôt en 2030 !";
    return;
  }
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  el.innerHTML = `
    <span class="countdown-label">Coup d'envoi dans</span>
    <div class="countdown-grid">
      <div class="countdown-unit"><span class="countdown-n">${days}</span><span class="countdown-u">jours</span></div>
      <div class="countdown-unit"><span class="countdown-n">${hours}</span><span class="countdown-u">heures</span></div>
      <div class="countdown-unit"><span class="countdown-n">${mins}</span><span class="countdown-u">min</span></div>
    </div>
  `;
}

function renderAdminBar() {
  const bar = document.getElementById("adminBar");
  if (!bar) return;

  if (!isSyncEnabled()) {
    bar.innerHTML =
      '<p class="admin-msg local">Mode local — active la synchro JSONBin avant de partager le lien.</p>';
    return;
  }

  const editable = canEditStandings();
  if (editable) {
    const test = window.Players && window.Players.isTestMode();
    bar.innerHTML = `
      <p class="admin-msg ok">Mode admin — OK = score en direct · 🏁 Fin du match = valider et résoudre les paris (classement inclus).</p>
      <button type="button" class="admin-btn outline" id="btnRecalc">Recalculer les points</button>
      <button type="button" class="admin-btn outline" id="btnLock">Verrouiller</button>
      <button type="button" class="admin-btn outline" id="btnRefresh">Actualiser</button>
      <button type="button" class="admin-btn outline ${test ? "danger" : ""}" id="btnTestMode">Mode test : ${test ? "ON 🧪" : "OFF"}</button>
    `;
    document.getElementById("btnRecalc")?.addEventListener("click", () => {
      recalcStandingsFromScores();
      persistData();
      renderGroups();
    });
    document.getElementById("btnLock")?.addEventListener("click", () => {
      lockAdmin();
      renderGroups();
    });
    document.getElementById("btnRefresh")?.addEventListener("click", refreshStandingsFromCloud);
    document.getElementById("btnTestMode")?.addEventListener("click", () => {
      if (!window.Players) return;
      window.Players.setTestMode(!window.Players.isTestMode());
      window.location.reload();
    });
    return;
  }

  bar.innerHTML = `
    <p class="admin-msg readonly">Lecture seule</p>
    <button type="button" class="admin-btn" id="btnUnlock">Connexion admin</button>
    <button type="button" class="admin-btn outline" id="btnRefresh">Actualiser</button>
  `;
  document.getElementById("btnUnlock")?.addEventListener("click", async () => {
    const pw = prompt("Mot de passe admin :");
    if (!pw) return;
    try {
      await unlockAdmin(pw);
      renderGroups();
      showToast("success", "Connexion réussie", "Mode admin activé");
    } catch (e) {
      showToast("error", "Erreur", e.message || "Connexion refusée");
    }
  });
  document.getElementById("btnRefresh")?.addEventListener("click", refreshStandingsFromCloud);
}

function renderGroupsOverview() {
  const box = document.getElementById("groupsOverview");
  if (!box) return;
  box.innerHTML = "";
  Object.keys(GROUPS).forEach((g) => {
    const mini = document.createElement("div");
    mini.className = "mini-group";
    const sorted = rankedGroup(g);
    mini.innerHTML = `<div class="mini-title">Groupe ${g}</div><ol></ol>`;
    const ol = mini.querySelector("ol");
    sorted.forEach((team, i) => {
      const li = document.createElement("li");
      li.innerHTML = `<span>${i + 1}. ${teamFavButton(team)} <button type="button" class="team-link-btn inline" data-team-roster="${team}">${teamLabel(team)}</button></span><strong>${standings[g][team] ?? 0} pts</strong>`;
      bindFavStars(li);
      ol.appendChild(li);
    });
    mini.onclick = (e) => {
      if (e.target.closest("[data-team-roster]") || e.target.closest(".fav-star")) return;
      document.getElementById("groupTabs").dataset.active = g;
      box.classList.add("hidden");
      renderGroups();
    };
    box.appendChild(mini);
  });
}

function renderGroups() {
  const tabs = document.getElementById("groupTabs");
  const panel = document.getElementById("groupPanel");
  if (!tabs || !panel) return;

  renderAdminBar();
  renderGroupsOverview();

  const active = tabs.dataset.active || "A";
  const editable = canEditStandings();
  tabs.innerHTML = "";
  panel.innerHTML = "";

  Object.keys(GROUPS).forEach((g) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "group-tab" + (g === active ? " active" : "");
    btn.textContent = "Groupe " + g;
    btn.onclick = () => {
      tabs.dataset.active = g;
      renderGroups();
    };
    tabs.appendChild(btn);
  });

  const sorted = rankedGroup(active);

  const table = document.createElement("table");
  table.className = "standings-table" + (editable ? "" : " readonly");
  table.innerHTML = editable
    ? `<thead><tr><th>#</th><th>Équipe</th><th>Pts</th><th></th></tr></thead><tbody></tbody>`
    : `<thead><tr><th>#</th><th>Équipe</th><th>Pts</th></tr></thead><tbody></tbody>`;
  const tbody = table.querySelector("tbody");

  sorted.forEach((team, i) => {
    const pts = standings[active][team] ?? 0;
    const tr = document.createElement("tr");
    const teamCell = `<td class="team-cell">${teamFavButton(team)} <button type="button" class="team-link-btn" data-team-roster="${team}" title="Voir l'effectif">${teamLabel(team)}</button></td>`;
    if (editable) {
      tr.innerHTML = `
        <td>${i + 1}</td>
        ${teamCell}
        <td><input type="number" min="0" max="9" class="pts-input" value="${pts}"></td>
        <td class="pts-actions">
          <button type="button" class="pts-btn" data-delta="-1">−</button>
          <button type="button" class="pts-btn" data-delta="1">+</button>
        </td>
      `;
      bindFavStars(tr);
      const input = tr.querySelector(".pts-input");
      input.addEventListener("change", () => {
        standings[active][team] = Math.max(0, parseInt(input.value, 10) || 0);
        input.value = standings[active][team];
        persistStandings();
        renderGroups();
      });
      tr.querySelectorAll(".pts-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const d = parseInt(btn.dataset.delta, 10);
          standings[active][team] = Math.max(0, (standings[active][team] ?? 0) + d);
          persistStandings();
          renderGroups();
        });
      });
    } else {
      tr.innerHTML = `<td>${i + 1}</td>${teamCell}<td class="pts-readonly">${pts}</td>`;
      bindFavStars(tr);
    }
    tbody.appendChild(tr);
  });

  const hint = editable
    ? "★ = favoris · Saisis les scores sur les matchs (J.1–J.3) → les points se calculent tout seuls (3-1-0)."
    : syncMode === "offline"
      ? "Hors ligne — clique Actualiser."
      : "Classement partagé — lecture seule.";

  panel.innerHTML = `<h2>Groupe ${active}</h2><p class="section-hint">${hint}</p>`;
  panel.appendChild(table);

  const groupMatches = sortMatches(matches.filter((m) => m.g === active));
  if (groupMatches.length) {
    const h3 = document.createElement("h3");
    h3.textContent = "Matchs du groupe";
    panel.appendChild(h3);
    const list = document.createElement("div");
    list.className = "group-matches";
    groupMatches.forEach((m) => list.appendChild(createCard(m)));
    panel.appendChild(list);
  }
}

const ROSTER_PAGE_INDEX = 13;
let prevRosterPage = 0;

function show(i) {
  document.querySelectorAll(".page").forEach((p, idx) => {
    p.classList.toggle("active", idx === i);
  });
  document.querySelectorAll(".top-nav button").forEach((b) => {
    b.classList.toggle("active", parseInt(b.dataset.page, 10) === i);
  });
  // Le bouton « Plus ▾ » reste surligné quand un onglet secondaire est ouvert.
  document.getElementById("navMoreBtn")?.classList.toggle("active", [6, 7, 8, 10, 11].includes(i));
  document.querySelector(".logo-btn")?.classList.toggle("active", i === 0);
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (i === 1) renderToday();
  if (i === 9) renderGroups();
  if (i === 11) document.getElementById("search")?.focus();
  if (i === 12) {
    renderBettingPage();
    maybeShowBettingIntro();
  }
  if (i === 14) renderLeaderboard();
}

function openRoster(team) {
  if (!team) return;
  const currentActive = Array.from(document.querySelectorAll(".page")).findIndex((p) =>
    p.classList.contains("active")
  );
  if (currentActive !== ROSTER_PAGE_INDEX) prevRosterPage = currentActive >= 0 ? currentActive : 0;

  const title = document.getElementById("rosterTitle");
  const meta = document.getElementById("rosterMeta");
  const content = document.getElementById("rosterContent");
  if (!title || !content) return;

  title.innerHTML = `${flag(team)} ${team}`;

  const squad = SQUADS[team];
  if (!squad) {
    if (meta) meta.textContent = "Effectif non encore disponible pour cette équipe.";
    content.innerHTML = `
      <div class="empty-msg">
        L'effectif officiel de <strong>${team}</strong> n'a pas encore été ajouté.<br>
        Tu peux quand même rechercher des joueurs sur
        <a href="https://www.transfermarkt.fr/schnellsuche/ergebnis/schnellsuche?query=${encodeURIComponent(team)}" target="_blank" rel="noopener">Transfermarkt</a>
        ou
        <a href="https://www.footmercato.net/recherche/?q=${encodeURIComponent(team)}" target="_blank" rel="noopener">Footmercato</a>.
      </div>
    `;
  } else {
    if (meta) {
      const dateStr = squad.announceDate
        ? new Date(squad.announceDate).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })
        : "";
      meta.innerHTML = `Sélectionneur : <strong>${squad.coach}</strong>${dateStr ? ` · Liste annoncée le ${dateStr}` : ""}${squad.note ? ` · <em>${squad.note}</em>` : ""}`;
    }

    const html = Object.entries(squad.groups)
      .map(([poste, players]) => {
        const rows = players
          .map((p) => {
            const links = playerLinks(p.name);
            return `
              <li class="player-row">
                <div class="player-info">
                  <span class="player-name">${p.name}</span>
                  <span class="player-club">${p.club}</span>
                </div>
                <div class="player-links">
                  <a class="player-link tm" href="${links.tm}" target="_blank" rel="noopener" title="Fiche Transfermarkt">TM</a>
                  <a class="player-link fm" href="${links.fm}" target="_blank" rel="noopener" title="Recherche Footmercato">FM</a>
                </div>
              </li>
            `;
          })
          .join("");
        return `
          <div class="roster-group">
            <h3 class="roster-poste">${poste} <span class="roster-count">(${players.length})</span></h3>
            <ul class="player-list">${rows}</ul>
          </div>
        `;
      })
      .join("");
    content.innerHTML = html;
  }

  show(ROSTER_PAGE_INDEX);
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  const btn = document.getElementById("themeToggle");
  if (btn) btn.textContent = saved === "dark" ? "🌙" : "☀️";
}

function openWelcome() {
  const modal = document.getElementById("welcomeModal");
  if (!modal) return;
  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeWelcome() {
  const modal = document.getElementById("welcomeModal");
  if (!modal) return;
  modal.classList.add("hidden");
  document.body.classList.remove("modal-open");
  localStorage.setItem(WELCOME_KEY, "1");
}

function initWelcome() {
  const modal = document.getElementById("welcomeModal");
  if (!modal) return;

  modal.querySelectorAll("[data-welcome-dismiss]").forEach((btn) => {
    btn.addEventListener("click", closeWelcome);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeWelcome();
  });

  document.getElementById("reopenWelcome")?.addEventListener("click", openWelcome);

  if (!localStorage.getItem(WELCOME_KEY)) {
    setTimeout(openWelcome, 350);
  }
}

function openBettingIntro() {
  const modal = document.getElementById("bettingIntroModal");
  if (!modal) return;
  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeBettingIntro() {
  const modal = document.getElementById("bettingIntroModal");
  if (!modal) return;
  modal.classList.add("hidden");
  document.body.classList.remove("modal-open");
  localStorage.setItem(BET_INTRO_KEY, "1");
}

function initBettingIntro() {
  const modal = document.getElementById("bettingIntroModal");
  if (!modal) return;

  modal.querySelectorAll("[data-betintro-dismiss]").forEach((btn) => {
    btn.addEventListener("click", closeBettingIntro);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeBettingIntro();
  });

  document.getElementById("reopenBettingIntro")?.addEventListener("click", openBettingIntro);
}

// Affiche l'intro paris à la première arrivée sur la page (après le pop-up
// d'accueil s'il est encore ouvert).
function maybeShowBettingIntro() {
  if (localStorage.getItem(BET_INTRO_KEY)) return;
  const welcome = document.getElementById("welcomeModal");
  if (welcome && !welcome.classList.contains("hidden")) return;
  setTimeout(openBettingIntro, 300);
}

function showToast(type, title, message, duration = 4000) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const icons = {
    success: "✅",
    error: "❌",
    info: "ℹ️"
  };

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || icons.info}</span>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
    <button class="toast-close" aria-label="Fermer">×</button>
  `;

  const closeBtn = toast.querySelector(".toast-close");
  closeBtn.addEventListener("click", () => removeToast(toast));

  container.appendChild(toast);

  if (duration > 0) {
    setTimeout(() => removeToast(toast), duration);
  }

  return toast;
}

function removeToast(toast) {
  toast.style.animation = "slideOut 0.3s ease";
  setTimeout(() => toast.remove(), 300);
}

function toggleTheme() {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem(THEME_KEY, next);
  const btn = document.getElementById("themeToggle");
  if (btn) btn.textContent = next === "dark" ? "🌙" : "☀️";
}

function openMobileMenu() {
  document.body.classList.add("menu-open");
  const btn = document.getElementById("menuToggle");
  if (btn) {
    btn.setAttribute("aria-expanded", "true");
    btn.setAttribute("aria-label", "Fermer le menu");
    btn.textContent = "✕";
  }
}

function closeMobileMenu() {
  if (!document.body.classList.contains("menu-open")) return;
  document.body.classList.remove("menu-open");
  const btn = document.getElementById("menuToggle");
  if (btn) {
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "Ouvrir le menu");
    btn.textContent = "☰";
  }
}

function closeNavMore() {
  const menu = document.getElementById("navMoreMenu");
  const btn = document.getElementById("navMoreBtn");
  menu?.setAttribute("hidden", "");
  btn?.setAttribute("aria-expanded", "false");
}

function initNav() {
  document.querySelectorAll("[data-page]").forEach((btn) => {
    btn.addEventListener("click", () => {
      show(parseInt(btn.dataset.page, 10));
      closeMobileMenu();
      closeNavMore();
    });
  });
  document.getElementById("themeToggle")?.addEventListener("click", toggleTheme);

  // Menu « Plus ▾ » : regroupe les onglets secondaires sur PC.
  const moreBtn = document.getElementById("navMoreBtn");
  const moreMenu = document.getElementById("navMoreMenu");
  moreBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    if (moreMenu.hasAttribute("hidden")) {
      moreMenu.removeAttribute("hidden");
      moreBtn.setAttribute("aria-expanded", "true");
    } else {
      closeNavMore();
    }
  });
  document.addEventListener("click", (e) => {
    if (!moreMenu || moreMenu.hasAttribute("hidden")) return;
    if (!e.target.closest(".nav-more")) closeNavMore();
  });

  const menuBtn = document.getElementById("menuToggle");
  const backdrop = document.getElementById("menuBackdrop");
  menuBtn?.addEventListener("click", () => {
    if (document.body.classList.contains("menu-open")) closeMobileMenu();
    else openMobileMenu();
  });
  backdrop?.addEventListener("click", closeMobileMenu);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMobileMenu();
      closeNavMore();
    }
  });

  document.getElementById("toggleOverview")?.addEventListener("click", () => {
    const box = document.getElementById("groupsOverview");
    box?.classList.toggle("hidden");
    document.getElementById("toggleOverview").textContent = box?.classList.contains("hidden")
      ? "Vue des 12 groupes"
      : "Masquer la vue complète";
  });

  const search = document.getElementById("search");
  search?.addEventListener("input", render);

  document.getElementById("lbRefresh")?.addEventListener("click", () => renderLeaderboard());

  const topBtn = document.getElementById("scrollTop");
  window.addEventListener("scroll", () => {
    if (!topBtn) return;
    topBtn.classList.toggle("hidden", window.scrollY < 400);
  });
  topBtn?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  document.getElementById("rosterBack")?.addEventListener("click", () => show(prevRosterPage || 0));

  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-team-roster]");
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    openRoster(btn.dataset.teamRoster);
  });
}

function tickLiveSections() {
  renderCountdown();
  renderLiveBanner();
  renderTodayHome();
  renderLastResultsHome();
  renderHomeStats();
  renderToday();
}

function scheduleMatchRefresh() {
  if (matchRefreshTimer) clearTimeout(matchRefreshTimer);

  const now = Date.now();
  let nextAt = now + 60000;

  matches.forEach((m) => {
    const start = getDateObj(m).getTime();
    const end = start + MATCH_MS;
    if (start > now && start < nextAt) nextAt = start;
    if (end > now && end < nextAt) nextAt = end;
  });

  const delay = Math.max(8000, Math.min(60000, nextAt - now + 800));

  matchRefreshTimer = setTimeout(() => {
    render();
    resolveDueBets();
    maybeRefreshBetting();
    scheduleMatchRefresh();
  }, delay);
}

async function boot() {
  applyDevSoon();
  initTheme();
  initNav();
  initWelcome();
  initBettingIntro();
  initJoinModal();
  initLoginModal();
  initMatchModal();
  initBetEditModal();
  validateBracket();
  document.body.classList.toggle("test-mode", !!(window.Players && window.Players.isTestMode()));
  document.body.classList.toggle("dev-soon-mode", isDevSoonMode());
  const result = await initStandingsSync();
  syncMode = result.mode;
  recalcStandingsFromScores();
  if (window.Betting) window.Betting.init();
  // Profil cross-appareils : on récupère le solde / paris / favoris en ligne.
  if (window.Players && window.Players.hasJoined() && window.Players.pullProfileData) {
    try {
      const row = await window.Players.pullProfileData();
      if (row && row.data) applyProfileData(row.data);
    } catch (_) {}
  }
  resolveDueBets();
  render();
  renderGroups();
  scheduleMatchRefresh();
  if (window.Players) {
    window.Players.refreshLeaderboard();
    if (window.Players.hasJoined()) window.Players.pushStats();
  }
  if (isSyncEnabled() && !canEditStandings()) {
    setInterval(refreshStandingsFromCloud, 120000);
  }
}

boot();
