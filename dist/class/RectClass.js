var g = Object.defineProperty;
var s = (l, t, e) => t in l ? g(l, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[t] = e;
var i = (l, t, e) => (s(l, typeof t != "symbol" ? t + "" : t, e), e);
class c {
  constructor(t) {
    i(this, "top", 0);
    i(this, "right", 0);
    i(this, "bottom", 0);
    i(this, "left", 0);
    var e, n, u, o;
    t.value !== null && (this.left = ((e = t.value) == null ? void 0 : e.getBoundingClientRect().left) ?? 0, this.right = ((n = t.value) == null ? void 0 : n.getBoundingClientRect().right) ?? 0, this.bottom = ((u = t.value) == null ? void 0 : u.getBoundingClientRect().bottom) ?? 0, this.top = ((o = t.value) == null ? void 0 : o.getBoundingClientRect().top) ?? 0);
  }
}
export {
  c as default
};
