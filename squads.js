/* Effectifs officiels Coupe du monde 2026
 * Sources : FFF, FRMF, FPF, CBF, AFA, RFEF, DFB, The FA, KNVB (mai 2026).
 * Format : SQUADS[nomEquipe] = { coach, announceDate, groups: { poste: [{ name, club }, ...] } }
 * Les liens Transfermarkt/Footmercato sont générés à la volée via playerLinks().
 */
const SQUADS = {
  "France": {
    coach: "Didier Deschamps",
    announceDate: "2026-05-14",
    groups: {
      "Gardiens": [
        { name: "Mike Maignan", club: "AC Milan" },
        { name: "Robin Risser", club: "RC Lens" },
        { name: "Brice Samba", club: "Stade Rennais" }
      ],
      "Défenseurs": [
        { name: "Lucas Digne", club: "Aston Villa" },
        { name: "Malo Gusto", club: "Chelsea" },
        { name: "Lucas Hernandez", club: "Paris Saint-Germain" },
        { name: "Théo Hernandez", club: "Al-Hilal" },
        { name: "Ibrahima Konaté", club: "Liverpool" },
        { name: "Jules Koundé", club: "FC Barcelone" },
        { name: "Maxence Lacroix", club: "Crystal Palace" },
        { name: "William Saliba", club: "Arsenal" },
        { name: "Dayot Upamecano", club: "Bayern Munich" }
      ],
      "Milieux": [
        { name: "N'Golo Kanté", club: "Fenerbahçe" },
        { name: "Manu Koné", club: "AS Rome" },
        { name: "Adrien Rabiot", club: "AC Milan" },
        { name: "Aurélien Tchouaméni", club: "Real Madrid" },
        { name: "Warren Zaïre-Emery", club: "Paris Saint-Germain" }
      ],
      "Attaquants": [
        { name: "Maghnes Akliouche", club: "AS Monaco" },
        { name: "Bradley Barcola", club: "Paris Saint-Germain" },
        { name: "Rayan Cherki", club: "Manchester City" },
        { name: "Ousmane Dembélé", club: "Paris Saint-Germain" },
        { name: "Désiré Doué", club: "Paris Saint-Germain" },
        { name: "Jean-Philippe Mateta", club: "Crystal Palace" },
        { name: "Kylian Mbappé", club: "Real Madrid" },
        { name: "Michael Olise", club: "Bayern Munich" },
        { name: "Marcus Thuram", club: "Inter Milan" }
      ]
    }
  },

  "Maroc": {
    coach: "Mohamed Ouahbi",
    announceDate: "2026-05-26",
    groups: {
      "Gardiens": [
        { name: "Yassine Bounou", club: "Al-Hilal" },
        { name: "Munir El Kajoui", club: "RS Berkane" },
        { name: "Ahmed Reda Tagnaouti", club: "AS FAR" }
      ],
      "Défenseurs": [
        { name: "Noussair Mazraoui", club: "Manchester United" },
        { name: "Anass Salah-Eddine", club: "PSV Eindhoven" },
        { name: "Youssef Belammari", club: "Al Ahly" },
        { name: "Achraf Hakimi", club: "Paris Saint-Germain" },
        { name: "Zakaria El Ouahdi", club: "KRC Genk" },
        { name: "Nayef Aguerd", club: "Olympique de Marseille" },
        { name: "Chadi Riad", club: "Crystal Palace" },
        { name: "Redouane Halhal", club: "KV Mechelen" },
        { name: "Issa Diop", club: "Fulham" }
      ],
      "Milieux": [
        { name: "Samir El Mourabet", club: "RC Strasbourg" },
        { name: "Ayyoub Bouaddi", club: "LOSC Lille" },
        { name: "Neil El Aynaoui", club: "AS Rome" },
        { name: "Sofyan Amrabat", club: "Real Betis" },
        { name: "Azzedine Ounahi", club: "Girona FC" },
        { name: "Bilal El Khannouss", club: "VfB Stuttgart" },
        { name: "Ismaël Saibari", club: "PSV Eindhoven" }
      ],
      "Attaquants": [
        { name: "Abdessamad Ezzalzouli", club: "Real Betis" },
        { name: "Chemsdine Talbi", club: "Sunderland" },
        { name: "Soufiane Rahimi", club: "Al Ain" },
        { name: "Ayoub El Kaabi", club: "Olympiakos" },
        { name: "Brahim Diaz", club: "Real Madrid" },
        { name: "Yassine Gessime", club: "RC Strasbourg" },
        { name: "Ayoube Amaimouni", club: "Eintracht Francfort" }
      ]
    }
  },

  "Portugal": {
    coach: "Roberto Martínez",
    announceDate: "2026-05-19",
    note: "27 joueurs (dérogation FIFA — 4 gardiens)",
    groups: {
      "Gardiens": [
        { name: "Diogo Costa", club: "FC Porto" },
        { name: "José Sá", club: "Wolverhampton" },
        { name: "Rui Silva", club: "Sporting CP" },
        { name: "Ricardo Velho", club: "Gençlerbirliği Ankara" }
      ],
      "Défenseurs": [
        { name: "Diogo Dalot", club: "Manchester United" },
        { name: "Matheus Nunes", club: "Manchester City" },
        { name: "Nélson Semedo", club: "Fenerbahçe" },
        { name: "João Cancelo", club: "FC Barcelone" },
        { name: "Nuno Mendes", club: "Paris Saint-Germain" },
        { name: "Gonçalo Inácio", club: "Sporting CP" },
        { name: "Renato Veiga", club: "Villarreal" },
        { name: "Rúben Dias", club: "Manchester City" },
        { name: "Tomás Araújo", club: "SL Benfica" }
      ],
      "Milieux": [
        { name: "Rúben Neves", club: "Al-Hilal" },
        { name: "Samu Costa", club: "RCD Mallorca" },
        { name: "João Neves", club: "Paris Saint-Germain" },
        { name: "Vitinha", club: "Paris Saint-Germain" },
        { name: "Bruno Fernandes", club: "Manchester United" },
        { name: "Bernardo Silva", club: "Manchester City" }
      ],
      "Attaquants": [
        { name: "João Félix", club: "Al-Nassr" },
        { name: "Francisco Trincão", club: "Sporting CP" },
        { name: "Francisco Conceição", club: "Juventus" },
        { name: "Pedro Neto", club: "Chelsea" },
        { name: "Rafael Leão", club: "AC Milan" },
        { name: "Gonçalo Guedes", club: "Real Sociedad" },
        { name: "Gonçalo Ramos", club: "Paris Saint-Germain" },
        { name: "Cristiano Ronaldo", club: "Al-Nassr" }
      ]
    }
  },

  "Brésil": {
    coach: "Carlo Ancelotti",
    announceDate: "2026-05-18",
    groups: {
      "Gardiens": [
        { name: "Alisson", club: "Liverpool" },
        { name: "Ederson", club: "Fenerbahçe" },
        { name: "Weverton", club: "Grêmio" }
      ],
      "Défenseurs": [
        { name: "Alex Sandro", club: "Flamengo" },
        { name: "Bremer", club: "Juventus" },
        { name: "Danilo", club: "Flamengo" },
        { name: "Douglas Santos", club: "Zenit" },
        { name: "Gabriel Magalhães", club: "Arsenal" },
        { name: "Roger Ibañez", club: "Al-Ahli" },
        { name: "Léo Pereira", club: "Flamengo" },
        { name: "Marquinhos", club: "Paris Saint-Germain" },
        { name: "Wesley", club: "AS Rome" }
      ],
      "Milieux": [
        { name: "Bruno Guimarães", club: "Newcastle United" },
        { name: "Casemiro", club: "Manchester United" },
        { name: "Danilo Santos", club: "Botafogo" },
        { name: "Fabinho", club: "Al-Ittihad" },
        { name: "Lucas Paquetá", club: "Flamengo" }
      ],
      "Attaquants": [
        { name: "Endrick", club: "Olympique Lyonnais" },
        { name: "Gabriel Martinelli", club: "Arsenal" },
        { name: "Igor Thiago", club: "Brentford" },
        { name: "Luiz Henrique", club: "Zenit" },
        { name: "Matheus Cunha", club: "Manchester United" },
        { name: "Neymar Jr", club: "Santos" },
        { name: "Raphinha", club: "FC Barcelone" },
        { name: "Rayan", club: "Bournemouth" },
        { name: "Vinicius Jr", club: "Real Madrid" }
      ]
    }
  },

  "Argentine": {
    coach: "Lionel Scaloni",
    announceDate: "2026-05-28",
    groups: {
      "Gardiens": [
        { name: "Emiliano Martínez", club: "Aston Villa" },
        { name: "Gerónimo Rulli", club: "Olympique de Marseille" },
        { name: "Juan Musso", club: "Atlético de Madrid" }
      ],
      "Défenseurs": [
        { name: "Gonzalo Montiel", club: "River Plate" },
        { name: "Nahuel Molina", club: "Atlético de Madrid" },
        { name: "Lisandro Martínez", club: "Manchester United" },
        { name: "Nicolás Otamendi", club: "SL Benfica" },
        { name: "Cristian Romero", club: "Tottenham Hotspur" },
        { name: "Leonardo Balerdi", club: "Olympique de Marseille" },
        { name: "Facundo Medina", club: "Olympique de Marseille" },
        { name: "Nicolás Tagliafico", club: "Olympique Lyonnais" }
      ],
      "Milieux": [
        { name: "Leandro Paredes", club: "Boca Juniors" },
        { name: "Rodrigo De Paul", club: "Inter Miami" },
        { name: "Exequiel Palacios", club: "Bayer Leverkusen" },
        { name: "Enzo Fernández", club: "Chelsea" },
        { name: "Alexis Mac Allister", club: "Liverpool" },
        { name: "Giovani Lo Celso", club: "Real Betis" },
        { name: "Valentín Barco", club: "RC Strasbourg" }
      ],
      "Attaquants": [
        { name: "Lionel Messi", club: "Inter Miami" },
        { name: "Julián Álvarez", club: "Atlético de Madrid" },
        { name: "Lautaro Martínez", club: "Inter Milan" },
        { name: "Nicolás González", club: "Atlético de Madrid" },
        { name: "Thiago Almada", club: "Olympique Lyonnais" },
        { name: "Giuliano Simeone", club: "Atlético de Madrid" },
        { name: "Nicolás Paz", club: "Como 1907" },
        { name: "José Manuel López", club: "Palmeiras" }
      ]
    }
  },

  "Espagne": {
    coach: "Luis de la Fuente",
    announceDate: "2026-05-25",
    groups: {
      "Gardiens": [
        { name: "Unai Simón", club: "Athletic Club" },
        { name: "David Raya", club: "Arsenal" },
        { name: "Joan García", club: "FC Barcelone" }
      ],
      "Défenseurs": [
        { name: "Marc Cucurella", club: "Chelsea" },
        { name: "Alejandro Grimaldo", club: "Bayer Leverkusen" },
        { name: "Pau Cubarsí", club: "FC Barcelone" },
        { name: "Aymeric Laporte", club: "Athletic Club" },
        { name: "Marc Pubill", club: "Atlético de Madrid" },
        { name: "Eric García", club: "FC Barcelone" },
        { name: "Marcos Llorente", club: "Atlético de Madrid" },
        { name: "Pedro Porro", club: "Tottenham Hotspur" }
      ],
      "Milieux": [
        { name: "Pedri", club: "FC Barcelone" },
        { name: "Fabián Ruiz", club: "Paris Saint-Germain" },
        { name: "Martín Zubimendi", club: "Arsenal" },
        { name: "Gavi", club: "FC Barcelone" },
        { name: "Rodri", club: "Manchester City" },
        { name: "Álex Baena", club: "Atlético de Madrid" },
        { name: "Mikel Merino", club: "Arsenal" }
      ],
      "Attaquants": [
        { name: "Mikel Oyarzabal", club: "Real Sociedad" },
        { name: "Dani Olmo", club: "FC Barcelone" },
        { name: "Nico Williams", club: "Athletic Club" },
        { name: "Yéremy Pino", club: "Crystal Palace" },
        { name: "Ferran Torres", club: "FC Barcelone" },
        { name: "Borja Iglesias", club: "Celta Vigo" },
        { name: "Víctor Muñoz", club: "CA Osasuna" },
        { name: "Lamine Yamal", club: "FC Barcelone" }
      ]
    }
  },

  "Allemagne": {
    coach: "Julian Nagelsmann",
    announceDate: "2026-05-21",
    groups: {
      "Gardiens": [
        { name: "Manuel Neuer", club: "Bayern Munich" },
        { name: "Alexander Nübel", club: "VfB Stuttgart" },
        { name: "Oliver Baumann", club: "TSG Hoffenheim" }
      ],
      "Défenseurs": [
        { name: "Joshua Kimmich", club: "Bayern Munich" },
        { name: "Nico Schlotterbeck", club: "Borussia Dortmund" },
        { name: "Jonathan Tah", club: "Bayern Munich" },
        { name: "David Raum", club: "RB Leipzig" },
        { name: "Waldemar Anton", club: "Borussia Dortmund" },
        { name: "Nathaniel Brown", club: "Eintracht Francfort" },
        { name: "Antonio Rüdiger", club: "Real Madrid" },
        { name: "Malick Thiaw", club: "Newcastle United" }
      ],
      "Milieux": [
        { name: "Pascal Groß", club: "Brighton & Hove Albion" },
        { name: "Jamal Musiala", club: "Bayern Munich" },
        { name: "Florian Wirtz", club: "Liverpool" },
        { name: "Jamie Leweling", club: "VfB Stuttgart" },
        { name: "Lennart Karl", club: "Bayern Munich" },
        { name: "Angelo Stiller", club: "VfB Stuttgart" },
        { name: "Felix Nmecha", club: "Borussia Dortmund" },
        { name: "Leon Goretzka", club: "Bayern Munich" },
        { name: "Aleksandar Pavlović", club: "Bayern Munich" },
        { name: "Nadiem Amiri", club: "Mainz 05" }
      ],
      "Attaquants": [
        { name: "Deniz Undav", club: "VfB Stuttgart" },
        { name: "Kai Havertz", club: "Arsenal" },
        { name: "Nick Woltemade", club: "Newcastle United" },
        { name: "Maximilian Beier", club: "Borussia Dortmund" },
        { name: "Leroy Sané", club: "Galatasaray" }
      ]
    }
  },

  "Angleterre": {
    coach: "Thomas Tuchel",
    announceDate: "2026-05-22",
    groups: {
      "Gardiens": [
        { name: "Dean Henderson", club: "Crystal Palace" },
        { name: "Jordan Pickford", club: "Everton" },
        { name: "James Trafford", club: "Manchester City" }
      ],
      "Défenseurs": [
        { name: "Dan Burn", club: "Newcastle United" },
        { name: "Marc Guéhi", club: "Manchester City" },
        { name: "Reece James", club: "Chelsea" },
        { name: "Ezri Konsa", club: "Aston Villa" },
        { name: "Tino Livramento", club: "Newcastle United" },
        { name: "Nico O'Reilly", club: "Manchester City" },
        { name: "Jarell Quansah", club: "Bayer Leverkusen" },
        { name: "Djed Spence", club: "Tottenham Hotspur" },
        { name: "John Stones", club: "Manchester City" }
      ],
      "Milieux": [
        { name: "Elliot Anderson", club: "Nottingham Forest" },
        { name: "Jude Bellingham", club: "Real Madrid" },
        { name: "Eberechi Eze", club: "Arsenal" },
        { name: "Jordan Henderson", club: "Brentford" },
        { name: "Kobbie Mainoo", club: "Manchester United" },
        { name: "Declan Rice", club: "Arsenal" },
        { name: "Morgan Rogers", club: "Aston Villa" }
      ],
      "Attaquants": [
        { name: "Anthony Gordon", club: "Newcastle United" },
        { name: "Harry Kane", club: "Bayern Munich" },
        { name: "Noni Madueke", club: "Arsenal" },
        { name: "Marcus Rashford", club: "FC Barcelone (prêt)" },
        { name: "Bukayo Saka", club: "Arsenal" },
        { name: "Ivan Toney", club: "Al-Ahli" },
        { name: "Ollie Watkins", club: "Aston Villa" }
      ]
    }
  },

  "Pays-Bas": {
    coach: "Ronald Koeman",
    announceDate: "2026-05-27",
    groups: {
      "Gardiens": [
        { name: "Bart Verbruggen", club: "Brighton & Hove Albion" },
        { name: "Mark Flekken", club: "Bayer Leverkusen" },
        { name: "Robin Roefs", club: "Sunderland" }
      ],
      "Défenseurs": [
        { name: "Nathan Aké", club: "Manchester City" },
        { name: "Virgil van Dijk", club: "Liverpool" },
        { name: "Denzel Dumfries", club: "Inter Milan" },
        { name: "Jorrel Hato", club: "Chelsea" },
        { name: "Jan Paul van Hecke", club: "Brighton & Hove Albion" },
        { name: "Jurriën Timber", club: "Arsenal" },
        { name: "Micky van de Ven", club: "Tottenham Hotspur" }
      ],
      "Milieux": [
        { name: "Frenkie de Jong", club: "FC Barcelone" },
        { name: "Ryan Gravenberch", club: "Liverpool" },
        { name: "Justin Kluivert", club: "AFC Bournemouth" },
        { name: "Teun Koopmeiners", club: "Juventus" },
        { name: "Tijjani Reijnders", club: "Manchester City" },
        { name: "Marten de Roon", club: "Atalanta" },
        { name: "Guus Til", club: "PSV Eindhoven" },
        { name: "Quinten Timber", club: "Olympique de Marseille" },
        { name: "Mats Wieffer", club: "Brighton & Hove Albion" }
      ],
      "Attaquants": [
        { name: "Brian Brobbey", club: "Sunderland" },
        { name: "Memphis Depay", club: "Corinthians" },
        { name: "Cody Gakpo", club: "Liverpool" },
        { name: "Noa Lang", club: "Galatasaray" },
        { name: "Donyell Malen", club: "AS Rome" },
        { name: "Crysencio Summerville", club: "West Ham United" },
        { name: "Wout Weghorst", club: "Ajax" }
      ]
    }
  }
};

function playerLinks(name) {
  const q = encodeURIComponent(name);
  return {
    tm: `https://www.transfermarkt.fr/schnellsuche/ergebnis/schnellsuche?query=${q}`,
    fm: `https://www.footmercato.net/recherche/?q=${q}`
  };
}

function hasSquad(team) {
  return !!SQUADS[team];
}
