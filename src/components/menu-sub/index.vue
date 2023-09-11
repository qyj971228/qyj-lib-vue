<script lang="ts">
export default {
  name: 'MenuSub'
}
</script>
<script setup lang="ts">
import { inject, toRef } from 'vue'
import type { Node } from '../menu/index.vue'

type SubMenuProps = {
  data: Node[]
}

const props = defineProps<SubMenuProps>()

const data = toRef(props.data)

const onSelect = inject('onSelect') as Function

function onMenuItemClick(sub: any, subIndex: any) {
  sub.collapse = !sub.collapse
  onSelect(sub, subIndex)
}
</script>

<template>
  <li
    :class="sub.level == 1 ? 'qyj-menu-sub' : 'qyj-menu-item'"
    v-for="(sub, subIndex) in data"
    :key="subIndex"
    @click.stop="onMenuItemClick(sub, subIndex)"
    :style="{ height: sub.collapse ? '30px' : (sub.childNodeCount ?? 1) * 30 + 'px' }"
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
