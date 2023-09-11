<script setup lang="ts">
import { onMounted, ref } from 'vue'

const menuSub = ref<HTMLUListElement>()
onMounted(() => {
  initLength()
})
function initLength() {
  if (!menuSub.value) return
  menuSub.value.style.height = menuSub.value.clientHeight + 'px'
}
</script>

<template>
  <ul
    class="qyj-menu-sub"
    ref="menuSub"
  >
    <slot></slot>
  </ul>
</template>

<style>
@import url('./index.css');
</style>
