export function throttle(callback: Function, delay: number) {
  let _flag = true
  return () => {
    if (_flag) {
      callback()
      _flag = false
      setTimeout(() => {
        _flag = true
      }, delay)
    }
  }
}

export class Util {
  static throttle(callback: Function, delay: number) {
    return throttle(callback, delay)
  }
}