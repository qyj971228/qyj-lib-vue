function l(r, e) {
  let t = !0;
  return () => {
    t && (r(), t = !1, setTimeout(() => {
      t = !0;
    }, e));
  };
}
class u {
  static throttle(e, t) {
    return l(e, t);
  }
}
export {
  u as Util,
  l as throttle
};
