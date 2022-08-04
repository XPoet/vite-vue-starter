import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
/**
 * 如果编辑器提示 path 模块找不到，安装 @types/node 即可
 * pnpm add @types/node -D
 */
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ElementPlusResolver()
      ]
    }),
    Components({
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver()
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  },
  base: './', // 打包路径
  server: {
    port: 8088, // 服务启动端口号（Vite 3.x 默认 5173）
    open: true, // 服务启动后自动打开浏览器
    cors: true // 允许跨域
  }
})
