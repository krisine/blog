import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'

const nav = [
  {
    text: '泛微',
    link: '/今承达'
  },
  {
    text: '产品',
    items: [
      {text: 'NPDP', link: '/pm/NPDP'},
      {text: '产品设计', link: '/pm/design' }
    ]
  },
  {
    text: '设计',
    items: [
      {text: '设计的125条通用法则', link: '/Design/principle'}
    ]
  },
  {
    text: '开发',
    items: [
      {text: '前端', link: '/dev/front-end'}
    ]
  }
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
