<script setup lang="ts">
import { toRefs, useAttrs } from 'vue'
import ButtonClass, { type Button } from './class/ButtonClass'
import type { ButtonProps } from './type/props'

import { useComponentClass } from '../../hooks/index'

// eslint-disable-next-line no-undef
defineOptions({ inheritAttrs: false })

const attrs = useAttrs()
const props = defineProps<ButtonProps>()

const [className] = useComponentClass<ButtonProps, Button>(props, () => new ButtonClass(toRefs(props)))
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
../../utils/useComponentClass
