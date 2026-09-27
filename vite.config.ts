import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { staticPages } from "./scripts/static-pages.ts";
export default defineConfig({
  plugins: [react(), staticPages()],
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  server: { port: 3000, strictPort: true, host: "127.0.0.1" },
  preview: { port: 3000, strictPort: true, host: "127.0.0.1" },
});
