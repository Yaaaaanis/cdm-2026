/**
 * Copie ce fichier en config.js et remplis les valeurs.
 * Ne mets JAMAIS la clé secrète JSONBin ici — elle reste dans ton navigateur après connexion admin.
 */
window.CDM_CONFIG = {
  /** Passe à true une fois JSONBin configuré (voir README-HEBERGEMENT.md) */
  syncEnabled: false,

  /** ID du bac JSONBin (visible publiquement, c’est normal) */
  jsonBinId: "TON_BIN_ID_ICI",

  /**
   * Hash SHA-256 de ton mot de passe admin (en minuscules hex).
   * Génère-le en ouvrant la console sur le site (une fois) :
   *   await cdmHashPassword("ton-mot-de-passe-secret")
   */
  adminPasswordHash: ""
};
