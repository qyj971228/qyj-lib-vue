<script setup lang="ts">
import { onMounted, ref } from 'vue'

const menuGroup = ref<HTMLUListElement>()
onMounted(() => {
  initLength()
})
function initLength() {
  if (!menuGroup.value) return
  menuGroup.value.style.height = menuGroup.value.clientHeight + 'px'
}
</script>

<template>
  <ul
    class="qyj-menu-group"
    ref="menuGroup"
  >
    <slot></slot>
  </ul>
</template>

<style>
@import url('./index.css');
</style>
