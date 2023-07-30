import type { Meta, StoryObj } from '@storybook/vue3'

import Button from '../../components/button/index.vue'

const meta: Meta<typeof Button> = {
  title: 'Lib/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['s', 'm', 'l'] },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    size: 'l'
  },
};
