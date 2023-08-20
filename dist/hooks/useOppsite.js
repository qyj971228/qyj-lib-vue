import { ref as r } from "vue";
function p(o, u) {
  const [e, n] = u, t = r(o);
  function i() {
    t.value = t.value == e ? n : e;
  }
  function f() {
    t.value = e;
  }
  function s() {
    t.value = n;
  }
  return [t, i, f, s];
}
export {
  p as useOppsite
};
