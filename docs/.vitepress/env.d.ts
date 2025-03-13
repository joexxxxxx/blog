/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Add env variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
  readonly glob: <T>(pattern: string, options?: {
    eager?: boolean
    as?: string
    import?: string
    query?: Record<string, string>
  }) => T
}
