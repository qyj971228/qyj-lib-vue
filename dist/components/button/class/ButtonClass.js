import i from "../../../class/ComponentClass.js";
import { PREFIX as r, BOOLEAN_PROP as h, KIND as o, WEIGHT_EFFECT as n } from "../type/props.js";
class p extends i {
  constructor(s) {
    super(r, s, h), this.setButtonWeight();
  }
  setButtonWeight() {
    const s = this.props.weight;
    if (s == null)
      return;
    this.removeClass(s);
    const t = o.find((e) => this.suffixs.includes(e));
    t ? (this.replaceClass(t, this.composeClass([s, t])), n.forEach((e) => {
      this.removeClass(e);
    })) : this.addClass(this.composeClass([s, o[0]]));
  }
}
export {
  p as default
};
