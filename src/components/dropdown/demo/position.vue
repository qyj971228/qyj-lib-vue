<script setup lang="ts">
import { Button, Dropdown, DropdownItem } from '../../../lib'
// import { Button, Dropdown, DropdownItem } from 'qyj-lib-vue'
</script>

<template>
  <div style="padding-top: 100px; padding-left: 100px;">
      <Dropdown
        position="top-left"
        :data="[
          { name: 'item1', onclick: () => {} },
          { name: 'item2', onclick: () => {} }
        ]"
      >
        <Button weight="primary">top-left</Button>
        <Button weight="primary">top-left</Button>
      </Dropdown>
      <Dropdown position="top">
        <Button weight="primary">top</Button>
        <template #dropdown>
          <DropdownItem>item1</DropdownItem>
          <DropdownItem>item1</DropdownItem>
        </template>
      </Dropdown>
      <Dropdown position="top-right">
        <Button weight="primary">top-right</Button>
        <template #dropdown>
          <DropdownItem>item1</DropdownItem>
          <DropdownItem>item1</DropdownItem>
        </template>
      </Dropdown>
    </div>
    <div style="padding-top: 100px; padding-left: 100px;">
      <Dropdown position="left">
        <Button weight="primary">left</Button>
        <template #dropdown>
          <DropdownItem>item1</DropdownItem>
          <DropdownItem>item1</DropdownItem>
        </template>
      </Dropdown>
      <Dropdown position="right">
        <Button weight="primary">right</Button>
        <template #dropdown>
          <DropdownItem>item1</DropdownItem>
          <DropdownItem>item1</DropdownItem>
        </template>
      </Dropdown>
    </div>
    <div style="padding-top: 100px; padding-left: 100px;">
      <Dropdown position="bottom-left">
        <Button weight="primary">bottom-left</Button>
        <template #dropdown>
          <DropdownItem>item1</DropdownItem>
          <DropdownItem>item1</DropdownItem>
        </template>
      </Dropdown>
      <Dropdown position="bottom">
        <Button weight="primary">bottom</Button>
        <template #dropdown>
          <DropdownItem>item1</DropdownItem>
          <DropdownItem>item1</DropdownItem>
        </template>
      </Dropdown>
      <Dropdown position="bottom-right">
        <Button weight="primary">bottom-right</Button>
        <template #dropdown>
          <DropdownItem>item1</DropdownItem>
          <DropdownItem>item1</DropdownItem>
        </template>
      </Dropdown>
    </div>
</template>
