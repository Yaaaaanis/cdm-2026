/* Stades et villes des matchs de poules — Coupe du monde 2026
 * Source : calendrier officiel FIFA 2026 (16 sites, USA/Canada/Mexique).
 * "local" = heure locale du coup d'envoi au stade. (m.t reste l'heure de Paris.)
 */
const STADIUMS = {
  "Estadio Azteca": { city: "Mexico", country: "Mexique", flag: "🇲🇽" },
  "Estadio Akron": { city: "Guadalajara", country: "Mexique", flag: "🇲🇽" },
  "Estadio BBVA": { city: "Monterrey", country: "Mexique", flag: "🇲🇽" },
  "BMO Field": { city: "Toronto", country: "Canada", flag: "🇨🇦" },
  "BC Place": { city: "Vancouver", country: "Canada", flag: "🇨🇦" },
  "SoFi Stadium": { city: "Los Angeles", country: "États-Unis", flag: "🇺🇸" },
  "MetLife Stadium": { city: "New York", country: "États-Unis", flag: "🇺🇸" },
  "Gillette Stadium": { city: "Boston", country: "États-Unis", flag: "🇺🇸" },
  "Lincoln Financial Field": { city: "Philadelphie", country: "États-Unis", flag: "🇺🇸" },
  "NRG Stadium": { city: "Houston", country: "États-Unis", flag: "🇺🇸" },
  "AT&T Stadium": { city: "Dallas", country: "États-Unis", flag: "🇺🇸" },
  "Levi's Stadium": { city: "San Francisco", country: "États-Unis", flag: "🇺🇸" },
  "Hard Rock Stadium": { city: "Miami", country: "États-Unis", flag: "🇺🇸" },
  "Mercedes-Benz Stadium": { city: "Atlanta", country: "États-Unis", flag: "🇺🇸" },
  "Lumen Field": { city: "Seattle", country: "États-Unis", flag: "🇺🇸" },
  "Arrowhead Stadium": { city: "Kansas City", country: "États-Unis", flag: "🇺🇸" }
};

// Clé = "domicile|extérieur" (mêmes libellés que le calendrier). Valeur = [stade, heure locale].
const MATCH_VENUES = {
  // Journée 1
  "Mexique|Afrique du Sud": ["Estadio Azteca", "13:00"],
  "Corée du Sud|République tchèque": ["Estadio Akron", "20:00"],
  "Canada|Bosnie-Herzégovine": ["BMO Field", "15:00"],
  "États-Unis|Paraguay": ["SoFi Stadium", "18:00"],
  "Qatar|Suisse": ["Levi's Stadium", "12:00"],
  "Brésil|Maroc": ["MetLife Stadium", "18:00"],
  "Haïti|Écosse": ["Gillette Stadium", "21:00"],
  "Australie|Turquie": ["BC Place", "21:00"],
  "Allemagne|Curaçao": ["NRG Stadium", "12:00"],
  "Pays-Bas|Japon": ["AT&T Stadium", "15:00"],
  "Côte d'Ivoire|Équateur": ["Lincoln Financial Field", "19:00"],
  "Suède|Tunisie": ["Estadio BBVA", "20:00"],
  "Espagne|Cap-Vert": ["Mercedes-Benz Stadium", "12:00"],
  "Belgique|Égypte": ["Lumen Field", "12:00"],
  "Arabie saoudite|Uruguay": ["Hard Rock Stadium", "18:00"],
  "Iran|Nouvelle-Zélande": ["SoFi Stadium", "18:00"],
  "France|Sénégal": ["MetLife Stadium", "15:00"],
  "Irak|Norvège": ["Gillette Stadium", "18:00"],
  "Argentine|Algérie": ["Arrowhead Stadium", "20:00"],
  "Autriche|Jordanie": ["Levi's Stadium", "21:00"],
  "Portugal|RD Congo": ["NRG Stadium", "12:00"],
  "Angleterre|Croatie": ["AT&T Stadium", "15:00"],
  "Ghana|Panama": ["BMO Field", "19:00"],
  "Ouzbékistan|Colombie": ["Estadio Azteca", "20:00"],

  // Journée 2
  "République tchèque|Afrique du Sud": ["Mercedes-Benz Stadium", "12:00"],
  "Suisse|Bosnie-Herzégovine": ["SoFi Stadium", "12:00"],
  "Canada|Qatar": ["BC Place", "15:00"],
  "Mexique|Corée du Sud": ["Estadio Akron", "19:00"],
  "États-Unis|Australie": ["Lumen Field", "12:00"],
  "Écosse|Maroc": ["Gillette Stadium", "18:00"],
  "Brésil|Haïti": ["Lincoln Financial Field", "21:00"],
  "Turquie|Paraguay": ["Levi's Stadium", "20:00"],
  "Pays-Bas|Suède": ["NRG Stadium", "12:00"],
  "Allemagne|Côte d'Ivoire": ["BMO Field", "16:00"],
  "Équateur|Curaçao": ["Arrowhead Stadium", "19:00"],
  "Tunisie|Japon": ["Estadio BBVA", "22:00"],
  "Espagne|Arabie saoudite": ["Mercedes-Benz Stadium", "12:00"],
  "Belgique|Iran": ["SoFi Stadium", "12:00"],
  "Uruguay|Cap-Vert": ["Hard Rock Stadium", "18:00"],
  "Nouvelle-Zélande|Égypte": ["BC Place", "18:00"],
  "Argentine|Autriche": ["AT&T Stadium", "12:00"],
  "France|Irak": ["Lincoln Financial Field", "17:00"],
  "Norvège|Sénégal": ["MetLife Stadium", "20:00"],
  "Jordanie|Algérie": ["Levi's Stadium", "20:00"],
  "Portugal|Ouzbékistan": ["NRG Stadium", "12:00"],
  "Angleterre|Ghana": ["Gillette Stadium", "16:00"],
  "Panama|Croatie": ["BMO Field", "19:00"],
  "Colombie|RD Congo": ["Estadio Akron", "20:00"],

  // Journée 3
  "Suisse|Canada": ["BC Place", "12:00"],
  "Bosnie-Herzégovine|Qatar": ["Lumen Field", "12:00"],
  "Écosse|Brésil": ["Hard Rock Stadium", "18:00"],
  "Maroc|Haïti": ["Mercedes-Benz Stadium", "18:00"],
  "République tchèque|Mexique": ["Estadio Azteca", "19:00"],
  "Afrique du Sud|Corée du Sud": ["Estadio BBVA", "19:00"],
  "Équateur|Allemagne": ["MetLife Stadium", "16:00"],
  "Curaçao|Côte d'Ivoire": ["Lincoln Financial Field", "16:00"],
  "Tunisie|Pays-Bas": ["Arrowhead Stadium", "18:00"],
  "Japon|Suède": ["AT&T Stadium", "18:00"],
  "Turquie|États-Unis": ["SoFi Stadium", "19:00"],
  "Paraguay|Australie": ["Levi's Stadium", "19:00"],
  "Norvège|France": ["Gillette Stadium", "15:00"],
  "Sénégal|Irak": ["BMO Field", "15:00"],
  "Uruguay|Espagne": ["Estadio Akron", "18:00"],
  "Cap-Vert|Arabie saoudite": ["NRG Stadium", "19:00"],
  "Nouvelle-Zélande|Belgique": ["BC Place", "20:00"],
  "Égypte|Iran": ["Lumen Field", "20:00"],
  "Panama|Angleterre": ["MetLife Stadium", "17:00"],
  "Croatie|Ghana": ["Lincoln Financial Field", "17:00"],
  "Colombie|Portugal": ["Hard Rock Stadium", "19:30"],
  "RD Congo|Ouzbékistan": ["Mercedes-Benz Stadium", "19:30"],
  "Jordanie|Argentine": ["AT&T Stadium", "21:00"],
  "Algérie|Autriche": ["Arrowhead Stadium", "21:00"]
};

function venueFor(m) {
  if (!m) return null;
  const v = MATCH_VENUES[`${m.h}|${m.a}`];
  if (!v) return null;
  const st = STADIUMS[v[0]] || {};
  return {
    stadium: v[0],
    local: v[1],
    city: st.city || "",
    country: st.country || "",
    flag: st.flag || ""
  };
}

window.Venues = { venueFor, STADIUMS, MATCH_VENUES };
