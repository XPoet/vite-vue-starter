<script setup lang="ts">
import {ref} from "vue";

defineOptions({
  name: 'MainContainer'
})

const msg = ref('Vite Vue Starter')
</script>

<template>
  <main class="main-container">
    {{ msg }}
  </main>
</template>

<style scoped lang="stylus">
.main-container {
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  display flex
  justify-content center
  font-size 50px
  padding 30px
}
</style>
