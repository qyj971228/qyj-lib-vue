const t = (e, n) => {
  const i = e.indexOf(n);
  i <= -1 || i >= 0 && e.splice(i, 1);
}, f = (e, n, i) => {
  const c = e.indexOf(n);
  c <= -1 || c >= 0 && e.splice(c, 1, i);
};
export {
  t as arrDel,
  f as arrReplace
};
