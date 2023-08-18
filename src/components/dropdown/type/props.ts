const PREFIX = 'qyj-dropdown'

const POSITION = ['bottom', 'top', 'left', 'right', 'bottom-left', 'bottom-right', 'top-left', 'top-right'] as const

// const close = ['click', 'hover']
// const open = ['click', 'hover']

type Position = (typeof POSITION)[number]

type DropdownProps = Partial<{
  position: Position
}>

export type { DropdownProps, Position }
export { PREFIX }
