import type { Ref } from 'vue'

export function inAndOut_ANI(domRef: Ref<HTMLElement | null>): [() => void, () => void] {
  function animationIn() {
    if (domRef.value !== null) {
      domRef.value.style.animationTimingFunction = 'ease-out'
      domRef.value.style.animationName = 'qyj-in'
    }
  }
  function animationOut() {
    if (domRef.value !== null) {
      domRef.value.style.animationTimingFunction = 'ease-in'
      domRef.value.style.animationName = 'qyj-out'
    }
  }
  return [animationIn, animationOut]
}
