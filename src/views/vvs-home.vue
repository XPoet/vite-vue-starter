<script setup lang="ts"></script>

<template>
  <div class="home-container">
    <div class="logo">
      <div class="img-box flex-center">
        <img src="../assets/images/vite.svg" />
      </div>
      <div class="img-box flex-center">
        <img src="../assets/images/vue.svg" />
      </div>
    </div>
    <div class="name">Vite3.x + Vue3.x + TypeScript Starter</div>
  </div>
</template>

<style scoped lang="stylus">
.home-container {
  display flex
  flex-direction column
  align-items center

  .logo {
    display flex

    .img-box {
      width 80px
      height 80px
      margin 10px

      img {
        width 100%
        height 100%
      }
    }
  }

  .name {
    margin-top 10px
    font-weight bold
    font-size 30px
  }
}
</style>
