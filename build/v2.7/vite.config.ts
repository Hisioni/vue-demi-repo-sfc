import { defineConfig, UserConfig } from "vite";
import { resolve } from "path";
import vue2_7 from "@vitejs/plugin-vue2";
import compiler from "@vue/compiler-sfc";
import { baseBuildConfig, defaultPlugins } from "../../vite.base.config";

const absPath = (path: string) => resolve(__dirname, path);

export default defineConfig({
  plugins: [
    vue2_7({
      compiler,
    }),
    ...defaultPlugins,
  ],
  resolve: {
    alias: {
      "vue-demi": resolve(
        __dirname,
        "../../node_modules/vue-demi/lib/v2.7/index.mjs"
      ),
    },
  },
  ...baseBuildConfig,
  build: {
    ...(baseBuildConfig as UserConfig).build,
    outDir: resolve(__dirname, "../../dist/v2.7"),
  },
});
