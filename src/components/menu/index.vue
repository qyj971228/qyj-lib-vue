<script setup lang="ts">
import { toRef } from 'vue'
import MenuGroup from '../menu-group/index.vue'
import MenuItem from '../menu-item/index.vue'

type MenuProps = {
  data?: { name: string; onclick: Function }[][]
}

const props = defineProps<MenuProps>()

const data = toRef(props.data)
</script>
<template>
  <div
    v-if="!data"
    class="qyj-menu"
  >
    <slot></slot>
  </div>
  <div
    v-else
    class="qyj-menu"
  >
    <MenuGroup
      v-for="(group, groupIndex) in data"
      :key="groupIndex"
    >
      <MenuItem
        v-for="(item, itemIndex) in group"
        :key="itemIndex"
        @click="item.onclick(item.name, itemIndex)"
      >
        {{ item.name }}
      </MenuItem>
    </MenuGroup>
  </div>
</template>

<style>
@import url('./index.css');
</style>
