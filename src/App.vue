<script setup lang="ts">
  import { Hello } from 'qyj-lib-vue'
  import { Hi } from 'qyj-lib-vue'
</script>

<template>
  <div>
    <Hello style="color: red;"></Hello>
    <Hi :msg="'123'"></Hi>
  </div>
</template>