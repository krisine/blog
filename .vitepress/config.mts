import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "风雅颂",
  description: "an elegant blog",
  themeConfig: {
    nav: [
      { text: '设计', link: '/Design/1' },
    ],

    sidebar: [
      {
        text: '超人零基础UI精品实战班6期',
        items: [
          { text: '第一节课', link: '/Design/1' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ukea' }
    ]
  }
})
