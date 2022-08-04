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
    <div class="header-right flex-center" @click="goGitHub">
      <el-icon :size="22"><Promotion /></el-icon> GitHub
    </div>
  </div>
</template>

<style scoped lang="stylus">
.header {
  display flex
  align-items center
  justify-content space-between
  box-sizing border-box
  width 100%
  height 100%
  padding 0 20px
  font-weight bold
  background #fff

  .header-left {
    display flex
    align-items center
    font-size 20px
    cursor pointer

    .name {
      margin-left 5px
    }
  }

  .header-right {
    font-size 16px
    cursor pointer
  }
}
</style>
