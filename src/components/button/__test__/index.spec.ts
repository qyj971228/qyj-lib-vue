import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

import Button from '../index.vue'

describe('Button', () => {
  test('props { kind: "normal" }', () => {
    const wrapper = mount(Button, {
      props: { kind: 'normal' }
    })
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['qyj-btn-normal']))
  })
})
