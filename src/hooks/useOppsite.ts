import { ref, type Ref } from 'vue'

export function useOppsite<T>(arr: [T, T], init?: T): [Ref<T>, Function, Function, Function] {
  const [left, right] = arr
  const state = ref(init ?? arr[0]) as Ref<T>
  function oppsite() {
    state.value = state.value == left ? right : left
  }
  function setLeft() {
    state.value = left
  }
  function setRight() {
    state.value = right
  }
  return [state, oppsite, setLeft, setRight]
}
