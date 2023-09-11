<script setup lang="ts">
import { Button, Dropdown, DropdownItem } from '../../../lib'
// import { Button, Dropdown, DropdownItem } from 'qyj-lib-vue'
</script>

<template>
  <div style="padding-top: 100px; padding-left: 150px;">
      <Dropdown
        position="top-left"
        :data="[
          { name: 'position-item', onclick: () => {} },
          { name: 'item2', onclick: () => {} }
        ]"
      >
        <Button size="l">top-left</Button>
      </Dropdown>
      <Dropdown position="top">
        <Button>top</Button>
        <template #dropdown>
          <DropdownItem>position-item</DropdownItem>
          <DropdownItem>position-item</DropdownItem>
        </template>
      </Dropdown>
      <Dropdown position="top-right">
        <Button size="s">top-right</Button>
        <template #dropdown>
          <DropdownItem>position-item</DropdownItem>
          <DropdownItem>position-item</DropdownItem>
        </template>
      </Dropdown>
    </div>
    <div style="padding-top: 100px; padding-left: 150px;">
      <Dropdown position="left">
        <Button>left</Button>
        <template #dropdown>
          <DropdownItem>position-item</DropdownItem>
          <DropdownItem>position-item</DropdownItem>
        </template>
      </Dropdown>
      <Dropdown position="right">
        <Button>right</Button>
        <template #dropdown>
          <DropdownItem>position-item</DropdownItem>
          <DropdownItem>position-item</DropdownItem>
        </template>
      </Dropdown>
    </div>
    <div style="padding-top: 100px; padding-left: 150px;">
      <Dropdown position="bottom-left">
        <Button weight="primary">bottom-left</Button>
        <template #dropdown>
          <DropdownItem>position-item</DropdownItem>
          <DropdownItem>position-item</DropdownItem>
        </template>
      </Dropdown>
      <Dropdown position="bottom">
        <Button weight="primary" kind="warn">bottom</Button>
        <template #dropdown>
          <DropdownItem>position-item</DropdownItem>
          <DropdownItem>position-item</DropdownItem>
        </template>
      </Dropdown>
      <Dropdown position="bottom-right">
        <Button weight="primary" kind="error">bottom-right</Button>
        <template #dropdown>
          <DropdownItem>position-item</DropdownItem>
          <DropdownItem>position-item</DropdownItem>
        </template>
      </Dropdown>
    </div>
</template>
