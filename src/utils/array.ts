export const arrDel = (arr: any[], find: any) => {
  const index = arr.indexOf(find)
  if (index <= -1) return
  if (index >= 0) {
    arr.splice(index, 1)
  }
}

export const arrReplace = (arr: any[], find: any, replace: any) => {
  const index = arr.indexOf(find)
  if (index <= -1) return
  if (index >= 0) {
    arr.splice(index, 1, replace)
  }
}

export class Array {
  static Delete(arr: any[], find: any) {
    arrDel(arr, find)
  }
  static Replace(arr: any[], find: any, replace: any) {
    arrReplace(arr, find, replace)
  }
}
