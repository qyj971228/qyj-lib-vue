<script setup lang="ts">
  import { Hello } from 'qyj-lib-vue'
  import { Hi } from 'qyj-lib-vue'
  // import H from '../dist/hello/hello'
  // import H2 from './lib/hello/hello'
</script>

<template>
  <div>
    <!-- <H></H> -->
    <!-- <H2></H2> -->
    <Hello style="color: red;"></Hello>
    <Hi :msg="'123'"></Hi>
  </div>
</template>