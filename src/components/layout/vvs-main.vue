<script setup lang="ts"></script>

<template>
  <main class="main-container">
    <div class="top">
      <vvs-header />
    </div>

    <div class="bottom">
      <div class="left">
        <vvs-nav />
      </div>

      <div class="right">
        <div class="content">
          <router-view />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="stylus">

@import "../../style/basic.styl"

$top-height = 60px
$left-side-width = 80px

.main-container {
  position absolute
  top 0
  right 0
  bottom 0
  left 0
  display flex
  flex-direction column
  justify-content space-between
  box-sizing border-box
  width 100%
  height 100%
  background $second-background-color

  .top {
    position relative
    box-sizing border-box
    width 100%
    height $top-height
    margin-bottom 10px
  }

  .bottom {
    position relative
    display flex
    justify-content space-between
    box-sizing border-box
    width 100%
    height 100%

    .left {
      position relative
      box-sizing border-box
      width $left-side-width
      height 100%
    }

    .right {
      position relative
      box-sizing border-box
      width 100%
      height 100%
      padding 0 10px 10px 10px

      .content {
        position relative
        box-sizing border-box
        width 100%
        height 100%
        padding 10px
        background $background-color
        border-radius 5px
      }
    }
  }
}
</style>
