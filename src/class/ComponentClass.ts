import type { ToRefs } from "vue"

class Component<T> {
  constructor(prefix: string, props: ToRefs<T>, booleanProp: string[]) {
    this.classList = [prefix]
    this.prefix = prefix
    this.setStrProps<T>(props)
    this.setBoolProps<T>(props, booleanProp)
  }

  public readonly _ = '-'
  public readonly prefix: string
  public readonly suffixs: string[] = []
  public readonly classList: string[]

  public setProp(prop: string | undefined) {
    if (prop == undefined) return
    this.suffixs.push(prop)
  }

  public setPropByBoolean(prop: boolean | undefined, val: string) {
    if (prop == undefined) return
    if (prop == true) this.suffixs.push(val)
  }

  public setStrProps<T>(props: ToRefs<T>) {
    Object.keys(props).forEach(key => {
      const value = props[key as keyof ToRefs<T>]?.value
      if (typeof value == 'string') this.setProp(value)
    })
  }

  public setBoolProps<T>(props: ToRefs<T>, booleanProps: string[]) {
    booleanProps.forEach(key => {
      const value = props[key as keyof T]?.value
      if (value == true) this.setProp(key)
    })
  }

  public getComponentClassName() {
    return this.suffixs.map(suffix => `${this.prefix}${this._}${suffix}`)
  }

  public getClassName(className?: string) {
    const componentClassName = this.getComponentClassName()
    if (className) {
      return this.classList.concat(componentClassName, className.split(' ')).join(' ')
    }
    return this.classList.concat(componentClassName).join(' ')
  }
}
export default Component