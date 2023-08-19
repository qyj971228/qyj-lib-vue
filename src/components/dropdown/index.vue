<script setup lang="ts">
import { ref, useAttrs, nextTick, toRef } from 'vue'
import type { DropdownProps } from './type/props'
import DropdownClass from './class/DropdownClass'
import { useClassName, useOppsite, useDropdownPosition, useVisibility } from '../../hooks/index'

// eslint-disable-next-line no-undef
defineOptions({ inheritAttrs: false })

const attrs = useAttrs()
const props = defineProps<DropdownProps>()
const triggerRef = ref<HTMLElement | null>(null)
const dropdownRef = ref<HTMLElement | null>(null)
const position = toRef(props.position)

const [isRender, , render] = useOppsite<boolean>(false, [true, false])
const [className] = useClassName<DropdownProps, DropdownClass>(props, () => new DropdownClass(props))
const [updatePosition] = useDropdownPosition(position, triggerRef, dropdownRef)
const [visible, hidden, oppsiteVisible] = useVisibility(dropdownRef)

function triggerClick() {
  if (!isRender.value) render()
  nextTick(() => {
    updatePosition()
    oppsiteVisible()
  })
}

function triggerMouseenter() {
  if (!isRender.value) render()
  nextTick(() => {
    updatePosition()
    oppsiteVisible()
  })
}

function triggerMouseleave() {
  hidden()
}

function dropdownMouseenter() {
  visible()
}

function dropdownMouseleave() {
  hidden()
}

// TODO: prop trigger hover click
// watch click关闭模式时 当下拉框显现, 为body新增click事件监听, 使其被点击时关闭
</script>

<template>
  <!--content -->
  <div
    v-bind="attrs"
    ref="triggerRef"
    class="qyj-dropdown-trigger"
    @mouseenter="triggerMouseenter"
    @click="triggerClick"
    @mouseleave="triggerMouseleave"
  >
    <slot>Dropdown</slot>
  </div>
  <!-- dropdown -->
  <Teleport to="body">
    <div
      v-if="isRender"
      ref="dropdownRef"
      :class="className"
      @mouseenter="dropdownMouseenter"
      @mouseleave="dropdownMouseleave"
    >
      <slot name="dropdown"></slot>
    </div>
  </Teleport>
</template>

<style scoped>
@import url('./index.css');
</style>
