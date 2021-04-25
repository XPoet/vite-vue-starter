<template>
  <div class="mock-container page-container">
    <div class="page-title">Axios Test Page</div>
    <div class="user-info-container">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>Mock</span>
            <el-button class="button" type="text" @click="getTestInfo"
              >Click to get mock
            </el-button>
          </div>
        </template>
        <div class="info-list-box" v-loading="loading">
          <div class="text item" v-if="mockInfo?.code">code: {{ mockInfo?.code }}</div>
          <div class="text item" v-if="mockInfo?.data">data: {{ mockInfo?.data }}</div>
          <div class="text item" v-if="mockInfo?.message">
            msg: {{ mockInfo?.message }}
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import axios from '../utils/axios'

export default defineComponent({
  name: 'Mock',
  setup() {
    const mockInfo: Ref = ref(null)
    const loading = ref(false)

    const getTestInfo = () => {
      loading.value = true
      axios({
        method: 'get',
        url: 'api/test',
        mock: true
      })
        .then((response) => {
          mockInfo.value = response.data
          // eslint-disable-next-line no-alert
          alert(response.data.name)
          loading.value = false
        })
        .catch((error) => {
          loading.value = false
          console.error(error)
        })
    }

    return {
      mockInfo,
      loading,
      getTestInfo
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
