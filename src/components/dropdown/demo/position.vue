<script setup lang="ts">
import { Button, Dropdown, DropdownItem } from '../../../lib'
</script>

<template>
  <div style="padding-top: 100px; text-align: center; display: flex">
    <div style="flex: 1">
      <Dropdown position="top-left">
        <Button weight="primary">top-left</Button>
        <Button weight="primary">top-left</Button>
        <template #dropdown>
          <DropdownItem>item1</DropdownItem>
          <DropdownItem>item1</DropdownItem>
        </template>
      </Dropdown>
    </div>
    <div style="flex: 1">
      <Dropdown position="top">
        <Button weight="primary">top</Button>
        <template #dropdown>
          <DropdownItem>item1</DropdownItem>
          <DropdownItem>item1</DropdownItem>
        </template>
      </Dropdown>
    </div>
    <div style="flex: 1">
      <Dropdown position="top-right">
        <Button weight="primary">top-right</Button>
        <template #dropdown>
          <DropdownItem>item1</DropdownItem>
          <DropdownItem>item1</DropdownItem>
        </template>
      </Dropdown>
    </div>
  </div>
  <div style="padding-top: 100px; text-align: center; display: flex">
    <div style="flex: 1">
      <Dropdown position="left">
        <Button weight="primary">left</Button>
        <template #dropdown>
          <DropdownItem>item1</DropdownItem>
          <DropdownItem>item1</DropdownItem>
        </template>
      </Dropdown>
    </div>
    <div style="flex: 1"></div>
    <div style="flex: 1">
      <Dropdown position="right">
        <Button weight="primary">right</Button>
        <template #dropdown>
          <DropdownItem>item1</DropdownItem>
          <DropdownItem>item1</DropdownItem>
        </template>
      </Dropdown>
    </div>
  </div>
  <div style="padding-top: 100px; text-align: center; display: flex">
    <div style="flex: 1">
      <Dropdown position="bottom-left">
        <Button weight="primary">bottom-left</Button>
        <template #dropdown>
          <DropdownItem>item1</DropdownItem>
          <DropdownItem>item1</DropdownItem>
        </template>
      </Dropdown>
    </div>
    <div style="flex: 1">
      <Dropdown position="bottom">
        <Button weight="primary">bottom</Button>
        <template #dropdown>
          <DropdownItem>item1</DropdownItem>
          <DropdownItem>item1</DropdownItem>
        </template>
      </Dropdown>
    </div>
    <div style="flex: 1">
      <Dropdown position="bottom-right">
        <Button weight="primary">bottom-right</Button>
        <template #dropdown>
          <DropdownItem>item1</DropdownItem>
          <DropdownItem>item1</DropdownItem>
        </template>
      </Dropdown>
    </div>
  </div>
</template>
