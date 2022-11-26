import { defineConfig } from "vite";
import { resolve } from "path";
import { createVuePlugin as vue2 } from "vite-plugin-vue2";
import { baseBuildConfig, defaultPlugins } from "../../vite.base.config";

export default defineConfig({
  plugins: [vue2(), ...defaultPlugins],
  resolve: {
    alias: {
      "vue-demi": resolve(
        __dirname,
        "../../node_modules/vue-demi/lib/v2/index.mjs"
      ),
    },
  },
  ...baseBuildConfig,
});
