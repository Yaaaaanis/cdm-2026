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
   * Clé d'accès JSONBin en LECTURE SEULE (X-Access-Key).
   * Sans danger d'être publique : elle ne permet que de lire.
   * Crée-la sur jsonbin.io → API Keys → Access Keys (permission Read uniquement).
   * Sert à ce que tous les visiteurs puissent lire les scores partagés sans 401.
   */
  jsonBinReadKey: "",

  /**
   * Hash SHA-256 de ton mot de passe admin (en minuscules hex).
   * Génère-le en ouvrant la console sur le site (une fois) :
   *   await cdmHashPassword("ton-mot-de-passe-secret")
   */
  adminPasswordHash: "",

  /**
   * Classement des parieurs (Supabase).
   * L'URL et la clé "anon" sont PUBLIQUES par design (visibles dans le code).
   * Tu les trouves sur supabase.com → ton projet → Settings → API.
   *   supabaseUrl    = "Project URL"  (ex: https://xxxx.supabase.co)
   *   supabaseAnonKey = "anon public" key
   * Laisse vide tant que Supabase n'est pas configuré : le site marche sans, le
   * classement en ligne est juste désactivé.
   */
  supabaseUrl: "",
  supabaseAnonKey: "",

  /**
   * "Saison" du porte-monnaie. Change cette valeur pour remettre TOUT LE MONDE
   * à 100 pièces au prochain chargement (ex: "test-1" pendant les tests, puis
   * "reel-1" juste avant le coup d'envoi pour repartir propre).
   */
  walletEpoch: "test-1"
};
