interface ImportMetaEnv {
  readonly VITE_USERNAME: string;
  readonly VITE_API_GAME_SCORE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
