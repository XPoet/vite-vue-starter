<script setup lang="ts">
import router, { routes } from '@/router'

const navList = ref(routes.map(({ path, name }) => ({ path, name })))
</script>

<template>
  <ul class="nav-box">
    <li
      class="nav-item"
      :class="{ active: router.currentRoute.value.path === path }"
      v-for="({ path, name }, idx) in navList"
      :key="idx + path"
      @click="router.push(path)"
    >
      {{ name }}
    </li>
  </ul>
</template>

<style scoped lang="stylus">
@import "left-nav.styl"
</style>
