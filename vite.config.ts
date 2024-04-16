import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src' // 设置路径别名：`@` 指向 `src`
    }
  },
  base: './', // 打包路径
  server: {
    port: 8889, // 设置端口
    open: true, // 自动打开
    cors: true // 允许跨域
  }
})
