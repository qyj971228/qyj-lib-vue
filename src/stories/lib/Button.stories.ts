import type { Meta, StoryObj } from '@storybook/vue3'

import { Button } from '../../lib/index'
// import { Button } from 'qyj-lib-vue'
// import './hello.css'

const meta: Meta<typeof Button> = {
  title: 'Lib/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['s', 'm', 'l', null] },
    kind: { control: 'select', options: ['normal', 'warn', 'error', null] },
    weight: { control: 'select', options: ['primary', 'text', 'link', null] },
    ghost: { control: 'boolean' },
    dashed: { control: 'boolean' },
    round: { control: 'boolean' }
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    size: 'l'
    // class: 'hello'
  }
}
