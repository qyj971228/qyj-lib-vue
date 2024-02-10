import { defineComponent as m, toRef as d, inject as u, resolveComponent as _, openBlock as n, createElementBlock as c, Fragment as f, renderList as h, normalizeClass as k, withModifiers as C, normalizeStyle as y, createTextVNode as S, toDisplayString as M, createBlock as v, createCommentVNode as x } from "vue";
const g = ["onClick"], j = {
  name: "MenuSub"
}, z = /* @__PURE__ */ m({
  ...j,
  props: {
    data: {}
  },
  setup(a) {
    const r = d(a.data), i = u("onSelect");
    function p(t, o) {
      t.collapse = !t.collapse, i(t, o);
    }
    return (t, o) => {
      const s = _("MenuSub");
      return n(!0), c(f, null, h(r.value, (e, l) => (n(), c("li", {
        class: k(e.level == 1 ? "qyj-menu-sub" : "qyj-menu-item"),
        key: l,
        onClick: C((N) => p(e, l), ["stop"]),
        style: y({
          height: e.collapse ? "30px" : (e.childNodeCount ?? 1) * 30 + "px"
        })
      }, [
        S(M(e.name) + " ", 1),
        e.children ? (n(), v(s, {
          key: 0,
          data: e.children
        }, null, 8, ["data"])) : x("", !0)
      ], 14, g))), 128);
    };
  }
});
export {
  z as default
};
