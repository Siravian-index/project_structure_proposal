import z from "zod"

// https://vitejs.dev/guide/env-and-mode
export const schema = z.object({
  // custom variables
  VITE_BASE_API_URL: z.string(),
  VITE_AZURE_AD_CLIENT_ID: z.string(),
  VITE_AZURE_AD_TENANT_ID: z.string(),

  // vite default env variables
  BASE_URL: z.string(),
  DEV: z.boolean(),
  MODE: z.string(),
  PROD: z.boolean(),
  SSR: z.boolean(),
})
