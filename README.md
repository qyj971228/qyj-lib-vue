npm https://www.npmjs.com/package/qyj-lib-vue
```
<script setup lang="ts">
import { Button, Dropdown, Menu } from 'qyj-lib-vue/dist/lib'

function onSelect(item: any, index: any) {
  console.log(item, index)
}
</script>

<template>
  <Dropdown
    position="top-left"
    :data="[{ name: 'item1' }, { name: 'item2' }]"
    @onSelect="onSelect"
  >
    <Button size="l">top-left</Button>
  </Dropdown>

  <Menu
    :onSelect="onSelect"
    :data="[
      { name: '1' },
      { name: '2' },
      {
        name: '3',
        children: [
          {
            name: '3-1',
            children: [
              { name: '3-1-1', children: [{ name: '3-1-1-1' }] },
              { name: '3-1-2', children: [{ name: '3-1-2-2' }] },
            ],
          },
          { name: '3-2' },
        ],
      },
      { name: '4' },
      { name: '5' },
    ]"
  ></Menu>
</template>

<style>
@import url('qyj-lib-vue/dist/style.css');
</style>

```
