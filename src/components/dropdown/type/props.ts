const PREFIX = 'qyj-dropdown'

const POSITION = ['bottom', 'top', 'left', 'right', 'bottom-left', 'bottom-right', 'top-left', 'top-right'] as const

const CLOSE = ['click', 'hover'] as const
const OPEN = ['click', 'hover'] as const

type Position = (typeof POSITION)[number]
type Close = (typeof CLOSE)[number]
type Open = (typeof OPEN)[number]

type Item = { name: string }

type DropdownProps = Partial<{
  position: Position
  close: Close
  open: Open
  data: Item[]
}>

export type { DropdownProps, Position }
export { PREFIX }
