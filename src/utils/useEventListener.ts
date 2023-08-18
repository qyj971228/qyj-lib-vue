import { onBeforeUnmount, onMounted } from 'vue'

export function useEventListener(event: string, callback: Function) {
  onMounted(() => {
    window.addEventListener(event, callback())
  })

  onBeforeUnmount(() => {
    window.removeEventListener(event, callback())
  })
}
