import type Component from '../class/ComponentClass'
import { ref, useAttrs, watch, type Ref } from 'vue'

export function useClassName<Props extends Object, Com extends Component<Props>>(props: Props, getClass: () => Com): [Ref<string>] {
  const className = ref('')
  const attrs = useAttrs()
  watch(
    props,
    () => {
      className.value = getClass().getClassName(attrs.class as string)
    },
    {
      immediate: true
    }
  )
  return [className]
}
