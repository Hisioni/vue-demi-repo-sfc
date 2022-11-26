import type { App, Plugin } from "vue-demi";
import { install as installComponents } from "../components";

const VueDemiRepoSfc: Plugin = {
  install: (app: App, options?: Record<string, unknown>) => {
    app.use(installComponents, options);
  },
};

export default VueDemiRepoSfc;

export * from "../components";
