import e from "../class/ClientClass.js";
import n from "../class/RectClass.js";
import { watch as _ } from "vue";
import { useWindowEventListener as x } from "./useWindowEventListener.js";
function z(u, t, l) {
  let i = 0, c = 0;
  x("resize", h), _(
    u,
    () => {
      h();
    },
    { immediate: !0 }
  );
  function h() {
    u.value = u.value ?? "bottom", u.value == "bottom-left" && m(), u.value == "bottom-right" && w(), u.value == "bottom" && o(), u.value == "top-left" && a(), u.value == "top" && v(), u.value == "top-right" && b(), u.value == "left" && W(), u.value == "right" && f(), l.value && (l.value.style.top = c + "px"), l.value && (l.value.style.left = i + "px");
  }
  function m() {
    c = new n(t).bottom, i = new n(t).left;
  }
  function w() {
    i = new n(t).left + (new e(t).clientWidth - new e(l).clientWidth), c = new n(t).bottom;
  }
  function o() {
    i = new n(t).left + (new e(t).clientWidth - new e(l).clientWidth) / 2, c = new n(t).bottom;
  }
  function a() {
    c = new n(t).top - new e(l).clientHeight, i = new n(t).left;
  }
  function v() {
    c = new n(t).top - new e(l).clientHeight, i = new n(t).left + (new e(t).clientWidth - new e(l).clientWidth) / 2;
  }
  function b() {
    i = new n(t).left + (new e(t).clientWidth - new e(l).clientWidth), c = new n(t).top - new e(l).clientHeight;
  }
  function W() {
    i = new n(t).left - new e(l).clientWidth, c = new n(t).top;
  }
  function f() {
    i = new n(t).right, c = new n(t).top;
  }
  return [h];
}
export {
  z as useDropdownPosition
};
