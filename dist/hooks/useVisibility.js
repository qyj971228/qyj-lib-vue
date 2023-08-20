import { useOppsite as b } from "./useOppsite.js";
function c(i, e = "visible") {
  const [l, u, s, t] = b(e, ["visible", "hidden"]);
  function v() {
    i.value !== null && (i.value.style.visibility = e);
  }
  function n() {
    i.value !== null && (s(), i.value.style.visibility = l.value);
  }
  function a() {
    i.value !== null && (t(), i.value.style.visibility = l.value);
  }
  function y() {
    i.value !== null && (i.value.style.visibility ? (u(), i.value.style.visibility = l.value) : v());
  }
  return [n, a, y];
}
export {
  c as useVisibility
};
