import { defineComponent as y, useAttrs as B, ref as t, computed as C, onMounted as x, onBeforeUnmount as E, openBlock as i, createElementBlock as f, Fragment as L, createElementVNode as R, mergeProps as $, unref as b, renderSlot as c, createTextVNode as z, createBlock as M, Teleport as N, withDirectives as S, normalizeStyle as V, vShow as _, createCommentVNode as A } from "vue";
const T = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "index",
  setup(D) {
    const p = B(), l = t(null), s = t(!1), o = t(!1), a = t(0), d = t(0), g = C(() => ({
      top: a.value + "px",
      left: d.value + "px"
    }));
    function u() {
      m();
    }
    function m() {
      var r, v;
      const n = ((r = l.value) == null ? void 0 : r.getBoundingClientRect().left) ?? 0, e = ((v = l.value) == null ? void 0 : v.getBoundingClientRect().bottom) ?? 0;
      a.value = e, d.value = n;
    }
    function w() {
      u(), s.value || (s.value = !0), o.value = !o.value;
    }
    function k() {
      o.value = !1;
    }
    return x(() => {
      window.addEventListener("resize", u);
    }), E(() => {
      window.removeEventListener("resize", u);
    }), (n, e) => (i(), f(L, null, [
      R("div", $({ class: "dropdown-trigger" }, b(p), {
        ref_key: "triggerRef",
        ref: l,
        onClick: e[0] || (e[0] = (r) => w()),
        onMouseleave: e[1] || (e[1] = (r) => k())
      }), [
        c(n.$slots, "default", {}, () => [
          z("Dropdown")
        ], !0)
      ], 16),
      (i(), M(N, { to: "body" }, [
        s.value ? S((i(), f("div", {
          key: 0,
          class: "dropdown",
          style: V(g.value)
        }, [
          c(n.$slots, "dropdown", {}, void 0, !0)
        ], 4)), [
          [_, o.value]
        ]) : A("", !0)
      ]))
    ], 64));
  }
});
export {
  T as default
};
