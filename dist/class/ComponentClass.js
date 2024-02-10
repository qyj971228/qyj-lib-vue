var p = Object.defineProperty;
var a = (i, s, t) => s in i ? p(i, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[s] = t;
var r = (i, s, t) => (a(i, typeof s != "symbol" ? s + "" : s, t), t);
import { Array as e } from "../utils/array.js";
class c {
  constructor(s, t, o) {
    r(this, "_", "-");
    r(this, "prefix");
    r(this, "suffixs", []);
    r(this, "classList");
    r(this, "props");
    this.classList = [s], this.prefix = s, this.props = t, this.setStrProps(), this.setBoolProps(o);
  }
  // 组合class
  composeClass(s) {
    return s.join(this._);
  }
  // 新增class
  addClass(s) {
    s != null && this.suffixs.push(s);
  }
  // 移除class
  removeClass(s) {
    e.Delete(this.suffixs, s);
  }
  // 替换class
  replaceClass(s, t) {
    e.Replace(this.suffixs, s, t);
  }
  // 设置str型prop
  setStrProps() {
    Object.keys(this.props).forEach((s) => {
      const t = this.props[s];
      typeof t == "string" && this.addClass(t);
    });
  }
  // 设置bool型prop
  setBoolProps(s) {
    s && s.forEach((t) => {
      this.props[t] == !0 && this.addClass(t);
    });
  }
  // 计算classList
  computeClassList() {
    return this.classList.concat(this.suffixs.map((s) => `${this.prefix}${this._}${s}`));
  }
  // 获取str型class
  getClassName(s) {
    return this.computeClassList().concat(s ? s.split(" ") : "").join(" ");
  }
  // 获取array型class
  getClassList(s) {
    return this.computeClassList().concat(s ? [s] : []);
  }
}
export {
  c as default
};
