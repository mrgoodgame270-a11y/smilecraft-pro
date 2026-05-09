// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Cloudflare disabled — deploying to Vercel instead.
// The "vercel" preset tells nitropack (used by TanStack Start) to emit
// Vercel-compatible serverless output (.vercel/output).
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: { entry: "server", preset: "vercel" },
  },
});
