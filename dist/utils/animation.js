import { computed as a, watch as f } from "vue";
function T(n, t) {
  const u = a(() => t ? t.split("-").includes("top") : !1), e = a(() => t ? t.split("-").includes("bottom") : !1), l = a(() => t ? t.split("-").includes("right") : !1), o = a(() => t ? t.split("-").includes("left") : !1);
  let i = [];
  f(
    u,
    () => {
      if (i = [], u.value) {
        i.push(r, s);
        return;
      }
      if (e.value) {
        i.push(m, v);
        return;
      }
      if (l.value) {
        i.push(c, y);
        return;
      }
      if (o.value) {
        i.push(p, g);
        return;
      }
    },
    { immediate: !0 }
  );
  function r() {
    n.value !== null && (n.value.style.animationTimingFunction = "ease-out", n.value.style.animationName = "qyj-dropdown-in_bottom-to-top");
  }
  function s() {
    n.value !== null && (n.value.style.animationTimingFunction = "ease-in", n.value.style.animationName = "qyj-dropdown-out_bottom-to-top");
  }
  function m() {
    n.value !== null && (n.value.style.animationTimingFunction = "ease-out", n.value.style.animationName = "qyj-dropdown-in_top-to-bottom");
  }
  function v() {
    n.value !== null && (n.value.style.animationTimingFunction = "ease-in", n.value.style.animationName = "qyj-dropdown-out_top-to-bottom");
  }
  function c() {
    n.value !== null && (n.value.style.animationTimingFunction = "ease-in", n.value.style.animationName = "qyj-dropdown-in_left-to-right");
  }
  function y() {
    n.value !== null && (n.value.style.animationTimingFunction = "ease-in", n.value.style.animationName = "qyj-dropdown-out_left-to-right");
  }
  function p() {
    n.value !== null && (n.value.style.animationTimingFunction = "ease-in", n.value.style.animationName = "qyj-dropdown-in_right-to-left");
  }
  function g() {
    n.value !== null && (n.value.style.animationTimingFunction = "ease-in", n.value.style.animationName = "qyj-dropdown-out_right-to-left");
  }
  return i;
}
export {
  T as ani_dropdown
};
