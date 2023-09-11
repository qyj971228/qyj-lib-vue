<script setup lang="ts">
import { ref, useAttrs, nextTick, computed, onBeforeUnmount, onMounted, toRefs } from 'vue'
import type { DropdownProps } from './type/props'
import DropdownClass from './class/DropdownClass'
import { useClassName, useOppsite, useDropdownPosition } from '../../hooks/index'
import { ani_dropdown } from '../../utils/animation'
import DropdownItem from '../dropdown-item/index.vue'

// eslint-disable-next-line no-undef
defineOptions({ inheritAttrs: false })

const attrs = useAttrs()

const props = defineProps<DropdownProps>()

const { position, data, close, open } = toRefs(props)

const triggerRef = ref<HTMLElement | null>(null)
const dropdownRef = ref<HTMLElement | null>(null)

const triggerDisplay = ref()
onMounted(() => {
  triggerDisplay.value = window.getComputedStyle((triggerRef.value as Element).children[0]).display
})

const [className] = useClassName<DropdownProps, DropdownClass>(props, () => new DropdownClass(props))

const [isRender, , render] = useOppsite<boolean>([true, false], false)
const visibility = ref<'visible' | 'hidden'>('visible')

let [updatePosition] = useDropdownPosition(position, triggerRef, dropdownRef)
const [aniIn, aniOut] = ani_dropdown(dropdownRef, position?.value ?? 'bottom')

function show() {
  if (dropdownRef.value !== null) {
    updatePosition()
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

onBeforeUnmount(() => {
  clearTimeout(hideTimer)
})

const openHover = computed(() => (open?.value ?? 'hover') == 'hover')
const closeHover = computed(() => (close?.value ?? 'hover') == 'hover')
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
      openHover.value && show()
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
  <span
    v-bind="attrs"
    ref="triggerRef"
    class="qyj-dropdown-trigger"
    @mouseenter="triggerMouseenter"
    @mouseleave="triggerMouseleave"
    :style="{ display: triggerDisplay }"
  >
    <slot>Dropdown</slot>
  </span>
  <Teleport to="body">
    <div
      v-if="isRender"
      ref="dropdownRef"
      :class="className"
      @mouseenter="dropdownMouseenter"
      @mouseleave="dropdownMouseleave"
    >
      <slot
        v-if="!data?.length"
        name="dropdown"
      >
      </slot>
      <DropdownItem
        v-else
        v-for="(item, index) in data"
        :key="index"
        @click="item.onclick"
      >
        {{ item.name }}
      </DropdownItem>
    </div>
  </Teleport>
</template>

<style scoped>
@import url('./index.css');
</style>
