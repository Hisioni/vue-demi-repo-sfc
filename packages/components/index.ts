import type { Plugin, App } from "vue-demi";
import { Button } from "./button";

export * from "./button";

const components = [Button];

export const install: Plugin = {
  install: (app: App, options?: Record<string, unknown>) => {
    components.forEach((component) => app.component(component.name, component));
  },
};
