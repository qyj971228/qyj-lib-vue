<script setup lang="ts">
import Menu from '../../menu/index.vue'

function onSelect(item: any, index: any) {
  console.log(item.childNodeCount)
}
</script>

<template>
  <div>
    <Menu
      :onSelect="onSelect"
      :data="[
        { name: '1' },
        { name: '2' },
        {
          name: '3',
          children: [
            {
              name: '3-1',
              children: [
                { name: '3-1-1', children: [{ name: '3-1-1-1' }] },
                { name: '3-1-2', children: [{ name: '3-1-2-2' }] }
              ]
            },
            { name: '3-2' }
          ]
        },
        { name: '4' },
        { name: '5' }
      ]"
    ></Menu>
  </div>
</template>

<style></style>
