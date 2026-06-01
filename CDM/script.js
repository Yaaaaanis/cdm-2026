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

const OPENING = new Date("2026-06-11T21:00:00");
const FINAL = new Date("2026-07-19T21:00:00");
const FAV_KEY = "cdm_favorites";
const THEME_KEY = "cdm_theme";
const MATCH_MS = 105 * 60 * 1000;

let standings = defaultStandings();
let scores = defaultScores();
let syncMode = "local";
let knockoutFilter = "all";
let matchRefreshTimer = null;

function getScore(m) {
  const s = scores[m.id];
  if (!s || s.h === undefined || s.a === undefined) return null;
  return { h: Number(s.h), a: Number(s.a) };
}

function hasScore(m) {
  const s = getScore(m);
  return s !== null && !Number.isNaN(s.h) && !Number.isNaN(s.a);
}

function recalcStandingsFromScores() {
  if (!Object.keys(scores).length) return;

  Object.keys(GROUPS).forEach((g) => {
    GROUPS[g].forEach((team) => {
      standings[g][team] = 0;
    });
  });

  matches.forEach((m) => {
    const s = getScore(m);
    if (!s || Number.isNaN(s.h) || Number.isNaN(s.a)) return;
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
    delete scores[m.id];
  } else {
    const hi = parseInt(h, 10);
    const ai = parseInt(a, 10);
    if (Number.isNaN(hi) || Number.isNaN(ai) || hi < 0 || ai < 0) {
      showToast("error", "Erreur", "Score invalide.");
      return;
    }
    scores[m.id] = { h: hi, a: ai };
    // Résoudre les paris pour ce match
    if (window.Betting) resolveBetsForMatch(m, hi, ai);
  }
  recalcStandingsFromScores();
  persistData();
  render();
  renderGroups();
}

function clearMatchScore(m) {
  delete scores[m.id];
  recalcStandingsFromScores();
  persistData();
  render();
  renderGroups();
}

function scoreBlockHtml(m) {
  const s = getScore(m);
  const admin = canEditStandings() && !m._knockout;

  if (admin) {
    const hv = s ? s.h : "";
    const av = s ? s.a : "";
    return `
      <div class="score-row score-admin">
        <label class="score-label">Score</label>
        <input type="number" min="0" max="15" class="score-in" data-side="h" value="${hv}" placeholder="0" aria-label="Buts ${m.h}">
        <span class="score-sep">–</span>
        <input type="number" min="0" max="15" class="score-in" data-side="a" value="${av}" placeholder="0" aria-label="Buts ${m.a}">
        <button type="button" class="score-save">OK</button>
        ${s ? '<button type="button" class="score-clear" title="Effacer">✕</button>' : ""}
      </div>
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

function bindScoreControls(card, m) {
  const saveBtn = card.querySelector(".score-save");
  if (!saveBtn) return;

  saveBtn.addEventListener("click", () => {
    const h = card.querySelector('.score-in[data-side="h"]')?.value ?? "";
    const a = card.querySelector('.score-in[data-side="a"]')?.value ?? "";
    saveMatchScore(m, h, a);
  });

  card.querySelector(".score-clear")?.addEventListener("click", () => {
    clearMatchScore(m);
    showToast("info", "Info", "Score effacé.");
  });

  card.querySelectorAll(".score-in").forEach((input) => {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") saveBtn.click();
    });
  });
}

function createBettingInterface(m) {
  const odds = window.Betting.calculateOdds(m);
  return `
    <div class="betting-section" data-match-id="${m.id}">
      <div class="betting-options">
        <button class="betting-option" data-bet-type="home">
          ${teamLabel(m.h)}
          <span class="betting-odds">${odds.home.toFixed(2)}</span>
        </button>
        <button class="betting-option" data-bet-type="draw">
          Nul
          <span class="betting-odds">${odds.draw.toFixed(2)}</span>
        </button>
        <button class="betting-option" data-bet-type="away">
          ${teamLabel(m.a)}
          <span class="betting-odds">${odds.away.toFixed(2)}</span>
        </button>
      </div>
      <div class="betting-input-row">
        <input type="number" class="betting-input" placeholder="Montant (💰)" min="1" max="${window.Betting.getBalance()}">
        <button class="betting-btn" disabled>Parier</button>
      </div>
    </div>
  `;
}

function bindBettingControls(card, m) {
  const section = card.querySelector(".betting-section");
  if (!section) return;

  const options = section.querySelectorAll(".betting-option");
  const quickAmounts = section.querySelectorAll(".quick-amount");
  const input = section.querySelector(".betting-input");
  const btn = section.querySelector(".betting-btn");
  let selectedType = null;
  let selectedOdds = null;

  options.forEach(opt => {
    opt.addEventListener("click", () => {
      options.forEach(o => o.classList.remove("selected"));
      opt.classList.add("selected");
      selectedType = opt.dataset.betType;
      selectedOdds = parseFloat(opt.querySelector(".betting-odds").textContent);
      updateBetButton();
    });
  });

  quickAmounts.forEach(qa => {
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
    if (selectedType && amount > 0 && amount <= window.Betting.getBalance()) {
      btn.disabled = false;
      btn.textContent = `Parier ${amount} 💰`;
    } else {
      btn.disabled = true;
      btn.textContent = "Parier";
    }
  }

  btn.addEventListener("click", () => {
    const amount = parseInt(input.value, 10);
    const result = window.Betting.createBet(m.id, selectedType, amount, selectedOdds);
    if (result.success) {
      showToast("success", "Pari placé !", `Gain potentiel : ${result.bet.potentialWin} 💰`);
      input.value = "";
      options.forEach(o => o.classList.remove("selected"));
      selectedType = null;
      selectedOdds = null;
      btn.disabled = true;
      btn.textContent = "Parier";
      window.Betting.renderWalletBalance();
    } else {
      showToast("error", "Erreur", result.error);
    }
  });
}

function resolveBetsForMatch(m, homeScore, awayScore) {
  const pendingBets = window.Betting.getPendingBets().filter(b => b.matchId === m.id);
  if (pendingBets.length === 0) return;

  let matchResult;
  if (homeScore > awayScore) {
    matchResult = 'home';
  } else if (homeScore < awayScore) {
    matchResult = 'away';
  } else {
    matchResult = 'draw';
  }

  let totalWinnings = 0;
  pendingBets.forEach(bet => {
    const result = window.Betting.resolveBet(bet.id, matchResult);
    if (result.success && result.won) {
      totalWinnings += result.amount;
    }
  });

  if (totalWinnings > 0) {
    setTimeout(() => showToast("success", "Félicitations !", `Vous avez gagné ${totalWinnings} 💰 sur ce match !`), 200);
  }
}

function createBettingMatchCard(m) {
  const odds = window.Betting.calculateOdds(m);
  const card = document.createElement("div");
  card.className = "card betting-match-card";
  card.innerHTML = `
    <div class="row">
      <div class="teams">
        <span class="team-line">${teamLabel(m.h)}</span>
        <span class="vs">vs</span>
        <span class="team-line">${teamLabel(m.a)}</span>
      </div>
      <div class="time-col">
        <span class="time">${m.t}</span>
      </div>
    </div>
    <div class="betting-section" data-match-id="${m.id}">
      <div class="betting-options">
        <button class="betting-option" data-bet-type="home">
          ${teamLabel(m.h)}
          <span class="betting-odds">${odds.home.toFixed(2)}</span>
        </button>
        <button class="betting-option" data-bet-type="draw">
          Nul
          <span class="betting-odds">${odds.draw.toFixed(2)}</span>
        </button>
        <button class="betting-option" data-bet-type="away">
          ${teamLabel(m.a)}
          <span class="betting-odds">${odds.away.toFixed(2)}</span>
        </button>
      </div>
      <div class="quick-bet-amounts">
        <button class="quick-amount" data-amount="10">10 💰</button>
        <button class="quick-amount" data-amount="25">25 💰</button>
        <button class="quick-amount" data-amount="50">50 💰</button>
        <button class="quick-amount" data-amount="100">100 💰</button>
      </div>
      <div class="betting-input-row">
        <input type="number" class="betting-input" placeholder="Montant (💰)" min="1" max="${window.Betting.getBalance()}">
        <button class="betting-btn" disabled>Parier</button>
      </div>
    </div>
    <div class="meta">
      <span class="date">📅 ${getDateLabel(m)}</span>
      ${m.g ? `<span class="badge">Groupe ${m.g}</span>` : ""}
      ${m.d ? `<span class="badge jour">J${m.d}</span>` : ""}
    </div>
  `;
  bindBettingControls(card, m);
  return card;
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

function getMatchStatus(m) {
  const start = getDateObj(m);
  const end = new Date(start.getTime() + MATCH_MS);
  const now = new Date();
  if (now < start) return { key: "upcoming", label: "À venir" };
  if (now <= end) return { key: "live", label: "En cours" };
  return { key: "done", label: "Terminé" };
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

  renderHome();
  renderToday();
  renderFavorites();
  renderKnockout();
}

function renderHome() {
  renderCountdown();
  renderNextMatch();
  renderHomeStats();
  renderQuickNav();
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
    { page: 7, label: "Maroc", icon: "��" },
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
  const box = document.getElementById("todayMatches");
  if (!label || !box) return;
  box.innerHTML = "";

  const key = todayKey();
  const today = sortMatches(matches.filter((m) => m.date === key));

  label.textContent = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  if (!today.length) {
    const next = sortMatches(
      matches.filter((m) => getMatchStatus(m).key === "upcoming")
    )[0];
    box.innerHTML = "<p class='empty-msg'>Aucun match aujourd'hui.</p>";
    if (next) {
      const p = document.createElement("p");
      p.className = "section-hint";
      p.textContent = "Prochain match :";
      box.appendChild(p);
      box.appendChild(createCard(next));
    }
    return;
  }

  today.forEach((m) => box.appendChild(createCard(m)));
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

function renderBettingPage() {
  if (!window.Betting) return;

  const balanceEl = document.getElementById("walletBalancePage");
  const winningsEl = document.getElementById("totalWinnings");
  const pendingCountEl = document.getElementById("pendingBetsCount");
  const bettingFiltersEl = document.getElementById("bettingFilters");
  const bettingMatchesEl = document.getElementById("bettingMatches");
  const pendingBetsEl = document.getElementById("pendingBets");
  const completedBetsEl = document.getElementById("completedBets");

  // Vérifier si l'utilisateur est admin
  const isAdmin = canEditStandings();

  if (!isAdmin) {
    // Mode maintenance pour les non-admin
    if (balanceEl) balanceEl.parentElement.parentElement.innerHTML = `
      <div class="wallet-info">
        <div class="wallet-card" style="grid-column: span 3; text-align: center; padding: 30px;">
          <span style="font-size: 3rem; margin-bottom: 10px; display: block;">🚧</span>
          <span class="wallet-label" style="font-size: 1rem; margin-bottom: 5px;">Maintenance</span>
          <span class="wallet-amount" style="font-size: 1rem;">Bientôt disponible</span>
        </div>
      </div>
    `;
    if (bettingMatchesEl) bettingMatchesEl.innerHTML = "";
    if (pendingBetsEl) pendingBetsEl.innerHTML = "";
    if (completedBetsEl) completedBetsEl.innerHTML = "";
    return;
  }

  if (balanceEl) balanceEl.textContent = `${window.Betting.getBalance()} 💰`;
  if (winningsEl) winningsEl.textContent = `${window.Betting.getAllBets().reduce((sum, b) => b.status === 'won' ? sum + b.potentialWin : sum, 0)} 💰`;
  if (pendingCountEl) pendingCountEl.textContent = window.Betting.getPendingBets().length;

  // Afficher les filtres
  if (bettingFiltersEl) {
    bettingFiltersEl.innerHTML = "";
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

  // Afficher les matchs disponibles pour les paris
  if (bettingMatchesEl) {
    bettingMatchesEl.innerHTML = "";
    let upcomingMatches = matches.filter(m => getMatchStatus(m).key === 'upcoming');
    
    // Appliquer le filtre
    if (bettingFilter !== "all") {
      const day = parseInt(bettingFilter.replace("J", ""), 10);
      upcomingMatches = upcomingMatches.filter(m => m.d === day);
    }
    
    if (upcomingMatches.length === 0) {
      bettingMatchesEl.innerHTML = "<p class='empty-msg'>Aucun match à venir disponible pour les paris.</p>";
    } else {
      sortMatches(upcomingMatches).forEach(m => {
        const card = createBettingMatchCard(m);
        bettingMatchesEl.appendChild(card);
      });
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
        const match = matches.find(m => m.id === bet.matchId);
        if (!match) return;
        const card = document.createElement("div");
        card.className = "bet-card";
        const betTypeLabel = bet.betType === 'home' ? match.h : bet.betType === 'away' ? match.a : 'Nul';
        card.innerHTML = `
          <div class="bet-header">
            <span class="bet-status pending">En attente</span>
          </div>
          <div class="bet-match">${teamLabel(match.h)} vs ${teamLabel(match.a)}</div>
          <div class="bet-details">
            <span>Pari : ${betTypeLabel}</span>
            <span class="bet-odds">Cote : ${bet.odds.toFixed(2)}</span>
          </div>
          <div class="bet-details">
            <span class="bet-amount">Mise : ${bet.amount} 💰</span>
            <span class="bet-potential">Gain : ${bet.potentialWin} 💰</span>
          </div>
        `;
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
        const match = matches.find(m => m.id === bet.matchId);
        if (!match) return;
        const card = document.createElement("div");
        card.className = `bet-card ${bet.status}`;
        const betTypeLabel = bet.betType === 'home' ? match.h : bet.betType === 'away' ? match.a : 'Nul';
        card.innerHTML = `
          <div class="bet-header">
            <span class="bet-status ${bet.status}">${bet.status === 'won' ? 'Gagné' : 'Perdu'}</span>
          </div>
          <div class="bet-match">${teamLabel(match.h)} vs ${teamLabel(match.a)}</div>
          <div class="bet-details">
            <span>Pari : ${betTypeLabel}</span>
            <span class="bet-odds">Cote : ${bet.odds.toFixed(2)}</span>
          </div>
          <div class="bet-details">
            <span class="bet-amount">Mise : ${bet.amount} 💰</span>
            <span class="${bet.status === 'won' ? 'bet-potential' : ''}">${bet.status === 'won' ? 'Gain : ' + bet.potentialWin + ' 💰' : 'Perdu'}</span>
          </div>
        `;
        completedBetsEl.appendChild(card);
      });
    }
  }
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
  el.innerHTML = `Coup d'envoi dans <strong>${days}</strong> j <strong>${hours}</strong> h <strong>${mins}</strong> min`;
}

function renderNextMatch() {
  const el = document.getElementById("nextMatch");
  if (!el) return;
  const now = new Date();
  const upcoming = sortMatches(
    matches.filter((m) => getMatchStatus(m).key === "upcoming")
  );
  if (!upcoming.length) {
    el.innerHTML = "<p class='empty-msg'>Phase de groupes terminée.</p>";
    return;
  }
  el.innerHTML = "";
  el.appendChild(createCard(upcoming[0]));
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
    bar.innerHTML = `
      <p class="admin-msg ok">Mode admin — saisis les scores sur les matchs, les points des poules suivent (victoire 3, nul 1).</p>
      <button type="button" class="admin-btn outline" id="btnRecalc">Recalculer les points</button>
      <button type="button" class="admin-btn outline" id="btnLock">Verrouiller</button>
      <button type="button" class="admin-btn outline" id="btnRefresh">Actualiser</button>
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
    const sorted = [...GROUPS[g]].sort(
      (a, b) => (standings[g][b] ?? 0) - (standings[g][a] ?? 0)
    );
    mini.innerHTML = `<div class="mini-title">Groupe ${g}</div><ol></ol>`;
    const ol = mini.querySelector("ol");
    sorted.forEach((team, i) => {
      const li = document.createElement("li");
      li.innerHTML = `<span>${i + 1}. ${teamFavButton(team)} ${teamLabel(team)}</span><strong>${standings[g][team] ?? 0} pts</strong>`;
      bindFavStars(li);
      ol.appendChild(li);
    });
    mini.onclick = () => {
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

  const teams = GROUPS[active];
  const sorted = [...teams].sort(
    (a, b) => (standings[active][b] ?? 0) - (standings[active][a] ?? 0)
  );

  const table = document.createElement("table");
  table.className = "standings-table" + (editable ? "" : " readonly");
  table.innerHTML = editable
    ? `<thead><tr><th>#</th><th>Équipe</th><th>Pts</th><th></th></tr></thead><tbody></tbody>`
    : `<thead><tr><th>#</th><th>Équipe</th><th>Pts</th></tr></thead><tbody></tbody>`;
  const tbody = table.querySelector("tbody");

  sorted.forEach((team, i) => {
    const pts = standings[active][team] ?? 0;
    const tr = document.createElement("tr");
    const teamCell = `<td class="team-cell">${teamFavButton(team)} <span>${teamLabel(team)}</span></td>`;
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

function show(i) {
  document.querySelectorAll(".page").forEach((p, idx) => {
    p.classList.toggle("active", idx === i);
  });
  document.querySelectorAll(".top-nav button").forEach((b) => {
    b.classList.toggle("active", parseInt(b.dataset.page, 10) === i);
  });
  document.querySelector(".logo-btn")?.classList.toggle("active", i === 0);
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (i === 9) renderGroups();
  if (i === 11) document.getElementById("search")?.focus();
  if (i === 12) renderBettingPage();
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  const btn = document.getElementById("themeToggle");
  if (btn) btn.textContent = saved === "dark" ? "🌙" : "☀️";
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

function initNav() {
  document.querySelectorAll("[data-page]").forEach((btn) => {
    btn.addEventListener("click", () => show(parseInt(btn.dataset.page, 10)));
  });
  document.getElementById("themeToggle")?.addEventListener("click", toggleTheme);

  document.getElementById("toggleOverview")?.addEventListener("click", () => {
    const box = document.getElementById("groupsOverview");
    box?.classList.toggle("hidden");
    document.getElementById("toggleOverview").textContent = box?.classList.contains("hidden")
      ? "Vue des 12 groupes"
      : "Masquer la vue complète";
  });

  const search = document.getElementById("search");
  search?.addEventListener("input", render);

  const topBtn = document.getElementById("scrollTop");
  window.addEventListener("scroll", () => {
    if (!topBtn) return;
    topBtn.classList.toggle("hidden", window.scrollY < 400);
  });
  topBtn?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function tickLiveSections() {
  renderCountdown();
  renderNextMatch();
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
    scheduleMatchRefresh();
  }, delay);
}

async function boot() {
  initTheme();
  initNav();
  const result = await initStandingsSync();
  syncMode = result.mode;
  if (window.Betting) window.Betting.init();
  render();
  renderGroups();
  scheduleMatchRefresh();
  if (isSyncEnabled() && !canEditStandings()) {
    setInterval(refreshStandingsFromCloud, 120000);
  }
}

boot();
