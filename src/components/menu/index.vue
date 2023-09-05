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
  collapsible?: boolean
  isCollapsed?: boolean
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

function onClickPrimaryItem(item: List, index: number) {
  console.log(item, index)
  if (item.children?.length == 1) return
  if (!(menuGroup.value && menuItem.value)) return
  // 未折叠
  if (!item.collapsible && !list.value[index].isCollapsed) {
    const height = menuItem.value[0].clientHeight // 一级菜单的高度
    menuGroup.value[index].style.height = height + 'px' // 菜单分组高度只显示一级菜单
    list.value[index].isCollapsed = true // 变为折叠状态
    return
  }
  // 已折叠
  if (!item.collapsible && list.value[index].isCollapsed) {
    const primaryHeight = menuItem.value[0].clientHeight // 一级菜单的高度
    const secondaryHeight = menuItem.value[1].clientHeight // 二级菜单的高度
    menuGroup.value[index].style.height = primaryHeight + secondaryHeight * ((list.value[index].children?.length ?? 1) - 1) + 'px'
    list.value[index].isCollapsed = false // 变为折叠状态
    return
  }
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
