<template>
  <div class="axios-container page-container">
    <div class="page-title">Axios Test Page</div>
    <div class="user-info-container">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>XPoet</span>
            <el-button class="button" type="text" @click="getUserInfo"
              >点击获取XPoet信息
            </el-button>
          </div>
        </template>
        <div class="info-list-box" v-loading="loading">
          <div class="text item" v-if="userInfo?.name">name: {{ userInfo?.name }}</div>
          <div class="text item" v-if="userInfo?.bio">bio: {{ userInfo?.bio }}</div>
          <div class="text item" v-if="userInfo?.blog">blog: {{ userInfo?.blog }}</div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import Serv from '../api/axios'

export default defineComponent({
  name: 'Axios',
  setup() {
    const userInfo: Ref = ref(null)
    const loading = ref(false)

    const getUserInfo = async () => {
      loading.value = true
      const name = 'XPoet'
      const data = await Serv.getXPoet({ name })
      userInfo.value = data.data
      loading.value = false
    }

    return {
      userInfo,
      loading,
      getUserInfo
    }
  }
})
</script>

<style scoped lang="stylus">

.axios-container {

  .user-info-container {
    display flex
    justify-content center
    width 100%

    .info-list-box {
      padding 10px

      .text {
        font-size: 14px;
      }

      .item {
        margin-bottom: 18px;
      }

    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .box-card {
      width: 480px;
    }

  }

}
</style>
