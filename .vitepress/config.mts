import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'

const themeList = [ '🌳 Life 生活', '🎨 Figma', '💻 Dev 开发', '💼 今承达', '📦 Product Design 产品设计' ];

const nav = [
  ...themeList.map(v=> {
    return {
      text: v,
      link: '/' + v
    }
  }),
  {
    text: '设计',
    items: [
      {text: '设计的125条通用法则', link: '/Design/principle'}
    ]
  },
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
      { icon: 'github', link: 'https://github.com/ukea' }
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
