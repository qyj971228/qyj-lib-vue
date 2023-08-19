import type { Ref } from 'vue'

export function useVisibility(domRef: Ref<HTMLElement | null>, initState: 'visible' | 'hidden' = 'visible'): [Function, Function, Function] {
  function init() {
    if (domRef.value !== null) {
      domRef.value.style.visibility = initState
    }
  }

  function visible() {
    if (domRef.value !== null) {
      domRef.value.style.visibility = 'visible'
    }
  }
  function hidden() {
    if (domRef.value !== null) {
      domRef.value.style.visibility = 'hidden'
    }
  }
  function oppsite() {
    if (domRef.value !== null) {
      if (!domRef.value.style.visibility) init()
      else domRef.value.style.visibility = domRef.value.style.visibility == 'hidden' ? 'visible' : 'hidden'
    }
  }
  return [visible, hidden, oppsite]
}
