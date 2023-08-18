<script setup lang="ts">
import { computed, ref, useAttrs, type CSSProperties, nextTick, toRefs, watch } from 'vue'

import type { DropdownProps } from './type/props'
import DropdownClass from './class/DropdownClass'

import { useEventListener } from '../../utils/useEventListener';

// eslint-disable-next-line no-undef
defineOptions({ inheritAttrs: false })

const attrs = useAttrs()
const props = defineProps<DropdownProps>()
const propsRefs = toRefs<DropdownProps>(props)

const className = ref<string>('')

const triggerRef = ref<Element | null>(null)
const dropdownRef = ref<Element | null>(null)

const rendered = ref(false)
const show = ref<'hidden' | 'visible'>('hidden')

let dropdown: DropdownClass

useEventListener('resize', () => dropdown.getPosition.bind(dropdown))

watch(
  props,
  () => {
    if (props.position) {
      dropdown = new DropdownClass(propsRefs, triggerRef, dropdownRef)
      className.value = dropdown.getClassName(attrs.class as string)
    }
  },
  {
    immediate: true
  }
)

const styles = computed(() => {
  return {
    top: dropdown.top.value + 'px',
    left: dropdown.left.value + 'px',
    visibility: show.value
  } as CSSProperties
})

function triggerClick() {
  if (!rendered.value) rendered.value = true
  nextTick(() => {
    dropdown.getPosition()
    show.value = show.value == 'hidden' ? 'visible' : 'hidden'
  })
}

function triggerMouseenter() {
  if (!rendered.value) rendered.value = true
  nextTick(() => {
    dropdown.getPosition()
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

</script>

<template>
  <!--content -->
  <div v-bind="attrs" ref="triggerRef" class="qyj-dropdown-trigger" @mouseenter="triggerMouseenter" @click="triggerClick"
    @mouseleave="triggerMouseleave">
    <slot>Dropdown</slot>
  </div>
  <!-- dropdown -->
  <Teleport to="body">
    <div v-if="rendered" ref="dropdownRef" :class="className" :style="styles" @mouseenter="dropdownMouseenter"
      @mouseleave="dropdownMouseleave">
      <slot name="dropdown"></slot>
    </div>
  </Teleport>
</template>

<style scoped>
@import url('./index.css');
</style>
