/*
 * @Author: Aliom
 * @Date: 2021-04-20 10:03:47
 * @LastEditors: Aliom
 * @LastEditTime: 2021-04-20 10:23:04
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

import router from './router/index'
import { key, store } from './store/index'

import 'element-plus/lib/theme-chalk/index.css'

import './style/basic.styl'

const app = createApp(App)
app.use(router)
app.use(store, key)
app.use(ElementPlus)
app.mount('#app')
