<script setup lang="ts">
import {
  computed,
  ref,
  useAttrs,
  type CSSProperties,
  onMounted,
  onBeforeUnmount,
  nextTick,
  toRefs,
  watch
} from 'vue'

import type { DropdownProps, Position } from './type/props'
import DropdownClass from './class/DropdownClass'

// eslint-disable-next-line no-undef
defineOptions({ inheritAttrs: false })

const attrs = useAttrs()
const props = defineProps<DropdownProps>()
const propsRefs = toRefs<DropdownProps>(props)

const className = ref<string>('')

const triggerRef = ref<HTMLDivElement | null>(null)
const dropdownRef = ref<HTMLDivElement | null>(null)
const rendered = ref(false)
const show = ref<'hidden' | 'visible'>('hidden')
const top = ref(0)
const left = ref(0)
const position = ref<Position>('bottom')

watch(
  props,
  () => {
    if (props.position) {
      const dropdown = new DropdownClass(propsRefs)
      className.value = dropdown.getClassName(attrs.class as string)
      position.value = props.position
    }
  },
  {
    immediate: true
  }
)

const styles = computed(() => {
  return {
    top: top.value + 'px',
    left: left.value + 'px',
    visibility: show.value
  } as CSSProperties
})

function getPosition() {
  if (position.value == 'bottom-left') _bottomLeft()
  if (position.value == 'bottom-right') _bottomRight()
  if (position.value == 'bottom') _bottom()
  if (position.value == 'top-left') _topLeft()
  if (position.value == 'top') _top()
  if (position.value == 'top-right') _topRight()
  if (position.value == 'left')  _left()
  if (position.value == 'right') _right()
}

function _bottomLeft() {
  const x = triggerRef.value?.getBoundingClientRect().left ?? 0
  const y = triggerRef.value?.getBoundingClientRect().bottom ?? 0
  top.value = y
  left.value = x
}

function _bottomRight() {
  const x = triggerRef.value?.getBoundingClientRect().left ?? 0
  const y = triggerRef.value?.getBoundingClientRect().bottom ?? 0
  const triggerWidth = triggerRef.value?.clientWidth ?? 0
  const dropdownWidth = dropdownRef.value?.clientWidth ?? 0
  left.value = x + (triggerWidth - dropdownWidth)
  top.value = y
}

function _bottom() {
  const x = triggerRef.value?.getBoundingClientRect().left ?? 0
  const y = triggerRef.value?.getBoundingClientRect().bottom ?? 0
  const triggerWidth = triggerRef.value?.clientWidth ?? 0
  const dropdownWidth = dropdownRef.value?.clientWidth ?? 0
  left.value = x + (triggerWidth - dropdownWidth) / 2
  top.value = y
}

function _topLeft() {
  const x = triggerRef.value?.getBoundingClientRect().left ?? 0
  const y = triggerRef.value?.getBoundingClientRect().top ?? 0
  const dropdownHeight = dropdownRef.value?.clientHeight ?? 0
  top.value = y - dropdownHeight
  left.value = x
}

function _top() {
  const x = triggerRef.value?.getBoundingClientRect().left ?? 0
  const y = triggerRef.value?.getBoundingClientRect().top ?? 0
  const dropdownHeight = dropdownRef.value?.clientHeight ?? 0
  const triggerWidth = triggerRef.value?.clientWidth ?? 0
  const dropdownWidth = dropdownRef.value?.clientWidth ?? 0
  top.value = y - dropdownHeight
  left.value = x + (triggerWidth - dropdownWidth) / 2
}

function _topRight() {
  const x = triggerRef.value?.getBoundingClientRect().left ?? 0
  const y = triggerRef.value?.getBoundingClientRect().top ?? 0
  const dropdownHeight = dropdownRef.value?.clientHeight ?? 0
  const triggerWidth = triggerRef.value?.clientWidth ?? 0
  const dropdownWidth = dropdownRef.value?.clientWidth ?? 0
  left.value = x + (triggerWidth - dropdownWidth)
  top.value = y - dropdownHeight
}

function _left() {
  const x = triggerRef.value?.getBoundingClientRect().left ?? 0
  const y = triggerRef.value?.getBoundingClientRect().top ?? 0
  const dropdownWidth = dropdownRef.value?.clientWidth ?? 0
  left.value = x - dropdownWidth
  top.value = y
}

function _right() {
  const x = triggerRef.value?.getBoundingClientRect().right ?? 0
  const y = triggerRef.value?.getBoundingClientRect().top ?? 0
  left.value = x
  top.value = y
}

function triggerClick() {
  if (!rendered.value) rendered.value = true
  nextTick(() => {
    getPosition()
    show.value = show.value == 'hidden' ? 'visible' : 'hidden'
  })
}

function triggerMouseenter() {
  if (!rendered.value) rendered.value = true
  nextTick(() => {
    getPosition()
    show.value = show.value == 'hidden' ? 'visible' : 'hidden'
  })
}

function triggerMouseleave() {
  show.value = 'hidden'
}

function dropdownMouseenter() {
  show.value = 'visible'
}

function dropdownMouseleave() {
  show.value = 'hidden'
}

// TODO: prop trigger hover click
// watch click关闭模式时 当下拉框显现, 为body新增click事件监听, 使其被点击时关闭

onMounted(() => {
  window.addEventListener('resize', getPosition)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', getPosition)
})
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
      v-if="rendered"
      ref="dropdownRef"
      :class="className"
      :style="styles"
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
