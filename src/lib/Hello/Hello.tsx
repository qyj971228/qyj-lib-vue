import { defineComponent, type PropType } from "vue";
import style from './style/Hello.module.css'

export default defineComponent({
  props: {
    msg: String as PropType<string>
  },
  setup(props) {
    return () => (
      <div className={style.hello}>hello{props.msg}</div>
    )
  }
})