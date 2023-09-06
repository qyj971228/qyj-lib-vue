<script setup lang="ts">
import { computed, ref, toRef } from 'vue'

const props = defineProps<MenuProps>()

type MenuProps = {
  list: List[]
}

interface List {
  name: string
  className?: string
  children?: List[]
  collapsible?: boolean // 可折叠性
  isCollapsed?: boolean // 是否折叠
  level?: number
}

const list = toRef(props.list)

const listData = computed(() => {
  let arr: List[] = []
  arr = list.value.map((item: List) => {
    if (!item.children || item.children.length == 0) {
      item = { ...item, children: [] }
    }
    item.children?.forEach((el: List) => { // 二级菜单状态与样式
      el.className = 'qyj-menu-level-secondary'
      el.collapsible = false
      el.isCollapsed = false
    })
    item.children?.unshift({ name: item.name, className: 'qyj-menu-level-main', collapsible: true }) // 一级菜单状态与样式
    return item
  })
  return arr
})

const menuGroup = ref<HTMLElement[] | null>()
const menuItem = ref<HTMLElement[] | null>()

function onClickPrimaryItem(primaryItem: List, primaryIndex: number) {
  console.log(primaryItem, primaryIndex)
  if (primaryItem.children?.length == 1) return
  if (!(menuGroup.value && menuItem.value)) return
  const primaryHeight = menuItem.value.find((el) => el.className == 'qyj-menu-level-main')?.clientHeight ?? 0
  const secondaryHeight = menuItem.value.find((el) => el.className == 'qyj-menu-level-secondary')?.clientHeight ?? 0
  const computedHeight = primaryHeight + secondaryHeight * ((primaryItem.children?.length ?? 1) - 1)
  menuGroup.value[primaryIndex].style.height = computedHeight + 'px'
  menuGroup.value[primaryIndex].style.lineHeight = primaryHeight + 'px'
  setTimeout(() => {
    if (!primaryItem.collapsible && !list.value[primaryIndex].isCollapsed) {
      menuGroup.value && (menuGroup.value[primaryIndex].style.height = primaryHeight + 'px') // 菜单分组高度只显示一级菜单
      list.value[primaryIndex].isCollapsed = true // 变为折叠状态
      return
    }
    if (!primaryItem.collapsible && list.value[primaryIndex].isCollapsed) {
      menuGroup.value && (menuGroup.value[primaryIndex].style.height = primaryHeight + secondaryHeight * ((list.value[primaryIndex].children?.length ?? 1) - 1) + 'px')
      list.value[primaryIndex].isCollapsed = false // 变为折叠状态
      return
    }
  })
}

function onClickSecondaryItem(item: List, index: number) {
  console.log(item, index)
}
</script>
<template>
  <div class="qyj-menu">
    <ul
      class="qyj-menu-group"
      v-for="(primaryItem, primaryIndex) in listData"
      :key="primaryIndex"
      ref="menuGroup"
    >
      <li
        :class="secondaryItem.className"
        v-for="(secondaryItem, secondaryIndex) in primaryItem?.children"
        :key="secondaryIndex"
        @click="secondaryIndex == 0 ? onClickPrimaryItem(primaryItem, primaryIndex) : onClickSecondaryItem(secondaryItem, secondaryIndex)"
        ref="menuItem"
      >
        {{ secondaryItem.name }}
      </li>
    </ul>
  </div>
</template>

<style>
@import url('./index.css');
</style>
