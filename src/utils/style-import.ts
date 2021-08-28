import { App } from 'vue'
import { ElIcon, ElLoading, ElCard, ElButton } from 'element-plus'

/**
 * 按需导入 Element Plus 组件
 * Vite 插件 https://github.com/anncwb/vite-plugin-style-import
 * @param app {App}
 */
export default function styleImport(app: App) {
  ;[ElButton, ElCard, ElLoading, ElIcon].forEach((v) => {
    app.use(v)
  })
  return app
}
