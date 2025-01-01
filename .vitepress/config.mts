import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'

const themeList = [ '🌳 生活', '💻 开发 Dev', '💼 工作', '📦 产品设计', '🔧 工具', '🤖 AI', '🧑‍💼 职场', '🧠 思维模型'];

const nav = [
  ...themeList.map(v=> {
    return {
      text: v,
      link: '/' + v
    }
  }),
  {
    text: '语言 Language',
    items: [
      { text: '🇪🇸Español', link: '/es/101' },
      { text: '🇯🇵日本語', link: '/日本語/五十音' },
    ]
  },
]

export default defineConfig({
  title: "Favany",
  description: "Favany's Blog",
  head: [
    ['link', {rel: 'icon', href: '/favicon.svg'}]
  ],
  themeConfig: {
    nav,
    // Sidebar is generated automatically by https://github.com/QC2168/vite-plugin-vitepress-auto-sidebar
    /* 右侧大纲配置 */
    outline: {
        // 默认是只识别## 二级目录， deep 可以识别下面的子目录
        level: 'deep',
        label: '本页目录'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LiuYoga' }
    ]
  },
  appearance: 'dark',
  lastUpdated: true,
  vite: {
    plugins: [
      // add plugin
      AutoSidebar({
        // https://github.com/QC2168/vite-plugin-vitepress-auto-sidebar
        path: '/',
        collapsed: true,
      })
    ]
  },
  
})
