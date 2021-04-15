<template>
  <div class="header">
    <div class="title" @click="router.push('/')">Vite2.x + Vue3.x + TypeScript Starter</div>
  </div>
</template>

<script lang="ts" setup="props">
import { useRouter } from 'vue-router'

// eslint-disable-next-line no-unused-vars
const router = useRouter()
</script>

<style scoped lang="stylus">

.header {
  width 100%
  height 100%
  background #fff
  display flex
  justify-content flex-start
  align-items center
  padding-left 20px
  box-sizing border-box

  .title {
    font-size 20px
    font-weight bold
    cursor pointer
  }
}
</style>
