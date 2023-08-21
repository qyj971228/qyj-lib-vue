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
const close = toRef(props.close ?? 'hover')
const open = toRef(props.open ?? 'hover')

const [isRender, , render] = useOppsite<boolean>(false, [true, false])
const [className] = useClassName<DropdownProps, DropdownClass>(props, () => new DropdownClass(props))
const [updatePosition] = useDropdownPosition(position, triggerRef, dropdownRef)
const [show, hide, , visibility] = useVisibility(dropdownRef)

function triggerClick() {
  if (!isRender.value) {
    render()
    nextTick(() => {
      updatePosition()
      if (open.value == 'click') show()
    })
    return
  } else {
    if (open.value == 'click' && visibility.value == 'hidden') {
      show()
      return
    }
    if (close.value == 'click' && visibility.value == 'visible') {
      hide()
      return
    }
  }
}

function triggerMouseenter() {
  if (!isRender.value) {
    render()
    nextTick(() => {
      updatePosition()
      if (open.value == 'hover') show()
    })
    return
  } else {
    if (open.value == 'hover' && visibility.value == 'hidden') show()
  }
}

function triggerMouseleave() {
  if (close.value == 'hover' && visibility.value == 'visible') hide()
}

function dropdownMouseenter() {
  show()
}

function dropdownMouseleave() {
  close.value == 'hover' && visibility.value == 'visible' && hide()
}

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
