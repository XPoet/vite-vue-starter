<script setup lang="ts">
import axios from "@/utils/axios.ts";
import { ref } from "vue";

defineOptions({
  name: 'Axios'
})

const userInfo = ref<null | string>(null)

const getUserInfo = () => {
  axios.get('/users/XPoet').then((res: any) => {
    console.log(res)
    userInfo.value = JSON.stringify({
      name: res.name,
      bio: res.bio,
      location: res.location,
      blog: res.blog,
      html_url: res.html_url
    })
  }).catch((err) => {
    console.error(err)
  })
}
</script>

<template>
<h1>Axios</h1>

<button @click="getUserInfo">点击获取 XPoet 用户信息</button>

<div v-if="userInfo">
  {{ userInfo }}
</div>
</template>

<style scoped>

</style>
