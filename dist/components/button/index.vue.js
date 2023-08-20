import { defineComponent as a, useAttrs as l, openBlock as p, createElementBlock as c, mergeProps as m, unref as t, renderSlot as d, createTextVNode as i } from "vue";
import u from "./class/ButtonClass.js";
import { useClassName as f } from "../../hooks/useClassName.js";
const g = /* @__PURE__ */ a({
  inheritAttrs: !1,
  __name: "index",
  props: {
    kind: {},
    size: {},
    round: { type: Boolean },
    dashed: { type: Boolean },
    ghost: { type: Boolean },
    weight: {},
    disabled: { type: Boolean }
  },
  setup(o) {
    const e = o, s = l(), [n] = f(e, () => new u(e));
    return (r, B) => (p(), c("button", m({ class: t(n) }, t(s)), [
      d(r.$slots, "default", {}, () => [
        i("Button")
      ])
    ], 16));
  }
});
export {
  g as default
};
