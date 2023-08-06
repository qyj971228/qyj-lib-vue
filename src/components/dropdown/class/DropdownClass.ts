import type { ToRefs } from 'vue'
import Component from '../../../class/ComponentClass'
import { PREFIX } from '../type/props'
import type { DropdownProps } from '../type/props'

class Dropdown extends Component<DropdownProps> {
  constructor(props: ToRefs<DropdownProps>) {
    super(PREFIX, props)
  }
}

export default Dropdown
