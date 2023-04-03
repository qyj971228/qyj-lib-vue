<script setup lang="ts">
  import { Hello } from 'qyj-lib-vue'
  import { Hi } from 'qyj-lib-vue'
  import 'qyj-lib-vue/dist/style.css'
</script>

<template>
  <div>
    <Hello></Hello>
    <Hi :msg="'123'"></Hi>
  </div>
</template>