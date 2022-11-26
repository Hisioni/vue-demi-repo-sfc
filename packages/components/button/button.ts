import type { ExtractPropTypes, PropType } from "vue-demi";
import Button from "./button.vue";

export const buttonProps = {
  /**
   * @description button show text
   */
  text: {
    type: String as PropType<string>,
    default: "",
  },
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export type ButtonInstance = InstanceType<typeof Button>;
