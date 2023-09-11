<script setup lang="ts">
import { Button, Dropdown } from '../../../lib'

function onSelect(item: any, index: any) {
  console.log(item, index)
}
</script>

<template>
  <div style="padding-top: 100px; padding-left: 150px">
    <Dropdown
      position="top-left"
      :data="[{ name: 'item1' }, { name: 'item2' }]"
      @onSelect="onSelect"
    >
      <Button size="l">top-left</Button>
    </Dropdown>
    <Dropdown
      position="top"
      :data="[{ name: 'item1' }, { name: 'item2' }]"
    >
      <Button>top</Button>
    </Dropdown>
    <Dropdown
      position="top-right"
      :data="[{ name: 'item1' }, { name: 'item2' }]"
    >
      <Button size="s">top-right</Button>
    </Dropdown>
  </div>
  <div style="padding-top: 100px; padding-left: 150px">
    <Dropdown
      position="left"
      :data="[{ name: 'item1' }, { name: 'item2' }]"
    >
      <Button>left</Button>
    </Dropdown>
    <Dropdown
      position="right"
      :data="[{ name: 'item1' }, { name: 'item2' }]"
    >
      <Button>right</Button>
    </Dropdown>
  </div>
  <div style="padding-top: 100px; padding-left: 150px">
    <Dropdown
      position="bottom-left"
      :data="[{ name: 'item1' }, { name: 'item2' }]"
    >
      <Button weight="primary">bottom-left</Button>
    </Dropdown>
    <Dropdown
      position="bottom"
      :data="[{ name: 'item1' }, { name: 'item2' }]"
    >
      <Button
        weight="primary"
        kind="warn"
      >
        bottom
      </Button>
    </Dropdown>
    <Dropdown
      position="bottom-right"
      :data="[{ name: 'item1' }, { name: 'item2' }]"
    >
      <Button
        weight="primary"
        kind="error"
      >
        bottom-right
      </Button>
    </Dropdown>
  </div>
</template>
