import { onMounted as o, onBeforeUnmount as t } from "vue";
function i(n, e) {
  o(() => {
    window.addEventListener(n, () => {
      e();
    });
  }), t(() => {
    window.addEventListener(n, () => {
      e();
    });
  });
}
export {
  i as useWindowEventListener
};
