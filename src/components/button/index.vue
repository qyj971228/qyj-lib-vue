<script setup lang="ts">

import { toRefs, watch } from 'vue'
import ButtonClass from './class/ButtonClass'
import { DASHED, GHOST, PREFIX, ROUND } from './type/props'

type ButtonWeight = 'primary'
type ButtonKind = 'normal' | 'warn' | 'error'
type ButtonSize = 's' | 'm' | 'l'

type ButtonProps = {
  kind?: ButtonKind
  size?: ButtonSize
  round?: boolean
  dashed?: boolean
  ghost?: boolean
  weight?: ButtonWeight
}

const props = defineProps<ButtonProps>()

const { kind, size, round, dashed, ghost, weight } = toRefs(props)

let className = ''

watch(props, () => {
  const button = new ButtonClass(PREFIX)
  kind?.value && button.setProp(kind.value)
  size?.value && button.setProp(size.value)
  round.value && button.setProp(ROUND)
  dashed.value && button.setProp(DASHED)
  ghost.value && button.setProp(GHOST)
  weight?.value && button.setButtonWeight(weight.value)
  className = button.getClassName()
}, {
  immediate: true
})

</script>
<template>
  <button :class="className">
    <slot>Button</slot>
  </button>
</template>

<style>
@import './index.css';
</style>