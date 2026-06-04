/** Mode local — active la synchro après configuration (voir README-HEBERGEMENT.md) */
window.CDM_CONFIG = {
  syncEnabled: true,
  jsonBinId: "6a1dfb3ef5f4af5e29aa0ce9",
  adminPasswordHash: "11c0010656d79c859bbc2231d6bd7d14522ec246c3e4b7b57b04403d9d1793b5",

  // Clé d'accès JSONBin en LECTURE SEULE (sans danger d'être publique).
  // Permet à tous les visiteurs de lire les scores/classements partagés.
  jsonBinReadKey: "$2a$10$6.GMatwdc5b3c3XbOSGaLeBSEBMtNC69HYwsFG0WRaJRRYCSZkN8e",

  // Classement des parieurs (Supabase).
  supabaseUrl: "https://louhbfhvwbkpfwpibows.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvdWhiZmh2d2JrcGZ3cGlib3dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1MDg0MzIsImV4cCI6MjA5NjA4NDQzMn0.rjR9lmbMCod9FLGiyXWTicie8rx7ndmKv9i4in7N8lU",

  // Change cette valeur pour remettre tout le monde à 100 pièces.
  walletEpoch: "test-1"
};
