<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goGitHub = () => {
  window.open('https://github.com/XPoet/vite-vue3-starter')
}
</script>

<template>
  <div class="header">
    <div class="header-left" @click="router.push('/')">
      <img class="logo" src="/vite.svg" alt="logo" />
      <span class="name">Vite-Vue3-Starter</span>
    </div>
    <div class="header-right" @click="goGitHub">GitHub</div>
  </div>
</template>

<style scoped lang="stylus">
.header {
  width 100%
  height 100%
  background #fff
  display flex
  justify-content space-between
  align-items center
  padding 0 20px
  box-sizing border-box
  font-weight bold

  .header-left {
    font-size 20px
    cursor pointer
    display flex
    align-items center

    .name {
      margin-left 5px
    }
  }

  .header-right {
    cursor pointer
    font-size 16px
  }
}
</style>
