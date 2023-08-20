var c = Object.defineProperty;
var h = (i, t, e) => t in i ? c(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var l = (i, t, e) => (h(i, typeof t != "symbol" ? t + "" : t, e), e);
class u {
  constructor(t) {
    l(this, "clientWidth", 0);
    l(this, "clientHeight", 0);
    var e, n;
    t.value !== null && (this.clientHeight = ((e = t.value) == null ? void 0 : e.clientHeight) ?? 0, this.clientWidth = ((n = t.value) == null ? void 0 : n.clientWidth) ?? 0);
  }
}
export {
  u as default
};
