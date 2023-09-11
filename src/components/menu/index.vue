<script setup lang="ts">
import { toRef } from 'vue'
import MenuSub from '../menu-sub/index.vue'
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
    <MenuSub
      v-for="(sub, subIndex) in data"
      :key="subIndex"
    >
      <MenuItem
        v-for="(item, itemIndex) in sub"
        :key="itemIndex"
        @click="item.onclick(item.name, itemIndex)"
      >
        {{ item.name }}
      </MenuItem>
    </MenuSub>
  </div>
</template>

<style>
@import url('./index.css');
</style>
