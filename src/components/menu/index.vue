<script setup lang="ts">
import { computed, ref } from 'vue'

interface List {
  name: string
  className?: string
  children?: List[]
  collapsible?: boolean
  isCollapsed?: boolean
}

const list = ref<List[]>([
  {
    name: '1',
    children: [
      {
        name: '1-1'
      },
      {
        name: '1-2'
      }
    ]
  },
  {
    name: '2',
    children: [{ name: '2-1' }]
  }
])
const data = computed(() => {
  const arr: List[] = []
  for (let i = 0; i < list.value.length; i++) {
    const item: List = list.value[i]
    if (item.children && item.children.length > 0) {
      item.children.forEach((el: List) => {
        el.className = 'qyj-menu-level-secondary'
        el.collapsible = false
        el.isCollapsed = false
      })
      arr[i] = item
      arr[i].children?.unshift({ name: arr[i].name, className: 'qyj-menu-level-main', collapsible: true })
    }
  }
  return arr
})

const menuGroup = ref<HTMLElement[] | null>()
const menuItem = ref<HTMLElement[] | null>()

function onclickMenuItem(item: List, index: number) {
  if (!(menuGroup.value && menuItem.value)) return
  else {
    if (!item.collapsible && !list.value[index].isCollapsed) {
      // 如果有item折叠到item的高度
      // 没有则不折叠
      const height = menuItem.value[0].clientHeight
      menuGroup.value[index].style.height = height + 'px'
      list.value[index].isCollapsed = true
      return
    }
    if (!item.collapsible && list.value[index].isCollapsed) {
      const height = menuItem.value[0].clientHeight
      menuGroup.value[index].style.height = height * (list.value[index].children?.length ?? 0) + 'px'
      list.value[index].isCollapsed = false
      return
    }
  }
}
</script>
<template>
  <div class="qyj-menu">
    <ul
      class="qyj-menu-group"
      v-for="(item, index) in data"
      :key="index"
      ref="menuGroup"
    >
      <li
        :class="child.className"
        v-for="(child, i) in item.children"
        :key="i"
        @click="onclickMenuItem(item, index)"
        ref="menuItem"
      >
        {{ child.name }}
      </li>
    </ul>
  </div>
</template>

<style>
@import url('./index.css');
</style>
