import { defineComponent as V, useAttrs as b, ref as a, toRef as h, openBlock as r, createElementBlock as c, Fragment as x, createElementVNode as B, mergeProps as D, unref as n, renderSlot as f, createTextVNode as P, createBlock as T, Teleport as A, normalizeClass as E, createCommentVNode as $, nextTick as m } from "vue";
import j from "./class/DropdownClass.js";
import { useClassName as q } from "../../hooks/useClassName.js";
import { useOppsite as z } from "../../hooks/useOppsite.js";
import { useDropdownPosition as F } from "../../hooks/useDropdownPosition.js";
import { useVisibility as O } from "../../hooks/useVisibility.js";
const Q = /* @__PURE__ */ V({
  inheritAttrs: !1,
  __name: "index",
  props: {
    position: {}
  },
  setup(g) {
    const e = g, v = b(), s = a(null), o = a(null), w = h(e.position), [t, , i] = z(!1, [!0, !1]), [k] = q(e, () => new j(e)), [l] = F(w, s, o), [M, u, p] = O(o);
    function y() {
      t.value || i(), m(() => {
        l(), p();
      });
    }
    function C() {
      t.value || i(), m(() => {
        l(), p();
      });
    }
    function R() {
      u();
    }
    function _() {
      M();
    }
    function N() {
      u();
    }
    return (d, S) => (r(), c(x, null, [
      B("div", D(n(v), {
        ref_key: "triggerRef",
        ref: s,
        class: "qyj-dropdown-trigger",
        onMouseenter: C,
        onClick: y,
        onMouseleave: R
      }), [
        f(d.$slots, "default", {}, () => [
          P("Dropdown")
        ], !0)
      ], 16),
      (r(), T(A, { to: "body" }, [
        n(t) ? (r(), c("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: o,
          class: E(n(k)),
          onMouseenter: _,
          onMouseleave: N
        }, [
          f(d.$slots, "dropdown", {}, void 0, !0)
        ], 34)) : $("", !0)
      ]))
    ], 64));
  }
});
export {
  Q as default
};
