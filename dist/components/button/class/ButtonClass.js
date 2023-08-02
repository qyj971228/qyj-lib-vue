import r from "../../../class/ComponentClass.js";
import { PREFIX as h, BOOLEAN_PROP as a, KIND as i, WEIGHT_EFFECT as n } from "../type/props.js";
class u extends r {
  constructor(s) {
    super(h, s, a), this.setButtonWeight();
  }
  setButtonWeight() {
    var o;
    const s = (o = this.props.weight) == null ? void 0 : o.value;
    if (s == null)
      return;
    this.removeClass(s);
    const t = i.find((e) => this.suffixs.includes(e));
    t ? (this.replaceClass(t, this.composeClass([s, t])), n.forEach((e) => {
      this.removeClass(e);
    })) : this.addClass(this.composeClass([s, i[0]]));
  }
}
export {
  u as default
};
