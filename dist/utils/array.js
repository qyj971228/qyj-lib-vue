const n = (t, i) => {
  const e = t.indexOf(i);
  e <= -1 || e >= 0 && t.splice(e, 1);
}, s = (t, i, e) => {
  const c = t.indexOf(i);
  c <= -1 || c >= 0 && t.splice(c, 1, e);
};
class l {
  static Delete(i, e) {
    n(i, e);
  }
  static Replace(i, e, c) {
    s(i, e, c);
  }
}
export {
  l as Array,
  n as arrDel,
  s as arrReplace
};
