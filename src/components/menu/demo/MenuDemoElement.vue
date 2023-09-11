<script setup lang="ts">
import Menu from '../../menu/index.vue'
import MenuSub from '../../menu-sub/index.vue'
import MenuItem from '../../menu-item/index.vue'
</script>

<template>
  <div>
    <Menu>
      <MenuSub>
        <MenuItem>1</MenuItem>
        <MenuItem>1-1</MenuItem>
        <MenuItem>1-2</MenuItem>
        <MenuItem>1-3</MenuItem>
      </MenuSub>
      <MenuSub>
        <MenuItem>2</MenuItem>
        <MenuItem>2-1</MenuItem>
        <MenuItem>2-2</MenuItem>
      </MenuSub>
    </Menu>
  </div>
</template>

<style></style>
