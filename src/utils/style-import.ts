import { App } from 'vue'
import { ElIcon, ElLoading, ElCard, ElButton } from 'element-plus'
import 'element-plus/lib/theme-chalk/base.css'

/**
 * 按需载入 Element Plus 组件
 * Vite 插件 https://github.com/anncwb/vite-plugin-style-import
 * @param app {App}
 */
export default function styleImport(app: App) {
  app.use(ElButton).use(ElCard).use(ElLoading).use(ElIcon)
  return app
}
