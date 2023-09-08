import { watch, type Ref, computed } from 'vue'
import type { Position } from '../components/dropdown/type/props'

export function ani_dropdown(domRef: Ref<HTMLElement | null>, position: Ref<Position> | Ref<undefined>) {
  const isTop = computed(() => {
    if (!position.value) return false
    return position.value.split('-').includes('top')
  })
  const isBottom = computed(() => {
    if (!position.value) return false
    return position.value.split('-').includes('bottom')
  })
  const isRight = computed(() => {
    if (!position.value) return false
    return position.value.split('-').includes('right')
  })
  const isLeft = computed(() => {
    if (!position.value) return false
    return position.value.split('-').includes('left')
  })

  let arr: any[] = []

  watch(
    isTop,
    () => {
      arr = []
      if (isTop.value) {
        arr.push(...[animationInTop, animationOutTop])
        return
      }
      if (isBottom.value) {
        arr.push(...[animationInBottom, animationOutBottom])
        return
      }
      if (isRight.value) {
        arr.push(...[animationInRight, animationOutRight])
        return
      }
      if (isLeft.value) {
        arr.push(...[animationInLeft, animationOutLeft])
        return
      }
    },
    { immediate: true }
  )

  function animationInTop() {
    if (domRef.value !== null) {
      domRef.value.style.animationTimingFunction = 'ease-out'
      domRef.value.style.animationName = 'qyj-dropdown-in_bottom-to-top'
    }
  }
  function animationOutTop() {
    if (domRef.value !== null) {
      domRef.value.style.animationTimingFunction = 'ease-in'
      domRef.value.style.animationName = 'qyj-dropdown-out_bottom-to-top'
    }
  }
  function animationInBottom() {
    if (domRef.value !== null) {
      domRef.value.style.animationTimingFunction = 'ease-out'
      domRef.value.style.animationName = 'qyj-dropdown-in_top-to-bottom'
    }
  }
  function animationOutBottom() {
    if (domRef.value !== null) {
      domRef.value.style.animationTimingFunction = 'ease-in'
      domRef.value.style.animationName = 'qyj-dropdown-out_top-to-bottom'
    }
  }
  function animationInRight() {
    if (domRef.value !== null) {
      domRef.value.style.animationTimingFunction = 'ease-in'
      domRef.value.style.animationName = 'qyj-dropdown-in_left-to-right'
    }
  }
  function animationOutRight() {
    if (domRef.value !== null) {
      domRef.value.style.animationTimingFunction = 'ease-in'
      domRef.value.style.animationName = 'qyj-dropdown-out_left-to-right'
    }
  }
  function animationInLeft() {
    if (domRef.value !== null) {
      domRef.value.style.animationTimingFunction = 'ease-in'
      domRef.value.style.animationName = 'qyj-dropdown-in_right-to-left'
    }
  }
  function animationOutLeft() {
    if (domRef.value !== null) {
      domRef.value.style.animationTimingFunction = 'ease-in'
      domRef.value.style.animationName = 'qyj-dropdown-out_right-to-left'
    }
  }
  return arr
}
