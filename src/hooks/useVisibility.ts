import type { Ref } from 'vue'
import { useOppsite } from './useOppsite'
import { inAndOut_ANI as inAndOut } from '../utils/animation'

export function useVisibility(domRef: Ref<HTMLElement | null>, animation?: boolean | undefined, initState: 'visible' | 'hidden' = 'hidden'): [() => void, () => void, Ref<'visible' | 'hidden'>] {
  const [state, , _visible, _hidden] = useOppsite<'visible' | 'hidden'>(['visible', 'hidden'], initState)
  const [aniIn, aniOut] = inAndOut(domRef)
  function visible() {
    if (domRef.value !== null) {
      _visible()
      animation ? aniIn() : (domRef.value.style.visibility = state.value)
    }
  }
  function hidden() {
    if (domRef.value !== null) {
      _hidden()
      animation ? aniOut() : (domRef.value.style.visibility = state.value)
    }
  }
  return [visible, hidden, state]
}
