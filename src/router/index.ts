import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import VvsHome from '@/views/vvs-home.vue'
import VvsPinia from '@/views/vvs-pinia.vue'
import VvsAxios from '@/views/vvs-axios.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: VvsHome
  },
  {
    path: '/pinia',
    name: 'Pinia',
    component: VvsPinia
  },
  {
    path: '/axios',
    name: 'Axios',
    component: VvsAxios
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
