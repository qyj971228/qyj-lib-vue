import { defineComponent, type PropType } from "vue";
import './index.css'

export default defineComponent({
  props: {
    msg: String as PropType<string>
  },
  setup(props) {
    return () => (
      <div className='hi'>hi{props.msg}</div>
    )
  }
})