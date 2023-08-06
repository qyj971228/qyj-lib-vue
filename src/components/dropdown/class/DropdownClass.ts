import { ToRefs } from 'vue'
import Component from '../../../class/ComponentClass'
import { DropdownProps, PREFIX } from '../type/props'

class Dropdown extends Component<DropdownProps> {
  constructor(props: ToRefs<DropdownProps>) {
    super(PREFIX, props)
  }
}

export default Dropdown
