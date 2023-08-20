import { onMounted as o, onBeforeUnmount as t } from "vue";
function r(n, e) {
  o(() => {
    window.addEventListener(n, e());
  }), t(() => {
    window.removeEventListener(n, e());
  });
}
export {
  r as useWindowEventListener
};
