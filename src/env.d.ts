/// <reference types="astro/client" />

declare namespace NodeJS {
  interface ProcessEnv {
    PUBLIC_SUPABASE_URL: string
    PUBLIC_SUPABASE_ANON_KEY: string
  }
}

declare interface ImportMetaEnv {
  readonly PUBLIC_SUPABASE_URL: string
  readonly PUBLIC_SUPABASE_ANON_KEY: string
  [key: string]: string | undefined
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}