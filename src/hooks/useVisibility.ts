import type { Ref } from 'vue'
import { useOppsite } from './useOppsite'

export function useVisibility(domRef: Ref<HTMLElement | null>, initState: 'visible' | 'hidden' = 'visible'): [Function, Function, Function] {
  const [state, _oppsite, _visible, _hidden] = useOppsite<'visible' | 'hidden'>(initState, ['visible', 'hidden'])

  function init() {
    if (domRef.value !== null) {
      domRef.value.style.visibility = initState
    }
  }

  function visible() {
    if (domRef.value !== null) {
      _visible()
      domRef.value.style.visibility = state.value
    }
  }
  function hidden() {
    if (domRef.value !== null) {
      _hidden()
      domRef.value.style.visibility = state.value
    }
  }
  function oppsite() {
    if (domRef.value !== null) {
      if (!domRef.value.style.visibility) init()
      else {
        _oppsite()
        domRef.value.style.visibility = state.value
      }
    }
  }
  return [visible, hidden, oppsite]
}
