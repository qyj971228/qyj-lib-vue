<script setup lang="ts">
import { computed, provide, toRef } from 'vue'
import MenuSub from '../menu-sub/index.vue'

export type Node = {
  name: string
  children?: Node[]
  level?: number
  childNodeCount?: number
  collapse?: boolean
}

export type MenuProps = {
  data: Node[]
  onSelect: Function
}

const props = defineProps<MenuProps>()

const data = toRef(props.data)
const onSelect = props.onSelect as Function
provide('onSelect', onSelect)

data.value = initCollapse(data.value)
data.value = initLevel(data.value)

const computedData = computed(() => {
  return countNodes(data.value)
})

function initCollapse(arr: Node[]) {
  const res = arr.map((el) => {
    el.collapse = false
    if (el.children) initCollapse(el.children)
    return el
  })
  return res
}

function initLevel(arr: Node[], level: number = 0) {
  level++
  const res = arr.map((el) => {
    el.level = level
    if (el.children) initLevel(el.children, level)
    return el
  })
  return res
}

function countNodes(arr: Node[]) {
  const res = arr.map((el: Node) => {
    el.childNodeCount = countChildNode(el)
    if (el.children) {
      countNodes(el.children)
    }
    return el
  })
  console.log(res)
  return res
}

function countChildNode(node: Node) {
  let sum = 1
  node.children?.forEach((el) => {
    if (!el.collapse) sum += countChildNode(el)
    else if (el.collapse) sum += 1
  })
  return sum
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
