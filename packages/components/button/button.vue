<script lang="ts">
import { defineComponent, version } from 'vue-demi';
import { buttonProps } from './button'

export default defineComponent({
  name: "OpButton",
  props: buttonProps,
  setup(props) {
    return {
      text: props.text,
      vueVersion: version
    }
  }
})
</script>

<template>
  <div>
    <button>{{ vueVersion }} {{ text }}</button>
  </div>
</template>