import { arrDel, arrReplace } from '../utils/tool'
import type { ToRefs } from 'vue'

class Component<T> {
  constructor(prefix: string, props: ToRefs<T>, booleanProp?: string[]) {
    this.classList = [prefix]
    this.prefix = prefix
    this.props = props
    this.setStrProps<T>()
    this.setBoolProps<T>(booleanProp)
  }

  public readonly _ = '-'
  public readonly prefix: string
  public readonly suffixs: string[] = []
  public readonly classList: string[]
  public readonly props: ToRefs<T>

  // 组合class
  public composeClass(classList: string[]): string {
    return classList.join(this._)
  }

  // 新增class
  public addClass(className?: string): void {
    if (className == undefined) return
    this.suffixs.push(className)
  }

  // 移除class
  public removeClass(className?: string): void {
    arrDel(this.suffixs, className)
  }

  // 替换class
  public replaceClass(replace: string, replacedBy: string): void {
    arrReplace(this.suffixs, replace, replacedBy)
  }

  // 设置str型prop
  public setStrProps<T>(): void {
    Object.keys(this.props).forEach((key) => {
      const value = this.props[key as keyof ToRefs<T>]?.value
      if (typeof value == 'string') this.addClass(value)
    })
  }

  // 设置bool型prop
  public setBoolProps<T>(booleanProps: string[]): void {
    booleanProps.forEach((key) => {
      const value = this.props[key as keyof T]?.value
      if (value == true) this.addClass(key)
    })
  }

  // 计算classList
  private computeClassList() {
    return this.classList.concat(this.suffixs.map((suffix) => `${this.prefix}${this._}${suffix}`))
  }

  // 获取str型class
  public getClassName(className?: string): string {
    return this.computeClassList()
      .concat(className ? className.split(' ') : '')
      .join(' ')
  }

  // 获取array型class
  public getClassList(className?: string): string[] {
    return this.computeClassList().concat(className ? [className] : [])
  }
}
export default Component
