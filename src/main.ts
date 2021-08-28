import { createApp } from 'vue'
import router from '@/router/index'
import { key, store } from '@/store'
import App from './App.vue'
import styleImport from '@/utils/style-import'
import '@/style/basic.styl'

const app = createApp(App)
styleImport(app).use(router).use(store, key).mount('#app')
