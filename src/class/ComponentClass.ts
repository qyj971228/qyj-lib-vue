import { Array } from '../utils/index'

class Component<T extends Object> {
  constructor(prefix: string, props: T, booleanProp?: string[]) {
    this.classList = [prefix]
    this.prefix = prefix
    this.props = props
    this.setStrProps()
    this.setBoolProps(booleanProp)
  }

  public readonly _ = '-'
  public readonly prefix: string
  public readonly suffixs: string[] = []
  public readonly classList: string[]
  public readonly props: T

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
    Array.Delete(this.suffixs, className)
  }

  // 替换class
  public replaceClass(replace: string, replacedBy: string): void {
    Array.Replace(this.suffixs, replace, replacedBy)
  }

  // 设置str型prop
  public setStrProps(): void {
    Object.keys(this.props).forEach((key) => {
      const value = this.props[key as keyof T]
      if (typeof value == 'string') this.addClass(value)
    })
  }

  // 设置bool型prop
  public setBoolProps(booleanProps?: string[]): void {
    booleanProps &&
      booleanProps.forEach((key) => {
        const value = this.props[key as keyof T]
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
