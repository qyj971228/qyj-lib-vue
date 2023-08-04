<script setup lang="ts">
import { Button } from 'qyj-lib-vue'
import { Dropdown, DropdownItem } from './lib';
</script>

<template>
  <div style="text-align: center; height: 100px;">
    <Dropdown>
      <Button weight="primary">123</Button>
      <template #dropdown>
        <DropdownItem>item1</DropdownItem>
        <DropdownItem>item1</DropdownItem>
      </template>
    </Dropdown>
    <Dropdown>
      <Button kind="error">321</Button>
      <template #dropdown>
        <DropdownItem>item2</DropdownItem>
        <DropdownItem>item2</DropdownItem>
      </template>
    </Dropdown>
  </div>
</template>
