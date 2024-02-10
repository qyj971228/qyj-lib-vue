import { onMounted as r, onBeforeUnmount as i } from "vue";
function u(n, e) {
  r(() => {
    o();
  }), i(() => {
    t();
  });
  function o() {
    window.addEventListener(n, () => {
      e();
    });
  }
  function t() {
    window.removeEventListener(n, () => {
      e();
    });
  }
  return [o, t];
}
export {
  u as useWindowEventListener
};
