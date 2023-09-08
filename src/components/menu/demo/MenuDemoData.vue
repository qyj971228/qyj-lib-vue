<script setup lang="ts">
import Menu from '../../menu/index.vue'
</script>

<template>
  <div>
    <Menu
      :data="[
        [
          { name: '1', onclick: (item: string, index: number) => { console.log(item, index) } },
          { name: '1-1', onclick: (item: string, index: number) => { console.log(item, index) } },
          { name: '1-2', onclick: () => {} }
        ],
        [
          { name: '2', onclick: () => {} },
          { name: '2-1', onclick: () => {} }
        ]
      ]"
    ></Menu>
  </div>
</template>

<style></style>
