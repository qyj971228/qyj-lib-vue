import { ref, type Ref, type ToRefs } from 'vue'
import Component from '../../../class/ComponentClass'
import { PREFIX } from '../type/props'
import type { DropdownProps, Position } from '../type/props'
import { Client, Rect } from '../../../utils/hook'

class Dropdown extends Component<DropdownProps> {
  constructor(props: ToRefs<DropdownProps>, triggerRef: Ref<Element | null>, dropdownRef: Ref<Element | null>) {
    super(PREFIX, props)
    this.triggerRef = triggerRef
    this.dropdownRef = dropdownRef
  }

  readonly left: Ref = ref(0)
  readonly top: Ref = ref(0)
  readonly triggerRef: Ref<Element | null>
  readonly dropdownRef: Ref<Element | null>

  public getPosition() {
    const position: Position = this.props.position?.value ?? 'bottom'
    if (position == 'bottom-left') this._bottomLeft()
    if (position == 'bottom-right') this._bottomRight()
    if (position == 'bottom') this._bottom()
    if (position == 'top-left') this._topLeft()
    if (position == 'top') this._top()
    if (position == 'top-right') this._topRight()
    if (position == 'left') this._left()
    if (position == 'right') this._right()
  }
  public _bottomLeft() {
    this.top.value = new Rect(this.triggerRef).bottom
    this.left.value = new Rect(this.triggerRef).left
  }

  public _bottomRight() {
    this.left.value = new Rect(this.triggerRef).left + (new Client(this.triggerRef).clientWidth - new Client(this.dropdownRef).clientWidth)
    this.top.value = new Rect(this.triggerRef).bottom
  }

  public _bottom() {
    this.left.value = new Rect(this.triggerRef).left + (new Client(this.triggerRef).clientWidth - new Client(this.dropdownRef).clientWidth) / 2
    this.top.value = new Rect(this.triggerRef).bottom
  }

  public _topLeft() {
    this.top.value = new Rect(this.triggerRef).top - new Client(this.dropdownRef).clientHeight
    this.left.value = new Rect(this.triggerRef).left
  }

  public _top() {
    this.top.value = new Rect(this.triggerRef).top - new Client(this.dropdownRef).clientHeight
    this.left.value = new Rect(this.triggerRef).left + (new Client(this.triggerRef).clientWidth - new Client(this.dropdownRef).clientWidth) / 2
  }

  public _topRight() {
    this.left.value = new Rect(this.triggerRef).left + (new Client(this.triggerRef).clientWidth - new Client(this.dropdownRef).clientWidth)
    this.top.value = new Rect(this.triggerRef).top - new Client(this.dropdownRef).clientHeight
  }

  public _left() {
    this.left.value = new Rect(this.triggerRef).left - new Client(this.dropdownRef).clientWidth
    this.top.value = new Rect(this.triggerRef).top
  }

  public _right() {
    this.left.value = new Rect(this.triggerRef).right
    this.top.value = new Rect(this.triggerRef).top
  }
}

export default Dropdown
