/* Phase à élimination directe — heures Paris (indicatif) */
const KNOCKOUT = [
  { phase: "16es", date: "2026-06-28", t: "21:00", label: "2e groupe A vs 2e groupe B" },
  { phase: "16es", date: "2026-06-29", t: "19:00", label: "1er groupe E vs 3e (A/B/C/D/F)" },
  { phase: "16es", date: "2026-06-29", t: "22:30", label: "1er groupe F vs 2e groupe C" },
  { phase: "16es", date: "2026-06-29", t: "02:00", label: "1er groupe C vs 2e groupe F" },
  { phase: "16es", date: "2026-06-30", t: "19:00", label: "1er groupe I vs 3e (C/D/F/G/H)" },
  { phase: "16es", date: "2026-06-30", t: "23:00", label: "2e groupe E vs 2e groupe I" },
  { phase: "16es", date: "2026-07-01", t: "03:00", label: "1er groupe A vs 3e (C/E/F/H/I)" },
  { phase: "16es", date: "2026-07-01", t: "18:00", label: "1er groupe L vs 3e (E/H/I/J/K)" },
  { phase: "16es", date: "2026-07-01", t: "22:00", label: "1er groupe D vs 3e (B/E/F/I/J)" },
  { phase: "16es", date: "2026-07-02", t: "02:00", label: "1er groupe G vs 3e (A/E/H/I/J)" },
  { phase: "16es", date: "2026-07-02", t: "21:00", label: "2e groupe K vs 2e groupe L" },
  { phase: "16es", date: "2026-07-03", t: "01:00", label: "1er groupe H vs 2e groupe J" },
  { phase: "16es", date: "2026-07-03", t: "05:00", label: "1er groupe B vs 3e (E/F/G/I/J)" },
  { phase: "16es", date: "2026-07-03", t: "20:00", label: "1er groupe J vs 2e groupe H" },
  { phase: "16es", date: "2026-07-04", t: "00:30", label: "1er groupe K vs 3e (D/E/I/J/L)" },
  { phase: "16es", date: "2026-07-04", t: "03:30", label: "2e groupe D vs 2e groupe G" },

  { phase: "8es", date: "2026-07-04", t: "19:00", label: "Vainqueur match 74 vs 77" },
  { phase: "8es", date: "2026-07-04", t: "23:00", label: "Vainqueur match 73 vs 75" },
  { phase: "8es", date: "2026-07-05", t: "22:00", label: "Vainqueur match 76 vs 78" },
  { phase: "8es", date: "2026-07-06", t: "02:00", label: "Vainqueur match 79 vs 80" },
  { phase: "8es", date: "2026-07-06", t: "21:00", label: "Vainqueur match 83 vs 84" },
  { phase: "8es", date: "2026-07-07", t: "02:00", label: "Vainqueur match 81 vs 82" },
  { phase: "8es", date: "2026-07-07", t: "18:00", label: "Vainqueur match 86 vs 88" },
  { phase: "8es", date: "2026-07-07", t: "22:00", label: "Vainqueur match 85 vs 87" },

  { phase: "qf", date: "2026-07-09", t: "22:00", label: "Vainqueur match 89 vs 90" },
  { phase: "qf", date: "2026-07-10", t: "21:00", label: "Vainqueur match 93 vs 94" },
  { phase: "qf", date: "2026-07-11", t: "23:00", label: "Vainqueur match 91 vs 92" },
  { phase: "qf", date: "2026-07-12", t: "03:00", label: "Vainqueur match 95 vs 96" },

  { phase: "df", date: "2026-07-14", t: "21:00", label: "Vainqueur match 97 vs 98" },
  { phase: "df", date: "2026-07-15", t: "21:00", label: "Vainqueur match 99 vs 100" },

  { phase: "3e", date: "2026-07-18", t: "23:00", label: "Perdant DF1 vs Perdant DF2" },
  { phase: "finale", date: "2026-07-19", t: "21:00", label: "🏆 GRANDE FINALE" }
];

const PHASE_LABELS = {
  "16es": "Seizièmes de finale",
  "8es": "Huitièmes de finale",
  qf: "Quarts de finale",
  df: "Demi-finales",
  "3e": "Match pour la 3e place",
  finale: "Finale"
};
