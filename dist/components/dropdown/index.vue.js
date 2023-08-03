import { openBlock as o, createBlock as r, Teleport as t, createElementVNode as n, renderSlot as c, createTextVNode as d } from "vue";
import l from "../../_virtual/_plugin-vue_export-helper.js";
const a = {};
function f(e, s) {
  return o(), r(t, { to: "body" }, [
    n("div", null, [
      c(e.$slots, "default", {}, () => [
        d("Dropdown")
      ])
    ])
  ]);
}
const i = /* @__PURE__ */ l(a, [["render", f]]);
export {
  i as default
};
