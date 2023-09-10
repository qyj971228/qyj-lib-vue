import Client from '../class/ClientClass'
import Rect from '../class/RectClass'
import type { Position } from '../components/dropdown/type/props'
import { watch, type Ref } from 'vue'
import { useWindowEventListener } from './useWindowEventListener'
import { Util } from '../utils/index'

export function useDropdownPosition(position: Ref<Position | undefined> | undefined, triggerRef: Ref<HTMLElement | null>, dropdownRef: Ref<HTMLElement | null>) {
  let left = 0
  let top = 0

  const [add, clear] = useWindowEventListener('resize', Util.throttle(getPosition, 200))

  position &&
    position?.value &&
    watch(
      position,
      () => {
        clear()
        add()
      },
      { immediate: true }
    )

  function getPosition() {
    if (position?.value == 'bottom-left') _bottomLeft()
    if (position?.value == 'bottom-right') _bottomRight()
    if (position?.value == 'bottom') _bottom()
    if (position?.value == 'top-left') _topLeft()
    if (position?.value == 'top') _top()
    if (position?.value == 'top-right') _topRight()
    if (position?.value == 'left') _left()
    if (position?.value == 'right') _right()
    if (dropdownRef.value) dropdownRef.value.style.top = top + 'px'
    if (dropdownRef.value) dropdownRef.value.style.left = left + 'px'
  }

  function _bottomLeft() {
    top = new Rect(triggerRef).bottom
    left = new Rect(triggerRef).left
  }

  function _bottomRight() {
    left = new Rect(triggerRef).left + (new Client(triggerRef).clientWidth - new Client(dropdownRef).clientWidth)
    top = new Rect(triggerRef).bottom
  }

  function _bottom() {
    left = new Rect(triggerRef).left + (new Client(triggerRef).clientWidth - new Client(dropdownRef).clientWidth) / 2
    top = new Rect(triggerRef).bottom
  }

  function _topLeft() {
    top = new Rect(triggerRef).top - new Client(dropdownRef).clientHeight
    left = new Rect(triggerRef).left
  }

  function _top() {
    top = new Rect(triggerRef).top - new Client(dropdownRef).clientHeight
    left = new Rect(triggerRef).left + (new Client(triggerRef).clientWidth - new Client(dropdownRef).clientWidth) / 2
  }

  function _topRight() {
    left = new Rect(triggerRef).left + (new Client(triggerRef).clientWidth - new Client(dropdownRef).clientWidth)
    top = new Rect(triggerRef).top - new Client(dropdownRef).clientHeight
  }

  function _left() {
    left = new Rect(triggerRef).left - new Client(dropdownRef).clientWidth
    top = new Rect(triggerRef).top
  }

  function _right() {
    left = new Rect(triggerRef).right
    top = new Rect(triggerRef).top
  }

  return [getPosition]
}
