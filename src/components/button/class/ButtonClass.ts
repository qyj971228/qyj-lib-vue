import type { ToRefs } from "vue"
import Component from "../../../class/ComponentClass"
import { arrDel, arrReplace } from "../../../utils/tool"
import { PREFIX, KIND, WEIGHT_EFFECT, BOOLEAN_PROP } from "../type/props"
import type { ButtonProps, Weight } from "../type/props"
class Button extends Component<ButtonProps> {
  constructor(props: ToRefs<ButtonProps>) {
    super(PREFIX, props, BOOLEAN_PROP)
    this.setButtonWeight(props.weight?.value)
  }

  private setButtonWeight(weight: Weight | undefined) {
    if (weight == undefined) return

    arrDel(this.suffixs, weight) // 移除setStringProps时额外添加的weight
    const kind = KIND.find(el => this.suffixs.includes(el))

    if (kind) {
      arrReplace(this.suffixs, kind, `${weight}${this._}${kind}`) // 使用对应primary替换kind颜色样式
      WEIGHT_EFFECT.forEach(effect => { arrDel(this.suffixs, effect) }) // 移除遮蔽样式
    } else {
      this.suffixs.push(`${weight}${this._}${KIND[0]}`) // 给予默认normal-primary样式
    }
  }
}
export default Button