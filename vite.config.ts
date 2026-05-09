// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Cloudflare disabled — deploying to Vercel instead.
// Setting ssr: false will generate a purely client-side SPA with an index.html
// which Vercel can serve natively without requiring a Node.js SSR server.
export default defineConfig({
  cloudflare: false,
});
