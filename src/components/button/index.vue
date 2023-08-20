<script setup lang="ts">
import { useAttrs } from 'vue'
import ButtonClass from './class/ButtonClass'
import type { ButtonProps } from './type/props'
import { useClassName } from '../../hooks/index'

// eslint-disable-next-line no-undef
defineOptions({ inheritAttrs: false })

const attrs = useAttrs()
const props = defineProps<ButtonProps>()

const [className] = useClassName<ButtonProps, ButtonClass>(props, () => new ButtonClass(props))
</script>
<template>
  <button
    :class="className"
    v-bind="attrs"
  >
    <slot>Button</slot>
  </button>
</template>

<style>
@import './index.css';
</style>
../../hello1/hello
