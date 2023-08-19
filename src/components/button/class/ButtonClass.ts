import Component from '../../../class/ComponentClass'
import { PREFIX, KIND, WEIGHT_EFFECT, BOOLEAN_PROP } from '../type/props'
import type { ButtonProps } from '../type/props'
class Button extends Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(PREFIX, props, BOOLEAN_PROP)
    this.setButtonWeight()
  }

  private setButtonWeight(): void {
    const weight = this.props.weight
    if (weight == undefined) return

    this.removeClass(weight) // 移除setStringProps时额外添加的weight
    const kind = KIND.find((el) => this.suffixs.includes(el))

    if (kind) {
      this.replaceClass(kind, this.composeClass([weight, kind])) // 使用对应primary替换kind颜色样式
      WEIGHT_EFFECT.forEach((effect) => {
        this.removeClass(effect) // 移除遮蔽样式
      })
    } else {
      this.addClass(this.composeClass([weight, KIND[0]])) // 给予默认normal-primary样式
    }
  }
}
export default Button
