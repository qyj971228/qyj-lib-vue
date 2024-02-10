import { defineComponent as j, useAttrs as q, toRefs as z, ref as i, onMounted as F, onBeforeUnmount as L, computed as s, openBlock as t, createElementBlock as p, Fragment as _, createElementVNode as U, mergeProps as G, unref as u, renderSlot as J, createTextVNode as b, createBlock as R, Teleport as K, normalizeClass as Q, renderList as W, withCtx as X, toDisplayString as Y, createCommentVNode as Z, nextTick as ee } from "vue";
import oe from "./class/DropdownClass.js";
import { useClassName as te } from "../../hooks/useClassName.js";
import { useOppsite as ne } from "../../hooks/useOppsite.js";
import { useDropdownPosition as re } from "../../hooks/useDropdownPosition.js";
import { ani_dropdown as le } from "../../utils/animation.js";
import ie from "../dropdown-item/index.vue.js";
const ge = /* @__PURE__ */ j({
  inheritAttrs: !1,
  __name: "index",
  props: {
    position: {},
    close: {},
    open: {},
    data: {}
  },
  setup(D) {
    const a = D, N = q(), { position: n, data: B, close: d, open: c } = z(a), f = i(null), e = i(null), v = i();
    F(() => {
      v.value = window.getComputedStyle(f.value.children[0]).display;
    });
    const [S] = te(a, () => new oe(a)), [g, , x] = ne([!0, !1], !1), r = i("visible");
    let [h] = re(n, f, e);
    const [P, V] = le(e, (n == null ? void 0 : n.value) ?? "bottom");
    function m() {
      e.value !== null && (h(), r.value = "visible", P());
    }
    function w() {
      e.value !== null && (r.value = "hidden", V());
    }
    let o;
    L(() => {
      clearTimeout(o);
    });
    const y = s(() => ((c == null ? void 0 : c.value) ?? "hover") == "hover"), k = s(() => ((d == null ? void 0 : d.value) ?? "hover") == "hover"), $ = s(() => r.value == "hidden"), M = s(() => r.value == "visible");
    function A(l) {
      x(), ee(() => {
        h(), l();
      });
    }
    function E() {
      if (!g.value) {
        A(() => {
          y.value && m();
        });
        return;
      }
      clearTimeout(o), y.value && $.value && m();
    }
    function H() {
      k.value && M.value && (o = setTimeout(() => {
        w();
      }, 200));
    }
    function I() {
      clearTimeout(o), m();
    }
    function O() {
      k.value && M.value && (o = setTimeout(() => {
        w();
      }, 200));
    }
    return (l, se) => (t(), p(_, null, [
      U("span", G(u(N), {
        ref_key: "triggerRef",
        ref: f,
        class: "qyj-dropdown-trigger",
        onMouseenter: E,
        onMouseleave: H,
        style: { display: v.value }
      }), [
        J(l.$slots, "default", {}, () => [
          b("Dropdown")
        ])
      ], 16),
      (t(), R(K, { to: "body" }, [
        u(g) ? (t(), p("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: e,
          class: Q(u(S)),
          onMouseenter: I,
          onMouseleave: O
        }, [
          (t(!0), p(_, null, W(u(B), (T, C) => (t(), R(ie, {
            key: C,
            onClick: (ue) => l.$emit("onSelect", T, C)
          }, {
            default: X(() => [
              b(Y(T.name), 1)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128))
        ], 34)) : Z("", !0)
      ]))
    ], 64));
  }
});
export {
  ge as default
};
