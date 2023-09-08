<script setup lang="ts">
import { ref } from 'vue'

const menuItem = ref<HTMLLIElement>()
let menuGroupElement: HTMLUListElement

function onMenuItemClick() {
  if (!menuItem.value) return
  if (menuItem.value?.previousElementSibling) return
  getMenuGroup()
  setMenuGroupHeight()
}

function getMenuGroup() {
  const parentElement = menuItem.value?.parentElement
  if (!parentElement) return
  menuGroupElement = parentElement as HTMLUListElement
}

function setMenuGroupHeight() {
  const height = menuItem.value?.clientHeight as number
  const parentHeight = menuGroupElement.clientHeight
  let siblingCount = 1
  if (parentHeight == height) {
    let next = menuItem.value as Element
    while (next.nextElementSibling !== null) {
      next = next.nextElementSibling
      siblingCount++
    }
  }
  menuGroupElement.style.height = height * siblingCount + 'px'
}
</script>

<template>
  <li
    class="qyj-menu-item"
    @click="onMenuItemClick"
    ref="menuItem"
  >
    <slot></slot>
  </li>
</template>

<style>
@import url('./index.css');
</style>
