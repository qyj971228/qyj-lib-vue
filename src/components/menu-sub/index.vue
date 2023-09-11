<script lang="ts">
export default {
  name: 'MenuSub'
}
</script>
<script setup lang="ts">
import { inject, toRef } from 'vue'
import type { List } from '../menu/index.vue'

type SubMenuProps = {
  data: List[]
}

const props = defineProps<SubMenuProps>()

const data = toRef(props.data)

const onSelect = inject('onSelect') as Function

</script>

<template>
  <li
    :class="sub.level == 1 ? 'qyj-menu-sub' : 'qyj-menu-item'"
    v-for="(sub, subIndex) in data"
    :key="subIndex"
    @click.stop="onSelect(sub, subIndex)"
  >
    {{ sub.name }}
    <MenuSub
      v-if="sub.children"
      :data="sub.children"
    ></MenuSub>
  </li>
</template>

<style>
@import url('./index.css');
</style>
