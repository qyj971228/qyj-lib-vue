<script setup lang="ts">

import { ref, toRefs, watch } from 'vue'
import ButtonClass from './class/ButtonClass'
import type { ButtonProps } from './type/props'

const props = defineProps<ButtonProps>()
const refs = toRefs<ButtonProps>(props)
const className = ref<string>('')

watch(props, () => {
  const button = new ButtonClass(refs)
  className.value = button.getClassName()
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