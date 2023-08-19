import type { Ref } from 'vue'

class Client {
  clientWidth: number = 0
  clientHeight: number = 0
  constructor(domRef: Ref<Element | null>) {
    if (domRef.value === null) return
    else {
      this.clientHeight = domRef.value?.clientHeight ?? 0
      this.clientWidth = domRef.value?.clientWidth ?? 0
    }
  }
}

export default Client
