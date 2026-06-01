# Héberger sur GitHub Pages (avec classements partagés)

## Ce que ça fait

- **Toi (admin)** : tu te connectes avec un mot de passe, tu modifies les points → tout le monde les voit.
- **Ta sœur (visiteur)** : elle ouvre le même lien, elle **voit** les points, **sans** boutons +/− ni champs modifiables.

Les points sont stockés sur [JSONBin.io](https://jsonbin.io) (gratuit), pas dans le navigateur de chacun.

---

## 1. Créer le bac JSONBin

1. Crée un compte sur [jsonbin.io](https://jsonbin.io).
2. **Create Bin** → colle ce JSON initial :

```json
{
  "standings": {
  "A": { "Mexique": 0, "Afrique du Sud": 0, "Corée du Sud": 0, "République tchèque": 0 },
  "B": { "Canada": 0, "Qatar": 0, "Suisse": 0, "Bosnie-Herzégovine": 0 },
  "C": { "Brésil": 0, "Maroc": 0, "Haïti": 0, "Écosse": 0 },
  "D": { "États-Unis": 0, "Paraguay": 0, "Australie": 0, "Turquie": 0 },
  "E": { "Allemagne": 0, "Curaçao": 0, "Côte d'Ivoire": 0, "Équateur": 0 },
  "F": { "Pays-Bas": 0, "Japon": 0, "Suède": 0, "Tunisie": 0 },
  "G": { "Belgique": 0, "Égypte": 0, "Iran": 0, "Nouvelle-Zélande": 0 },
  "H": { "Espagne": 0, "Cap-Vert": 0, "Arabie saoudite": 0, "Uruguay": 0 },
  "I": { "France": 0, "Sénégal": 0, "Irak": 0, "Norvège": 0 },
  "J": { "Argentine": 0, "Algérie": 0, "Autriche": 0, "Jordanie": 0 },
  "K": { "Portugal": 0, "RD Congo": 0, "Ouzbékistan": 0, "Colombie": 0 },
  "L": { "Angleterre": 0, "Croatie": 0, "Ghana": 0, "Panama": 0 }
  },
  "scores": {}
}
```

*(L’ancien format sans `standings` / `scores` fonctionne encore.)*

3. Note l’**ID du bac** (ex. `67abc123e4b0...`).
4. Va dans **API Keys** et copie la **X-Master-Key** (clé secrète) — **ne la mets jamais dans GitHub**.

5. Sur le bac, active l’accès **public en lecture** si l’option existe (sinon la lecture via l’ID suffit en général).

---

## 2. Configurer le site

1. Ouvre `config.js` (copie de `config.example.js` si besoin).
2. Renseigne :

```javascript
window.CDM_CONFIG = {
  syncEnabled: true,
  jsonBinId: "TON_BIN_ID",
  adminPasswordHash: "LE_HASH_CI_DESSOUS"
};
```

3. **Mot de passe admin** : choisis un mot de passe fort (ex. une longue phrase que ta sœur ne connaît pas).

4. Génère le hash : ouvre `index.html` en local dans le navigateur, console (F12), tape :

```javascript
await cdmHashPassword("ton-mot-de-passe-secret")
```

Copie le résultat (64 caractères) dans `adminPasswordHash`.

---

## 3. Publier sur GitHub Pages

1. Crée un dépôt GitHub et pousse tout le dossier `CDM`.
2. **Settings** → **Pages** → Source : branche `main`, dossier `/ (root)`.
3. Le site sera à `https://TON-PSEUDO.github.io/NOM-DU-REPO/`

**Fichiers à pousser** : `index.html`, `style.css`, `script.js`, `sync.js`, `config.js`  
**Ne pousse jamais** la clé X-Master-Key dans un fichier.

---

## 4. Première connexion admin (sur ton PC)

1. Ouvre le site → onglet **Poules**.
2. Clique **Connexion admin** → entre ton mot de passe.
3. Colle la **X-Master-Key** JSONBin (une seule fois, elle reste dans ton navigateur).
4. Tu peux modifier les points ; ta sœeur verra les mêmes en actualisant la page.

Pour te déconnecter : **Verrouiller**.

---

## Sécurité (niveau « famille »)

- Ta sœur ne peut pas modifier sans le mot de passe + la clé JSONBin.
- Ce n’est pas une banque : quelqu’un de très technique pourrait tenter de contourner. Pour un usage familial, c’est largement suffisant.
- Utilise un **mot de passe admin solide** et ne le partage pas.

---

## Mode local (sans config)

Si `syncEnabled: false`, les points restent sur chaque appareil (comportement d’avant). **N’utilise pas ce mode** si tu partages le lien.
