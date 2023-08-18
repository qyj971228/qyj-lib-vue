<script setup lang="ts">
import { computed, ref, useAttrs, type CSSProperties, nextTick, toRefs } from 'vue'
import type { DropdownProps } from './type/props'
import DropdownClass, { type Dropdown } from './class/DropdownClass'
import { useEventListener, useComponentClass, useOppsite } from '../../hooks/index'

// eslint-disable-next-line no-undef
defineOptions({ inheritAttrs: false })

const attrs = useAttrs()
const props = defineProps<DropdownProps>()
const propsRefs = toRefs<DropdownProps>(props)

const triggerRef = ref<Element | null>(null)
const dropdownRef = ref<Element | null>(null)

const [isShow, oppsiteIsShow, hidden, visible] = useOppsite<'hidden' | 'visible'>('hidden', ['hidden', 'visible'])

const [isRender, , render] = useOppsite<boolean>(false, [true, false])

const [className, dropdown] = useComponentClass<DropdownProps, Dropdown>(props, () => new DropdownClass(propsRefs, triggerRef, dropdownRef))

useEventListener('resize', () => dropdown.getPosition.bind(dropdown))

const styles = computed(() => {
  return {
    top: dropdown.top.value + 'px',
    left: dropdown.left.value + 'px',
    visibility: isShow.value
  } as CSSProperties
})

function triggerClick() {
  if (!isRender.value) render()
  nextTick(() => {
    dropdown.getPosition()
    oppsiteIsShow()
  })
}

function triggerMouseenter() {
  if (!isRender.value) render()
  nextTick(() => {
    dropdown.getPosition()
    oppsiteIsShow()
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
