import { ref as c } from "vue";
function l(n, u) {
  const [e, o] = n, t = c(u ?? n[0]);
  function i() {
    t.value = t.value == e ? o : e;
  }
  function f() {
    t.value = e;
  }
  function s() {
    t.value = o;
  }
  return [t, i, f, s];
}
export {
  l as useOppsite
};
