import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "风雅颂",
  description: "an elegant blog",
  themeConfig: {
    nav: [
      {
        text: '设计',
        items: [
          {text: '设计原则', link: '/Design/principle'}
        ]
      },
    ],

    sidebar: [
      {
        text: '如何增加设计的使用性？',
        items: [
          { text: '8020法则', link: '/Design/principle/8020' },
          { text: '美即适用效应', link: '/Design/principle/beauty-is-applicable-effect' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ukea' }
    ]
  }
})
