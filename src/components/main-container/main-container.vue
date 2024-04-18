<script setup lang="ts">
defineOptions({
  name: 'MainContainer'
})

const title = ref('Vite Vue Starter')
</script>

<template>
  <main class="main-container">
    <header class="top-box">{{ title }}</header>
    <div class="bottom-box">
      <nav class="left-nav">
        <left-nav />
      </nav>
      <div class="right-content">
        <router-view />
      </div>
    </div>
  </main>
</template>

<style scoped lang="stylus">
@import "main-container.styl"
</style>
