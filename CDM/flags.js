const FLAGS = {
  "Mexique": "🇲🇽",
  "Afrique du Sud": "🇿🇦",
  "Corée du Sud": "🇰🇷",
  "République tchèque": "🇨🇿",
  "Canada": "🇨🇦",
  "Qatar": "🇶🇦",
  "Suisse": "🇨🇭",
  "Bosnie-Herzégovine": "🇧🇦",
  "Brésil": "🇧🇷",
  "Maroc": "🇲🇦",
  "Haïti": "🇭🇹",
  "Écosse": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  "États-Unis": "🇺🇸",
  "Paraguay": "🇵🇾",
  "Australie": "🇦🇺",
  "Turquie": "🇹🇷",
  "Allemagne": "🇩🇪",
  "Curaçao": "🇨🇼",
  "Côte d'Ivoire": "🇨🇮",
  "Équateur": "🇪🇨",
  "Pays-Bas": "🇳🇱",
  "Japon": "🇯🇵",
  "Suède": "🇸🇪",
  "Tunisie": "🇹🇳",
  "Belgique": "🇧🇪",
  "Égypte": "🇪🇬",
  "Iran": "🇮🇷",
  "Nouvelle-Zélande": "🇳🇿",
  "Espagne": "🇪🇸",
  "Cap-Vert": "🇨🇻",
  "Arabie saoudite": "🇸🇦",
  "Uruguay": "🇺🇾",
  "France": "🇫🇷",
  "Sénégal": "🇸🇳",
  "Irak": "🇮🇶",
  "Norvège": "🇳🇴",
  "Argentine": "🇦🇷",
  "Algérie": "🇩🇿",
  "Autriche": "🇦🇹",
  "Jordanie": "🇯🇴",
  "Portugal": "🇵🇹",
  "RD Congo": "🇨🇩",
  "Ouzbékistan": "🇺🇿",
  "Colombie": "🇨🇴",
  "Angleterre": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  "Croatie": "🇭🇷",
  "Ghana": "🇬🇭",
  "Panama": "🇵🇦"
};

function flag(team) {
  return FLAGS[team] || "🏳️";
}

function teamLabel(team) {
  return `${flag(team)} ${team}`;
}
