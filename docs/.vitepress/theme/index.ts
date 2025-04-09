import DefaultTheme from 'vitepress/theme'
import { merge } from 'lodash-es'
import "virtual:uno.css";
// import '@unocss/reset/tailwind.css'
// 动态导入所有组件
const components = import.meta.glob('../components/*.vue', { eager: true }) as Record<string, any>

/** @type {import('vitepress').Theme} */
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册所有组件
    Object.entries(components).forEach(([path, component]) => {
      // 获取组件名称（去掉路径和后缀）
      const componentName = path.split('/').pop()?.split('.').shift()
      if (componentName) {
        app.component(componentName, (component as any).default)
      }
    })
  }
}
