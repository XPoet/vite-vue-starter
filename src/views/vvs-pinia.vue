<script setup lang="ts">
import { storeToRefs } from 'pinia'
import mainStore from '@/store'

const store = mainStore()
const { msg, count, doubleCount } = storeToRefs(store) // store 响应式解构

const changeCount = () => {
  store.increment() // 使用 store 中定义的 action increment 改变 count 值
}
</script>

<template>
  <div class="page-title">Pinia test</div>
  <div>store.state.msg: {{ msg }}</div>
  <div>store.state.count: {{ count }}</div>
  <div>store.state.doubleCount: {{ doubleCount }}</div>
  <div><el-button @click="changeCount">点击改变 state.count 值</el-button></div>
</template>

<style scoped lang="stylus">
button {
  margin-top 10px
}
</style>
