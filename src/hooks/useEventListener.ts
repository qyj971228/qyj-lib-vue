import { onBeforeUnmount, watch, type Ref } from 'vue'

export function useEventListener(domRef: Ref<HTMLElement | null> ,event: string, callback: Function) {
  
  // 这是一个监听domref的例子
  watch(domRef, () => {
    if (domRef.value !== null) {
      domRef.value.addEventListener(event, () => {
        callback()
      })
    }
  }, { immediate: true })

  onBeforeUnmount(() => {
    domRef.value && domRef.value.addEventListener(event, () => {
      callback()
    })
  })
}
