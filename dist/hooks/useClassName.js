import { ref as r, useAttrs as m, watch as c } from "vue";
function u(t, e) {
  const s = r(""), a = m();
  return c(
    t,
    () => {
      s.value = e().getClassName(a.class);
    },
    {
      immediate: !0
    }
  ), [s];
}
export {
  u as useClassName
};
