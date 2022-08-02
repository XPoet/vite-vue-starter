<script setup lang="ts">
import { ref } from 'vue'
import axios from '@/utils/axios'

const userInfo = ref(null)

const getUserInfo = () => {
  axios
    .get('/users/XPoet')
    .then((res) => {
      console.log('userInfo >> ', res)
      userInfo.value = res.data
    })
    .catch((err) => {
      console.error('[userInfo] ', err)
    })
}
</script>

<template>
  <div class="page-title">Axios test</div>
  <el-button @click="getUserInfo">点击获取 XPoet 用户信息</el-button>
  <el-card v-if="userInfo">
    <div>name: {{ userInfo.name }}</div>
    <div>bio: {{ userInfo.bio }}</div>
    <div>blog: {{ userInfo.blog }}</div>
    <div>location: {{ userInfo.location }}</div>
  </el-card>
</template>

<style scoped></style>
