<script setup lang="ts">
import { computed, ref, useAttrs, type CSSProperties, onMounted, onBeforeUnmount } from 'vue';

// eslint-disable-next-line no-undef
defineOptions({ inheritAttrs: false })

const attrs = useAttrs()

const triggerRef = ref<HTMLDivElement | null>(null)
const rendered = ref(false)
const show = ref(false)
const top = ref(0)
const left = ref(0)

const styles = computed(() => {
  return {
    top: top.value + 'px',
    left: left.value + 'px',
  } as CSSProperties
})

function getPosition() {
  bottomLeft()
} 

function bottomLeft() {
  const x = triggerRef.value?.getBoundingClientRect().left ?? 0
  const y = triggerRef.value?.getBoundingClientRect().bottom ?? 0
  top.value = y 
  left.value = x
}

function triggerClick() {
  getPosition()
  if (!rendered.value) rendered.value = true
  show.value = !show.value
}

// TODO: watch 当下拉框显现时, 为body新增click事件监听, 使其被点击时关闭

onMounted(() => {
  window.addEventListener('resize', getPosition)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', getPosition)
})
</script>

<template>
  <!--content -->
  <div class="dropdown-trigger" v-bind="attrs" ref="triggerRef" @click="triggerClick()">
    <slot>Dropdown</slot>
  </div>
  <!-- dropdown -->
  <Teleport to="body">
    <div v-if="rendered" v-show="show" class="dropdown" :style="styles">
      <slot name="dropdown"></slot>
    </div>
  </Teleport>
</template>

<style scoped>
.dropdown-trigger {
  display: inline-block;
  height: fit-content;
  width: fit-content;
}
.dropdown {
  position: absolute;
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: fit-content;
  z-index: 1000;
  padding: 5px;
  border-radius: 6px;
  background-color: rgba(246, 246, 246, 0.60);
  box-shadow: 0px 7px 22px 0px rgba(0, 0, 0, 0.25), 0px 0px 1.5px 0px rgba(0, 0, 0, 0.30), 0px 0px 1px 0px rgba(0, 0, 0, 0.40);
  backdrop-filter: blur(40px);
}
</style>
