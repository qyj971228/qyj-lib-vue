import { defineComponent as f, toRef as m, provide as h, computed as _, openBlock as v, createElementBlock as C, createVNode as N } from "vue";
import S from "../menu-sub/index.vue.js";
import "../menu-sub/index.vue2.js";
const x = { class: "qyj-menu" }, E = /* @__PURE__ */ f({
  __name: "index",
  props: {
    data: {},
    onSelect: { type: Function }
  },
  setup(l) {
    const r = l, c = m(r.data), d = r.onSelect;
    h("onSelect", d), c.value = a(c.value), c.value = i(c.value);
    const p = _(() => s(c.value));
    function a(t) {
      return t.map((e) => (e.collapse = !1, e.children && a(e.children), e));
    }
    function i(t, n = 0) {
      return n++, t.map((o) => (o.level = n, o.children && i(o.children, n), o));
    }
    function s(t) {
      const n = t.map((e) => (e.childNodeCount = u(e), e.children && s(e.children), e));
      return console.log(n), n;
    }
    function u(t) {
      var e;
      let n = 1;
      return (e = t.children) == null || e.forEach((o) => {
        o.collapse ? o.collapse && (n += 1) : n += u(o);
      }), n;
    }
    return (t, n) => (v(), C("ul", x, [
      N(S, { data: p.value }, null, 8, ["data"])
    ]));
  }
});
export {
  E as default
};
