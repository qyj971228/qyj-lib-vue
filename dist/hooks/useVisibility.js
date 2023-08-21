import { useOppsite as b } from "./useOppsite.js";
function c(i, e = "hidden") {
  const [l, u, t, s] = b(e, ["visible", "hidden"]);
  function n() {
    i.value !== null && (i.value.style.visibility = e);
  }
  function v() {
    i.value !== null && (t(), i.value.style.visibility = l.value);
  }
  function a() {
    i.value !== null && (s(), i.value.style.visibility = l.value);
  }
  function y() {
    i.value !== null && (i.value.style.visibility ? (u(), i.value.style.visibility = l.value) : n());
  }
  return [v, a, y, l];
}
export {
  c as useVisibility
};
