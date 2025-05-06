import UnoCSS from 'unocss/vite'
// import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  base: '/blog/',
  themeConfig: {

    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'library', link: '/library' },
      { text: 'Electron', link: '/electron/README.md', activeMatch: '/electron/' },
    ],
    sidebar: {
      // '/zh/guide/': { base: '/zh/guide/', items: sidebarGuide() },
      '/electron/': { base: '/electron/', items: [
        {
          text: 'Electron读取多文件',
          collapsed: false,
          items: [
            { text: 'Electron读取多文件', link: 'Electron读取多文件' },
            { text: 'electron性能优化', link: 'electron性能优化' },
          ],
        },
      ] },
    },
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   },
    //   {
    //     text: 'Electron',
    //     items: [
    //       { text: 'Electron读取多文件', link: '/electron/Electron读取多文件' },
    //       { text: 'electron性能优化', link: '/electron/electron性能优化' },
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  vite: {
    plugins: [
      UnoCSS(
        {
          configFile: './unocss.config.ts',
        },
      ),
      // AutoImport({
      //   imports: ['vue', 'vue-router', 'pinia'],
      //   dts: true,
      // })
    ],
  },
})
