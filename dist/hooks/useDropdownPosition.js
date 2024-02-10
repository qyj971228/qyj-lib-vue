import c from "../class/ClientClass.js";
import e from "../class/RectClass.js";
import { watch as y } from "vue";
import { useWindowEventListener as P } from "./useWindowEventListener.js";
import { Util as z } from "../utils/util.js";
function k(t, l, u) {
  let h = 0, m = 0;
  const [a, v] = P("resize", z.throttle(w, 200));
  t && (t != null && t.value) && y(
    t,
    () => {
      v(), a();
    },
    { immediate: !0 }
  );
  function w() {
    (t == null ? void 0 : t.value) == "bottom-left" && n(), (t == null ? void 0 : t.value) == "bottom-right" && f(), (t == null ? void 0 : t.value) == "bottom" && W(), (t == null ? void 0 : t.value) == "top-left" && b(), (t == null ? void 0 : t.value) == "top" && _(), (t == null ? void 0 : t.value) == "top-right" && x(), (t == null ? void 0 : t.value) == "left" && H(), (t == null ? void 0 : t.value) == "right" && L(), u.value && (u.value.style.top = m + "px"), u.value && (u.value.style.left = h + "px");
  }
  function n() {
    m = new e(l).bottom, h = new e(l).left;
  }
  function f() {
    h = new e(l).left + (new c(l).clientWidth - new c(u).clientWidth), m = new e(l).bottom;
  }
  function W() {
    h = new e(l).left + (new c(l).clientWidth - new c(u).clientWidth) / 2, m = new e(l).bottom;
  }
  function b() {
    m = new e(l).top - new c(u).clientHeight, h = new e(l).left;
  }
  function _() {
    m = new e(l).top - new c(u).clientHeight, h = new e(l).left + (new c(l).clientWidth - new c(u).clientWidth) / 2;
  }
  function x() {
    h = new e(l).left + (new c(l).clientWidth - new c(u).clientWidth), m = new e(l).top - new c(u).clientHeight;
  }
  function H() {
    h = new e(l).left - new c(u).clientWidth, m = new e(l).top;
  }
  function L() {
    h = new e(l).right, m = new e(l).top;
  }
  return [w];
}
export {
  k as useDropdownPosition
};
