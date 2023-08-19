import { onBeforeUnmount, onMounted } from 'vue'

export function useWindowEventListener(event: string, callback: Function) {
  onMounted(() => {
    window.addEventListener(event, callback())
  })

  onBeforeUnmount(() => {
    window.removeEventListener(event, callback())
  })
}
