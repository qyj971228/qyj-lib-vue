<script setup lang="ts">
import { ref, toRefs, watch, useAttrs } from 'vue'
import ButtonClass from './class/ButtonClass'
import type { ButtonProps } from './type/props'

// eslint-disable-next-line no-undef
defineOptions({ inheritAttrs: false })

const attrs = useAttrs()
const props = defineProps<ButtonProps>()
const propsRefs = toRefs<ButtonProps>(props)

const className = ref<string>('')

watch(
  props,
  () => {
    const button = new ButtonClass(propsRefs)
    className.value = button.getClassName(attrs.class as string)
  },
  {
    immediate: true
  }
)
</script>
<template>
  <button :class="className" v-bind="attrs">
    <slot>Button</slot>
  </button>
</template>

<style>
@import './index.css';
</style>
