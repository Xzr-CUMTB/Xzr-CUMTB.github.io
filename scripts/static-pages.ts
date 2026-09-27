import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import type { Plugin } from "vite";
import { collections } from "../src/data/collections.ts";

// GitHub Pages has no SPA rewrite rule. Emit real entry files for each route,
// so a shared link or browser refresh returns HTTP 200 rather than a 404 hack.
export function staticPages(): Plugin {
  let output = "";
  return {
    name: "livehouse-static-page-entries",
    apply: "build",
    configResolved(config) {
      output = resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      const html = await readFile(resolve(output, "index.html"), "utf8");
      for (const collection of collections) {
        if (!/^[a-z]+(?:-[a-z]+)*$/.test(collection.id)) {
          throw new Error(`Invalid static route: ${collection.id}`);
        }
        const directory = resolve(output, collection.id);
        await mkdir(directory, { recursive: true });
        await writeFile(
          resolve(directory, "index.html"),
          html.replace(/<title>.*?<\/title>/s, `<title>${collection.title} · Xu Zirui Digital Livehouse</title>`),
        );
      }
      await writeFile(resolve(output, "404.html"), html);
      await writeFile(resolve(output, ".nojekyll"), "");
    },
  };
}
