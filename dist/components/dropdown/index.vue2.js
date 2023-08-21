import { defineComponent as x, useAttrs as B, ref as m, toRef as u, openBlock as a, createElementBlock as g, Fragment as D, createElementVNode as P, mergeProps as T, unref as c, renderSlot as h, createTextVNode as A, createBlock as E, Teleport as $, normalizeClass as j, createCommentVNode as q, nextTick as k } from "vue";
import z from "./class/DropdownClass.js";
import { useClassName as F } from "../../hooks/useClassName.js";
import { useOppsite as O } from "../../hooks/useOppsite.js";
import { useDropdownPosition as S } from "../../hooks/useDropdownPosition.js";
import { useVisibility as G } from "../../hooks/useVisibility.js";
const W = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "index",
  props: {
    position: {},
    close: {},
    open: {}
  },
  setup(w) {
    const e = w, M = B(), f = m(null), n = m(null), y = u(e.position), i = u(e.close ?? "hover"), t = u(e.open ?? "hover"), [s, , d] = O(!1, [!0, !1]), [b] = F(e, () => new z(e)), [p] = S(y, f, n), [o, l, , r] = G(n);
    function C() {
      if (s.value) {
        if (t.value == "click" && r.value == "hidden") {
          o();
          return;
        }
        if (i.value == "click" && r.value == "visible") {
          l();
          return;
        }
      } else {
        d(), k(() => {
          p(), t.value == "click" && o();
        });
        return;
      }
    }
    function R() {
      if (s.value)
        t.value == "hover" && r.value == "hidden" && o();
      else {
        d(), k(() => {
          p(), t.value == "hover" && o();
        });
        return;
      }
    }
    function _() {
      i.value == "hover" && r.value == "visible" && l();
    }
    function N() {
      o();
    }
    function V() {
      i.value == "hover" && r.value == "visible" && l();
    }
    return (v, H) => (a(), g(D, null, [
      P("div", T(c(M), {
        ref_key: "triggerRef",
        ref: f,
        class: "qyj-dropdown-trigger",
        onMouseenter: R,
        onClick: C,
        onMouseleave: _
      }), [
        h(v.$slots, "default", {}, () => [
          A("Dropdown")
        ], !0)
      ], 16),
      (a(), E($, { to: "body" }, [
        c(s) ? (a(), g("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: n,
          class: j(c(b)),
          onMouseenter: N,
          onMouseleave: V
        }, [
          h(v.$slots, "dropdown", {}, void 0, !0)
        ], 34)) : q("", !0)
      ]))
    ], 64));
  }
});
export {
  W as default
};
