<script setup lang="ts">
import router, { routes } from "@/router";
import { ref, watch } from "vue";

const navList = ref(routes.map(({path, name}) => ({path, name})))
const currentPath = ref<string>('')

watch(() => router.currentRoute.value.path, (path) => {
  currentPath.value = path
}, {
  immediate: true
})
</script>

<template>
  <ul class="nav-box">
    <li class="nav-item"
        :class="{ active: currentPath === path }"
        v-for="({path, name}, idx) in navList"
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
