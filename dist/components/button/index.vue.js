import { defineComponent as r, useAttrs as l, toRefs as c, ref as p, watch as u, openBlock as d, createElementBlock as i, mergeProps as m, unref as f, renderSlot as B, createTextVNode as h } from "vue";
import _ from "./class/ButtonClass.js";
const k = /* @__PURE__ */ r({
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
  setup(n) {
    const t = n, o = l(), a = c(t), s = p("");
    return u(t, () => {
      const e = new _(a);
      s.value = e.getClassName(o.class);
    }, {
      immediate: !0
    }), (e, g) => (d(), i("button", m({ class: s.value }, f(o)), [
      B(e.$slots, "default", {}, () => [
        h("Button")
      ])
    ], 16));
  }
});
export {
  k as default
};
