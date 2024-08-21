import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'

const themeList = [ '🌳 生活', '🎨 Figma', '👁️ 护眼', '💻 Dev', '💼 今承达', '📝 Memo', '📦 产品设计', '🔧 工具', '🔮 前端', '🤖 AI', '🧑‍💼 职场', '🧠 思维模型', '日本語' ];

const nav = [
  ...themeList.map(v=> {
    return {
      text: v,
      link: '/' + v
    }
  })
];

export default defineConfig({
  title: "Open Platform",
  description: "",
  head: [
    ['link', {rel: 'icon', href: '/favicon.svg'}]
  ],
  themeConfig: {
    nav,
    // Sidebar is generated automatically by https://github.com/QC2168/vite-plugin-vitepress-auto-sidebar
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
  }
})
