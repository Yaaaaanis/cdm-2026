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
  favoriteBonusReceived: false
};

// Liste des paris
let bets = [];

// Initialiser le wallet
function initWallet() {
  try {
    const saved = localStorage.getItem(WALLET_KEY);
    if (saved) {
      wallet = JSON.parse(saved);
    } else {
      // Premier lancement - donner le bonus de bienvenue
      wallet.balance = WELCOME_BONUS;
      wallet.hasReceivedWelcomeBonus = true;
      wallet.totalWinnings = 0;
      wallet.totalLosses = 0;
      wallet.favoriteBonusReceived = false;
      saveWallet();
    }
  } catch (e) {
    console.error("Erreur lors du chargement du wallet:", e);
    wallet = {
      balance: WELCOME_BONUS,
      totalWinnings: 0,
      totalLosses: 0,
      hasReceivedWelcomeBonus: true,
      favoriteBonusReceived: false
    };
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

// Créer un pari
function createBet(matchId, betType, amount, odds) {
  if (amount <= 0) {
    return { success: false, error: "Le montant doit être positif" };
  }

  if (!deductFunds(amount)) {
    return { success: false, error: "Solde insuffisant" };
  }

  const bet = {
    id: Date.now().toString(),
    matchId: matchId,
    betType: betType, // 'home', 'draw', 'away'
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

// Résoudre un pari après un match
function resolveBet(betId, matchResult) {
  const bet = bets.find(b => b.id === betId);
  if (!bet || bet.status !== 'pending') {
    return { success: false, error: "Pari non trouvé ou déjà résolu" };
  }
  
  // matchResult: 'home', 'draw', 'away'
  if (bet.betType === matchResult) {
    // Pari gagné
    bet.status = 'won';
    addFunds(bet.potentialWin, "Gain pari");
    return { success: true, won: true, amount: bet.potentialWin };
  } else {
    // Pari perdu
    bet.status = 'lost';
    wallet.totalLosses += bet.amount;
    saveWallet();
    return { success: true, won: false };
  }
  
  saveBets();
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
  getTotalPotentialWin,
  resolveBet,
  renderWalletBalance
};
