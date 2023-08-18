import type { Ref } from "vue"

class Rect {
  top: number = 0
  right: number = 0
  bottom: number = 0
  left: number = 0
  constructor(domRef: Ref<Element | null>) {
    if (domRef.value === null) return
    else {
      this.left = domRef.value?.getBoundingClientRect().left ?? 0
      this.right = domRef.value?.getBoundingClientRect().right ?? 0
      this.bottom = domRef.value?.getBoundingClientRect().bottom ?? 0
      this.top = domRef.value?.getBoundingClientRect().top ?? 0
    }
  }
}

export default Rect