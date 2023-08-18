import type Component from '../class/ComponentClass'
import { ref, useAttrs, watch, type Ref } from 'vue'

export function useComponentClass<Props extends Object, Com extends Component<Props>>(props: Props, getClass: () => Com): [Ref<string>, Com] {
  const className = ref('')
  const attrs = useAttrs()

  let component = getClass()
  watch(
    props,
    () => {
      component = getClass()
      className.value = component && component.getClassName(attrs.class as string)
    },
    {
      immediate: true
    }
  )
  return [className, component]
}
