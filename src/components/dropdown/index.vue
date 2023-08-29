<script setup lang="ts">
import { ref, useAttrs, nextTick, toRef, computed } from 'vue'
import type { DropdownProps } from './type/props'
import DropdownClass from './class/DropdownClass'
import { useClassName, useOppsite, useDropdownPosition } from '../../hooks/index'
import { inAndOut_ANI } from '../../utils/animation'

// eslint-disable-next-line no-undef
defineOptions({ inheritAttrs: false })

const attrs = useAttrs()
const props = defineProps<DropdownProps>()
const triggerRef = ref<HTMLElement | null>(null)
const dropdownRef = ref<HTMLElement | null>(null)
const position = toRef(props.position)
const close = toRef(props.close ?? 'hover')
const open = toRef(props.open ?? 'hover')

const [isRender, , render] = useOppsite<boolean>([true, false], false)
const [className] = useClassName<DropdownProps, DropdownClass>(props, () => new DropdownClass(props))
const [updatePosition] = useDropdownPosition(position, triggerRef, dropdownRef)

const visibility = ref<'visible' | 'hidden'>('visible')
const [aniIn, aniOut] = inAndOut_ANI(dropdownRef)
function show() {
  if (dropdownRef.value !== null) {
    visibility.value = 'visible'
    aniIn()
  }
}
function hide() {
  if (dropdownRef.value !== null) {
    visibility.value = 'hidden'
    aniOut()
  }
}

// eslint-disable-next-line no-undef
let hideTimer: NodeJS.Timeout

const openHover = computed(() => open.value == 'hover')
const closeHover = computed(() => close.value == 'hover')
const hidden = computed(() => visibility.value == 'hidden')
const visible = computed(() => visibility.value == 'visible')

function handleRender(callback: () => void) {
  render()
  nextTick(() => {
    updatePosition()
    callback()
  })
}

function triggerMouseenter() {
  if (!isRender.value) {
    handleRender(() => {
      if (openHover.value) {
        show()
      }
    })
    return
  }
  clearTimeout(hideTimer)
  if (openHover.value && hidden.value) {
    show()
  }
}

function triggerMouseleave() {
  if (closeHover.value && visible.value)
    hideTimer = setTimeout(() => {
      hide()
    }, 200)
}

function dropdownMouseenter() {
  clearTimeout(hideTimer)
  show()
}

function dropdownMouseleave() {
  if (closeHover.value && visible.value) {
    hideTimer = setTimeout(() => {
      hide()
    }, 200)
  }
}
</script>

<template>
  <!--content -->
  <div
    v-bind="attrs"
    ref="triggerRef"
    class="qyj-dropdown-trigger"
    @mouseenter="triggerMouseenter"
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
