import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router'

import '@/style/basic.styl'

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
