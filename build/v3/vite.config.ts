import { defineConfig } from "vite";
import { resolve } from "path";
import vue3 from "@vitejs/plugin-vue";
import compiler from "@vue/compiler-sfc";
import { baseBuildConfig, defaultPlugins } from "../../vite.base.config";

export default defineConfig({
  plugins: [
    vue3({
      compiler,
    }),
    ...defaultPlugins,
  ],
  resolve: {
    alias: {
      "vue-demi": resolve(
        __dirname,
        "../../node_modules/vue-demi/lib/v3/index.mjs"
      ),
    },
  },
  ...baseBuildConfig,
});
