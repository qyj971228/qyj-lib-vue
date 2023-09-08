<script setup lang="ts">
import Menu from '../../menu/index.vue'
import MenuGroup from '../../menu-group/index.vue'
import MenuItem from '../../menu-item/index.vue'
</script>

<template>
  <div>
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
