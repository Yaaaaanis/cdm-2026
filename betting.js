/* Système de paris sportifs virtuels - CDM 2026 */

const WALLET_KEY = "cdm_wallet";
const BETS_KEY = "cdm_bets";
const WELCOME_BONUS = 100; // Bonus de bienvenue en pièces virtuelles
const FAVORITE_BONUS = 50; // Bonus quand on ajoute un favori

// État du wallet
let wallet = {
  balance: 0,
  totalWinnings: 0,
  totalLosses: 0,
  hasReceivedWelcomeBonus: false,
  favoriteBonusReceived: false,
  epoch: null
};

// Liste des paris
let bets = [];

function currentEpoch() {
  return (window.CDM_CONFIG && window.CDM_CONFIG.walletEpoch) || "default";
}

function freshWallet() {
  return {
    balance: WELCOME_BONUS,
    totalWinnings: 0,
    totalLosses: 0,
    hasReceivedWelcomeBonus: true,
    favoriteBonusReceived: false,
    epoch: currentEpoch()
  };
}

// Initialiser le wallet
function initWallet() {
  try {
    const saved = localStorage.getItem(WALLET_KEY);
    if (saved) {
      wallet = JSON.parse(saved);
    } else {
      wallet = freshWallet();
      saveWallet();
    }
  } catch (e) {
    console.error("Erreur lors du chargement du wallet:", e);
    wallet = freshWallet();
  }

  // Nouvelle "saison" → tout le monde repart à 100 pièces, paris remis à zéro.
  if (wallet.epoch !== currentEpoch()) {
    wallet = freshWallet();
    bets = [];
    saveWallet();
    saveBets();
  }
}

// Sauvegarder le wallet
function saveWallet() {
  localStorage.setItem(WALLET_KEY, JSON.stringify(wallet));
}

// Obtenir le solde
function getBalance() {
  return wallet.balance;
}

// Ajouter des fonds
function addFunds(amount, reason = "") {
  wallet.balance += amount;
  if (amount > 0) {
    wallet.totalWinnings += amount;
  }
  saveWallet();
  return wallet.balance;
}

// Retirer des fonds (pour un pari)
function deductFunds(amount) {
  if (wallet.balance < amount) {
    return false; // Pas assez de fonds
  }
  wallet.balance -= amount;
  saveWallet();
  return true;
}

// Donner le bonus favori
function giveFavoriteBonus() {
  if (!wallet.favoriteBonusReceived) {
    wallet.balance += FAVORITE_BONUS;
    wallet.totalWinnings += FAVORITE_BONUS;
    wallet.favoriteBonusReceived = true;
    saveWallet();
    return true;
  }
  return false;
}

// Calculer les cotes pour un match basé sur les classements
function calculateOdds(match) {
  // Récupérer les classements depuis le script principal
  if (typeof standings !== 'undefined' && match.g && standings[match.g]) {
    const homePoints = standings[match.g][match.h] || 0;
    const awayPoints = standings[match.g][match.a] || 0;

    // Calculer la différence de points
    const pointDiff = homePoints - awayPoints;

    // Plus la différence est grande, plus les cotes sont extrêmes
    // Si home a beaucoup plus de points : cote home basse, cote away haute
    // Si away a beaucoup plus de points : cote away basse, cote home haute

    let homeOdds, awayOdds, drawOdds;

    if (pointDiff > 3) {
      // Home grand favori
      homeOdds = 1.4 + Math.random() * 0.3; // 1.4 - 1.7
      awayOdds = 5.0 + Math.random() * 2.0; // 5.0 - 7.0
    } else if (pointDiff > 0) {
      // Home léger favori
      homeOdds = 1.8 + Math.random() * 0.4; // 1.8 - 2.2
      awayOdds = 3.5 + Math.random() * 1.0; // 3.5 - 4.5
    } else if (pointDiff < -3) {
      // Away grand favori
      homeOdds = 5.0 + Math.random() * 2.0; // 5.0 - 7.0
      awayOdds = 1.4 + Math.random() * 0.3; // 1.4 - 1.7
    } else if (pointDiff < 0) {
      // Away léger favori
      homeOdds = 3.5 + Math.random() * 1.0; // 3.5 - 4.5
      awayOdds = 1.8 + Math.random() * 0.4; // 1.8 - 2.2
    } else {
      // Équipes égales
      homeOdds = 2.4 + Math.random() * 0.4; // 2.4 - 2.8
      awayOdds = 2.4 + Math.random() * 0.4; // 2.4 - 2.8
    }

    // Cote du nul toujours entre 2.8 et 3.5
    drawOdds = 2.8 + Math.random() * 0.7;

    return {
      home: Math.round(homeOdds * 100) / 100,
      draw: Math.round(drawOdds * 100) / 100,
      away: Math.round(awayOdds * 100) / 100
    };
  }

  // Fallback si pas de classements disponibles
  const homeOdds = 2.5;
  const drawOdds = 3.0;
  const awayOdds = 2.8;

  return {
    home: homeOdds,
    draw: drawOdds,
    away: awayOdds
  };
}

// Calculer les cotes pour le score exact
function calculateExactScoreOdds(homeScore, awayScore) {
  // Plus le score est élevé, plus la cote est haute
  const totalGoals = homeScore + awayScore;
  const baseOdds = 6.0 + (totalGoals * 2.0);
  return baseOdds;
}

// Calculer les cotes pour le nombre de buts (over/under)
function calculateGoalsOdds(threshold, isOver) {
  // Over a généralement des cotes plus basses que under
  if (isOver) {
    return threshold <= 2 ? 1.8 : threshold <= 3 ? 2.2 : 2.8;
  } else {
    return threshold <= 2 ? 2.0 : threshold <= 3 ? 1.9 : 1.7;
  }
}

// Créer un pari.
// market    : '1x2' | 'dc' | 'ou' | 'btts' | 'exact' | 'scorer'
// selection : identifiant stable propre au marché (ex 'home', '1X', 'over_2.5', '2-1', 'but:Mbappé')
// label     : libellé lisible conservé pour l'historique
function createBet(matchId, market, selection, label, amount, odds) {
  if (amount <= 0) {
    return { success: false, error: "Le montant doit être positif" };
  }

  if (!deductFunds(amount)) {
    return { success: false, error: "Solde insuffisant" };
  }

  const bet = {
    id: Date.now().toString() + Math.random().toString(36).slice(2, 6),
    matchId: matchId,
    market: market,
    selection: selection,
    label: label || selection,
    betType: market === "1x2" ? selection : undefined, // rétro-compat affichage
    amount: amount,
    odds: odds,
    potentialWin: Math.floor(amount * odds),
    status: 'pending', // pending, won, lost
    createdAt: new Date().toISOString()
  };

  bets.push(bet);
  saveBets();

  return { success: true, bet: bet };
}

// Sauvegarder les paris
function saveBets() {
  localStorage.setItem(BETS_KEY, JSON.stringify(bets));
}

// Charger les paris
function loadBets() {
  try {
    const saved = localStorage.getItem(BETS_KEY);
    if (saved) {
      bets = JSON.parse(saved);
    }
  } catch (e) {
    console.error("Erreur lors du chargement des paris:", e);
    bets = [];
  }
}

// Obtenir tous les paris
function getAllBets() {
  return bets;
}

// Obtenir les paris en attente
function getPendingBets() {
  return bets.filter(b => b.status === 'pending');
}

// Obtenir les paris terminés
function getCompletedBets() {
  return bets.filter(b => b.status === 'won' || b.status === 'lost');
}

// Calculer le gain potentiel total des paris en attente
function getTotalPotentialWin() {
  return getPendingBets().reduce((sum, bet) => sum + bet.potentialWin, 0);
}

// Détermine l'issue d'un pari à partir du score final et de la liste des buteurs.
// Renvoie 'won', 'lost', ou null si on ne peut pas encore trancher (ex : buteur
// non résolu tant que la liste des buteurs n'est pas saisie).
function betOutcome(bet, score, scorers) {
  const h = Number(score.h);
  const a = Number(score.a);
  const total = h + a;
  const result = h > a ? "home" : h < a ? "away" : "draw";
  const market = bet.market || (bet.betType ? "1x2" : null);
  const sel = bet.selection != null ? bet.selection : bet.betType;

  switch (market) {
    case "1x2":
      return sel === result ? "won" : "lost";
    case "dc": {
      const map = { "1X": ["home", "draw"], "12": ["home", "away"], "X2": ["draw", "away"] };
      return (map[sel] || []).includes(result) ? "won" : "lost";
    }
    case "ou": {
      const [side, thr] = String(sel).split("_");
      const t = parseFloat(thr);
      const isOver = total > t;
      return (side === "over") === isOver ? "won" : "lost";
    }
    case "btts": {
      const both = h > 0 && a > 0;
      return (sel === "yes") === both ? "won" : "lost";
    }
    case "exact":
      return sel === `${h}-${a}` ? "won" : "lost";
    case "scorer": {
      const name = String(sel).replace(/^but:/, "");
      if (Array.isArray(scorers) && scorers.length) {
        return scorers.includes(name) ? "won" : "lost";
      }
      if (total === 0) return "lost"; // aucun but => aucun buteur
      return null; // en attente de la saisie des buteurs
    }
    default:
      return null;
  }
}

// Résout un pari avec le contexte du match (score + buteurs).
function resolveBetWith(betId, score, scorers) {
  const bet = bets.find((b) => b.id === betId);
  if (!bet || bet.status !== "pending") {
    return { success: false, error: "Pari non trouvé ou déjà résolu" };
  }
  const outcome = betOutcome(bet, score, scorers);
  if (!outcome) return { success: false, pending: true };

  if (outcome === "won") {
    bet.status = "won";
    addFunds(bet.potentialWin, "Gain pari");
    saveBets();
    return { success: true, won: true, amount: bet.potentialWin };
  }
  bet.status = "lost";
  wallet.totalLosses += bet.amount;
  saveWallet();
  saveBets();
  return { success: true, won: false };
}

// Ancienne API (1N2 uniquement) — conservée par sécurité.
function resolveBet(betId, matchResult) {
  return resolveBetWith(betId, matchResult === "home" ? { h: 1, a: 0 } : matchResult === "away" ? { h: 0, a: 1 } : { h: 1, a: 1 }, null);
}

// Annuler un pari en attente : rembourse la mise et supprime le pari.
function cancelBet(betId) {
  const idx = bets.findIndex((b) => b.id === betId);
  if (idx === -1) return { success: false, error: "Pari introuvable" };
  const bet = bets[idx];
  if (bet.status !== "pending") return { success: false, error: "Pari déjà résolu" };
  wallet.balance += bet.amount;
  saveWallet();
  bets.splice(idx, 1);
  saveBets();
  return { success: true, amount: bet.amount };
}

// Statistiques agrégées pour le classement
function getStats() {
  return {
    balance: wallet.balance,
    placed: bets.length,
    won: bets.filter((b) => b.status === "won").length,
    lost: bets.filter((b) => b.status === "lost").length
  };
}

// Exporter l'état (pour la synchro de profil entre appareils)
function exportState() {
  return { wallet: { ...wallet }, bets: bets.map((b) => ({ ...b })) };
}

// Importer un état venant du serveur. Respecte l'epoch : si la saison a changé
// (walletEpoch différent), on repart proprement à 100 plutôt que d'importer un
// vieux solde.
function importState(state) {
  if (!state || typeof state !== "object") return;
  if (state.wallet && typeof state.wallet === "object") {
    if (state.wallet.epoch !== currentEpoch()) {
      wallet = freshWallet();
      bets = [];
    } else {
      wallet = { ...freshWallet(), ...state.wallet };
      bets = Array.isArray(state.bets) ? state.bets : [];
    }
  } else if (Array.isArray(state.bets)) {
    bets = state.bets;
  }
  saveWallet();
  saveBets();
  renderWalletBalance();
}

// Remettre le porte-monnaie à zéro (100 pièces, paris effacés)
function resetWallet() {
  wallet = freshWallet();
  bets = [];
  saveWallet();
  saveBets();
  renderWalletBalance();
}

// Afficher le solde dans l'interface
function renderWalletBalance() {
  const el = document.getElementById("walletBalance");
  if (el) {
    el.textContent = `${wallet.balance} 💰`;
  }
}

// Initialiser le système de paris
function initBetting() {
  initWallet();
  loadBets();
  renderWalletBalance();
}

// Exporter les fonctions pour utilisation dans script.js
window.Betting = {
  init: initBetting,
  getBalance,
  addFunds,
  deductFunds,
  giveFavoriteBonus,
  calculateOdds,
  calculateExactScoreOdds,
  calculateGoalsOdds,
  createBet,
  getAllBets,
  getPendingBets,
  getCompletedBets,
  cancelBet,
  getTotalPotentialWin,
  resolveBet,
  resolveBetWith,
  betOutcome,
  renderWalletBalance,
  getStats,
  exportState,
  importState,
  resetWallet
};
