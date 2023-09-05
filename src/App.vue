<script setup lang="ts">
// import DropdownDemoPosition from './components/dropdown/demo/position.vue'
import Menu from './components/menu/index.vue'
</script>

<template>
  <!-- <DropdownDemoPosition></DropdownDemoPosition> -->
  <Menu
    :list="[
      {
        name: '1',
        children: [{ name: '1-1' }, { name: '1-2' }, { name: '1-3' }, { name: '1-4' }]
      },
      {
        name: '2',
        children: [{ name: '2-1' }]
      }
    ]"
  ></Menu>
</template>

<style>
@import url(./style/animation.css);
</style>
