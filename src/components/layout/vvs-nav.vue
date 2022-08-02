<script setup lang="ts">
import { onMounted, watch, ref } from 'vue'
import { useRouter } from 'vue-router'
import { NavItem } from '@/common/model'

const router = useRouter()

const navList = ref([
  {
    name: 'Home',
    isActive: true,
    path: '/'
  },
  {
    name: 'Pinia',
    isActive: false,
    path: '/pinia'
  },
  {
    name: 'Axios',
    isActive: false,
    path: '/axios'
  }
])

const changeNavActive = (currentPath: string) => {
  navList.value.forEach((v: NavItem) => {
    const temp = v
    temp.isActive = temp.path === currentPath
    return temp
  })
}

const navClick = (e: NavItem) => {
  router.push(e.path)
}

watch(
  () => router.currentRoute.value,
  (_n) => {
    changeNavActive(_n.path)
  }
)

onMounted(() => {
  router.isReady().then(() => {
    changeNavActive(router.currentRoute.value.path)
  })
})
</script>

<template>
  <aside class="nav">
    <ul class="nav-list">
      <li
        class="nav-item flex-center"
        v-for="(nav, index) in navList"
        :key="index"
        :class="{ active: nav.isActive }"
        @click="navClick(nav)"
      >
        {{ nav.name }}
      </li>
    </ul>
  </aside>
</template>

<style scoped lang="stylus">

@import "../../style/basic.styl"

.nav {
  position relative
  box-sizing border-box
  width 100%
  height 100%
  background #fff

  .nav-list {

    .nav-item {
      box-sizing border-box
      width 100%
      height 60px
      cursor pointer

      &.active {
        font-weight bold
        background $second-background-color
      }
    }
  }
}
</style>
