import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "风雅颂",
  description: "an elegant blog",
  head: [
    ['link', {rel: 'icon', href: '/favicon.svg'}]
  ],
  themeConfig: {
    nav: [
      {
        text: '设计',
        items: [
          {text: '设计的125条通用法则', link: '/Design/principle'}
        ]
      },
    ],

    sidebar: {
      '/Design/principle/': [
        {
          text: '如何影响对设计的认知？',
          items:[

          ],
          collapsed: false,
        },
        {
          text: '如何协助从设计中学习？',
          items: [

          ],
          collapsed: false,
        },
        {
          text: '如何增加设计的使用性？',
          items: [
            { text: '8020法则', link: '/Design/principle/8020' },
            { text: '美即适用效应', link: '/Design/principle/beauty-is-applicable-effect' },
            { text: '确认', link: '/Design/principle/confirmation'},
          ],
          collapsed: false,
        },
        {
          text: '如何增加设计的美感？',
          items: [
            {text: '对称', link: '/Design/principle/symmetry' }

          ],
          collapsed: false,
        },
        {
          text: '如何做出较好的设计决定？',
          items: [

          ],
          collapsed: false,
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ukea' }
    ]
  }
})
