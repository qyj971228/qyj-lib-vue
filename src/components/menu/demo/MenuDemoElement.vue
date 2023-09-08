<script setup lang="ts">
import Menu from '../../menu/index.vue'
import MenuGroup from '../../menu-group/index.vue'
import MenuItem from '../../menu-item/index.vue'
import Dropdown from '../../dropdown/index.vue'
import DropdownItem from '../../dropdown-item/index.vue'
</script>

<template>
  <div>
    <Menu>
      <MenuGroup>
        <MenuItem>1</MenuItem>
        <Dropdown position="right">
          <MenuItem>1-1</MenuItem>
          <template #dropdown>
            <DropdownItem>1-1</DropdownItem>
            <DropdownItem>1-2</DropdownItem>
          </template>
        </Dropdown>
        <MenuItem>1-2</MenuItem>
        <MenuItem>1-3</MenuItem>
      </MenuGroup>
    </Menu>
    <Menu>
      <MenuGroup>
        <MenuItem>1</MenuItem>
        <MenuItem>1-1</MenuItem>
        <MenuItem>1-2</MenuItem>
        <MenuItem>1-3</MenuItem>
      </MenuGroup>
      <MenuGroup>
        <MenuItem>2</MenuItem>
        <MenuItem>2-1</MenuItem>
        <MenuItem>2-2</MenuItem>
      </MenuGroup>
    </Menu>
  </div>
</template>

<style></style>
