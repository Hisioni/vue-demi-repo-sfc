import { resolve } from "path";
import { isVue2 } from "vue-demi";
import { defineConfig } from "vite";

export const defaultPlugins = [];

export const baseBuildConfig = defineConfig({
  build: {
    outDir: resolve(__dirname, `dist/${isVue2 ? "v2" : "v3"}`),
    lib: {
      entry: resolve(__dirname, "packages/vue-demi-repo-sfc/index.ts"),
      name: "VueDemiRepoSfc",
      formats: ["cjs", "es"],
      fileName: (format) => `index.${format === "es" ? "mjs" : "cjs"}`,
    },
    rollupOptions: {
      external: ["vue", "vue-demi"],
      output: {
        globals: {
          vue: "Vue",
          "vue-demi": "VueDemi",
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ["vue-demi"],
  },
});
