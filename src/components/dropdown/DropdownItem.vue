<script setup lang="ts"></script>

<template>
  <div class="dropdown-item">
    <slot></slot>
  </div>
</template>

<style scoped>
.dropdown-item {
  display: inline-block;
  height: fit-content;
  width: fit-content;
  padding: 3px 10px;
  background-color: transparent;
  cursor: pointer;
}
.dropdown-item:hover {
  border-radius: 5px;
  color: #fff;
  background-color: #007aff;
}
</style>
