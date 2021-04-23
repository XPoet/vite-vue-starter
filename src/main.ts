import { createApp } from 'vue'
import { ElButton, ElCard, ElLoading } from 'element-plus'

import App from './App.vue'
import router from './router/index'
import { key, store } from './store'

import './style/basic.styl'

createApp(App)
  .use(router)
  .use(store, key)

  // 按需载入 Element Plus
  .use(ElButton)
  .use(ElCard)
  .use(ElLoading)
  .mount('#app')
