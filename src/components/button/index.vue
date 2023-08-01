<script setup lang="ts">
import { ref, toRefs, watch, useAttrs } from 'vue'
import ButtonClass from './class/ButtonClass'
import type { ButtonProps } from './type/props'

defineOptions({ inheritAttrs: false })

const attrs = useAttrs()
const props = defineProps<ButtonProps>()
const propsRefs = toRefs<ButtonProps>(props)

const className = ref<string>('')

watch(props, () => {
  const attrClass = attrs.class as string
  const button = new ButtonClass(propsRefs)
  className.value = button.getClassName(attrClass)
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