import { defineComponent, type PropType } from "vue";
import style from './style/Hi.module.css'

export default defineComponent({
  props: {
    msg: String as PropType<string>
  },
  setup(props) {
    return () => (
      <div className={style.hi}>hi{props.msg}</div>
    )
  }
})