/* Moteur de cotes réalistes — CDM 2026.
 *
 * Principe :
 *  - Chaque équipe a une "note de force" (échelle ~0-100, calquée sur le niveau Elo/FIFA).
 *  - L'écart de niveau donne un nombre de buts attendus pour chaque équipe (lambda).
 *  - Un modèle de Poisson transforme ces lambdas en probabilités cohérentes pour TOUS
 *    les marchés (1N2, double chance, +/- de buts, les deux marquent, score exact, buteur).
 *  - Les cotes en découlent (proba -> cote) avec une marge bookmaker.
 *
 * IMPORTANT : tout est déterministe (aucun Math.random). Les cotes d'un match ne
 * bougent donc jamais une fois affichées — contrairement à l'ancien calcul aléatoire.
 */

// Note de force par équipe (0-100). Approximations niveau 2026 (Elo/FIFA).
const TEAM_RATINGS = {
  // Très haut de tableau
  "Argentine": 92, "France": 91, "Espagne": 91, "Angleterre": 89, "Brésil": 89,
  "Portugal": 88, "Pays-Bas": 86, "Allemagne": 85, "Belgique": 84,
  // Solides
  "Croatie": 82, "Uruguay": 82, "Colombie": 81, "Maroc": 81, "Italie": 84,
  "Suisse": 78, "Sénégal": 78, "Japon": 78, "Norvège": 79, "Turquie": 77,
  "États-Unis": 78, "Mexique": 77, "Autriche": 77, "Équateur": 76,
  // Milieu de tableau
  "Côte d'Ivoire": 75, "Corée du Sud": 75, "République tchèque": 75, "Égypte": 75,
  "Algérie": 75, "Canada": 75, "Écosse": 74, "Iran": 74, "RD Congo": 74,
  "Suède": 74, "Australie": 73, "Paraguay": 73, "Ghana": 73, "Tunisie": 73,
  "Bosnie-Herzégovine": 73, "Afrique du Sud": 72,
  // Plus modestes
  "Ouzbékistan": 71, "Arabie saoudite": 71, "Panama": 70, "Qatar": 70,
  "Cap-Vert": 69, "Irak": 69, "Jordanie": 68, "Nouvelle-Zélande": 67,
  "Curaçao": 66, "Haïti": 65
};

const DEFAULT_RATING = 70;   // équipe inconnue / match de test
const MARGIN = 0.07;         // marge bookmaker (~7%)
const BASE_GOALS = 1.35;     // buts attendus par équipe à forces égales
const K = 0.028;             // sensibilité des buts attendus à l'écart de niveau
const MAX_GOALS = 8;         // borne de sommation Poisson
const MAX_ODDS = 51;         // plafond de cote affichée

// Poids de buts par poste (pour répartir les buts attendus entre joueurs).
const SCORER_WEIGHTS = { "Attaquants": 1.0, "Milieux": 0.42, "Défenseurs": 0.12, "Gardiens": 0.0 };
const SCORER_SHARE = 0.92;   // part des buts d'équipe attribuée aux joueurs listés
const SCORERS_PER_TEAM = 5;  // nb de buteurs proposés par équipe

// Multiplicateur pour les buteurs vedettes : sans note individuelle, on remonte
// les vraies menaces offensives pour des cotes "buteur" crédibles (ex Mbappé ~2.7).
const STAR_SCORERS = {
  // France
  "Kylian Mbappé": 3.6, "Ousmane Dembélé": 2.0, "Marcus Thuram": 1.8, "Michael Olise": 1.6, "Bradley Barcola": 1.5, "Jean-Philippe Mateta": 1.5,
  // Maroc
  "Ayoub El Kaabi": 2.2, "Brahim Diaz": 1.9, "Soufiane Rahimi": 1.6, "Abdessamad Ezzalzouli": 1.6,
  // Portugal
  "Cristiano Ronaldo": 3.0, "Rafael Leão": 2.2, "Gonçalo Ramos": 2.0, "Bruno Fernandes": 2.2, "João Félix": 1.8, "Pedro Neto": 1.6,
  // Brésil
  "Vinicius Jr": 3.0, "Raphinha": 2.4, "Neymar Jr": 2.2, "Matheus Cunha": 1.8, "Endrick": 1.8, "Gabriel Martinelli": 1.7,
  // Argentine
  "Lautaro Martínez": 2.8, "Julián Álvarez": 2.8, "Lionel Messi": 2.6, "Nicolás González": 1.6, "Thiago Almada": 1.5,
  // Espagne
  "Lamine Yamal": 2.6, "Nico Williams": 2.2, "Mikel Oyarzabal": 2.0, "Dani Olmo": 1.9, "Ferran Torres": 1.8, "Mikel Merino": 1.6,
  // Allemagne
  "Jamal Musiala": 2.6, "Florian Wirtz": 2.4, "Kai Havertz": 2.4, "Leroy Sané": 2.0, "Nick Woltemade": 1.8, "Deniz Undav": 1.8,
  // Angleterre
  "Harry Kane": 3.2, "Bukayo Saka": 2.4, "Jude Bellingham": 2.4, "Marcus Rashford": 2.0, "Ollie Watkins": 1.8, "Eberechi Eze": 1.6,
  // Pays-Bas
  "Memphis Depay": 2.6, "Cody Gakpo": 2.4, "Donyell Malen": 1.8, "Brian Brobbey": 1.7, "Wout Weghorst": 1.7
};

const FACTORIALS = (() => {
  const f = [1];
  for (let i = 1; i <= MAX_GOALS; i += 1) f[i] = f[i - 1] * i;
  return f;
})();

function ratingOf(team) {
  return TEAM_RATINGS[team] != null ? TEAM_RATINGS[team] : DEFAULT_RATING;
}

function clamp(x, lo, hi) {
  return Math.max(lo, Math.min(hi, x));
}

function poisson(k, lambda) {
  return (Math.exp(-lambda) * Math.pow(lambda, k)) / FACTORIALS[k];
}

// Une grosse équipe = au moins une des deux équipes a un effectif connu (squads.js).
function isBigMatch(match) {
  if (!match || match.test) return false;
  if (typeof SQUADS === "undefined") return false;
  return !!(SQUADS[match.h] || SQUADS[match.a]);
}

function lambdasFor(match) {
  let rh = ratingOf(match.h);
  let ra = ratingOf(match.a);
  if (match && match.test) {
    rh = ra = DEFAULT_RATING;
  }
  const lh = clamp(BASE_GOALS * Math.exp(K * (rh - ra)), 0.2, 4.2);
  const la = clamp(BASE_GOALS * Math.exp(K * (ra - rh)), 0.2, 4.2);
  return { lh, la };
}

function scoreMatrix(lh, la) {
  const m = [];
  for (let i = 0; i <= MAX_GOALS; i += 1) {
    m[i] = [];
    const ph = poisson(i, lh);
    for (let j = 0; j <= MAX_GOALS; j += 1) {
      m[i][j] = ph * poisson(j, la);
    }
  }
  return m;
}

function outcomeProbs(mtx) {
  let home = 0;
  let draw = 0;
  let away = 0;
  for (let i = 0; i <= MAX_GOALS; i += 1) {
    for (let j = 0; j <= MAX_GOALS; j += 1) {
      const p = mtx[i][j];
      if (i > j) home += p;
      else if (i < j) away += p;
      else draw += p;
    }
  }
  return { home, draw, away };
}

function overProb(mtx, threshold) {
  let over = 0;
  for (let i = 0; i <= MAX_GOALS; i += 1) {
    for (let j = 0; j <= MAX_GOALS; j += 1) {
      if (i + j > threshold) over += mtx[i][j];
    }
  }
  return over;
}

function toOdds(p) {
  if (!isFinite(p) || p <= 1 / MAX_ODDS) return MAX_ODDS;
  const o = (1 / p) / (1 + MARGIN);
  return Math.round(clamp(o, 1.04, MAX_ODDS) * 100) / 100;
}

function topExactScores(mtx, count) {
  const list = [];
  for (let i = 0; i <= 5; i += 1) {
    for (let j = 0; j <= 5; j += 1) {
      list.push({ i, j, p: mtx[i][j] });
    }
  }
  list.sort((a, b) => b.p - a.p);
  return list.slice(0, count);
}

function teamScorers(teamName, teamLambda) {
  if (typeof SQUADS === "undefined" || !SQUADS[teamName]) return [];
  const players = [];
  let totalW = 0;
  Object.entries(SQUADS[teamName].groups).forEach(([poste, arr]) => {
    const base = SCORER_WEIGHTS[poste] != null ? SCORER_WEIGHTS[poste] : 0.3;
    arr.forEach((p) => {
      const w = base * (STAR_SCORERS[p.name] || 1);
      players.push({ name: p.name, w });
      totalW += w;
    });
  });
  if (totalW <= 0) return [];
  return players
    .map((p) => {
      const mu = teamLambda * SCORER_SHARE * (p.w / totalW);
      return { name: p.name, team: teamName, prob: 1 - Math.exp(-mu) };
    })
    .sort((a, b) => b.prob - a.prob);
}

/* Construit le tableau des marchés d'un match.
 * Renvoie un tableau de marchés : { key, title, layout, selections: [{ sel, short, label, odds }] }
 *  - sel   : identifiant stable utilisé pour la résolution
 *  - short : texte du bouton
 *  - label : libellé complet conservé sur le pari (historique)
 */
// Applique les cotes forcées par l'admin (synchronisées). Une cote modifiée
// remplace la cote calculée et est marquée custom (pour l'affichage).
function applyOverrides(match, markets) {
  const getOv = window.CDM_getOddsOverride;
  if (!getOv || !match || match.id == null) return markets;
  markets.forEach((mkt) => {
    mkt.selections.forEach((s) => {
      const ov = getOv(match.id, mkt.key, s.sel);
      if (typeof ov === "number" && ov > 1) {
        s.odds = ov;
        s.custom = true;
      }
    });
  });
  return markets;
}

function getMarketBoard(match) {
  const { lh, la } = lambdasFor(match);
  const mtx = scoreMatrix(lh, la);
  const { home, draw, away } = outcomeProbs(mtx);
  const hName = match.h;
  const aName = match.a;

  const markets = [];

  // 1N2 — toujours présent
  markets.push({
    key: "1x2",
    title: "Résultat",
    layout: "grid",
    selections: [
      { sel: "home", short: hName, label: `${hName} gagne`, odds: toOdds(home) },
      { sel: "draw", short: "Nul", label: "Match nul", odds: toOdds(draw) },
      { sel: "away", short: aName, label: `${aName} gagne`, odds: toOdds(away) }
    ]
  });

  // Marchés enrichis : uniquement sur les matchs des grosses équipes
  if (!isBigMatch(match)) return applyOverrides(match, markets);

  // Double chance
  markets.push({
    key: "dc",
    title: "Double chance",
    layout: "grid",
    selections: [
      { sel: "1X", short: `${hName} ou nul`, label: `${hName} ou nul`, odds: toOdds(home + draw) },
      { sel: "12", short: "Pas de nul", label: `${hName} ou ${aName}`, odds: toOdds(home + away) },
      { sel: "X2", short: `${aName} ou nul`, label: `${aName} ou nul`, odds: toOdds(draw + away) }
    ]
  });

  // Plus / Moins de buts
  const ouSel = [];
  [1.5, 2.5, 3.5].forEach((t) => {
    const over = overProb(mtx, t);
    ouSel.push({ sel: `over_${t}`, short: `+${t}`, label: `Plus de ${t} buts`, odds: toOdds(over) });
    ouSel.push({ sel: `under_${t}`, short: `-${t}`, label: `Moins de ${t} buts`, odds: toOdds(1 - over) });
  });
  markets.push({ key: "ou", title: "Nombre de buts", layout: "grid", selections: ouSel });

  // Les deux équipes marquent
  const bttsYes = (1 - poisson(0, lh)) * (1 - poisson(0, la));
  markets.push({
    key: "btts",
    title: "Les deux équipes marquent",
    layout: "grid",
    selections: [
      { sel: "yes", short: "Oui", label: "Les deux marquent : oui", odds: toOdds(bttsYes) },
      { sel: "no", short: "Non", label: "Les deux marquent : non", odds: toOdds(1 - bttsYes) }
    ]
  });

  // Score exact (les plus probables)
  markets.push({
    key: "exact",
    title: "Score exact",
    layout: "row",
    selections: topExactScores(mtx, 8).map((s) => ({
      sel: `${s.i}-${s.j}`,
      short: `${s.i}-${s.j}`,
      label: `Score exact ${s.i}-${s.j}`,
      odds: toOdds(s.p)
    }))
  });

  // Buteur (un joueur marque dans le match) — pour les équipes avec effectif connu
  const scorerSel = [];
  [hName, aName].forEach((team, idx) => {
    teamScorers(team, idx === 0 ? lh : la)
      .slice(0, SCORERS_PER_TEAM)
      .forEach((p) => {
        scorerSel.push({
          sel: `but:${p.name}`,
          short: p.name,
          label: `Buteur : ${p.name}`,
          team,
          odds: toOdds(p.prob)
        });
      });
  });
  if (scorerSel.length) {
    markets.push({ key: "scorer", title: "Buteur dans le match", layout: "row", selections: scorerSel });
  }

  return applyOverrides(match, markets);
}

window.Odds = {
  isBigMatch,
  getMarketBoard,
  ratingOf,
  TEAM_RATINGS
};
