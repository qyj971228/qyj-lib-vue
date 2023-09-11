<script setup lang="ts">
import { provide, ref, toRef } from 'vue'
import MenuSub from '../menu-sub/index.vue'

export type List = {
  name: string
  children?: List[]
  level?: number
  itemLength?: number
}

export type MenuProps = {
  data: List[]
  onSelect: Function
}

const props = defineProps<MenuProps>()

const data = toRef(props.data)
const onSelect = props.onSelect as Function
provide('onSelect', onSelect)

const computedData = ref()
computedData.value = setLevel(data.value, 0)
// setLength(computedData.value)
// TODO: 获取树中节点的子节点数并记录

console.log(computedData.value)

function setLevel(arr: List[], level: number) {
  level++
  arr.forEach((el) => {
    el.level = level
    if (el.children) setLevel(el.children, level)
  })
  return arr
}


</script>

<template>
  <ul class="qyj-menu">
    <MenuSub :data="computedData"></MenuSub>
  </ul>
</template>

<style>
@import url('./index.css');
</style>
