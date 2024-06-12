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

const sidebar = {
  '/pm/NPDP/': [
    {
      text: '直播课',
      items: [
        { text: '第一次直播课', link: '/pm/NPDP/live1'}
      ],
      collapsed: false,
    }
  ],
  '/Design/principle/': [
    {
      text: '如何影响对设计的认知？',
      items:[],
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
};

export default defineConfig({
  title: "风雅颂",
  description: "风雅颂",
  head: [
    ['link', {rel: 'icon', href: '/favicon.svg'}]
  ],
  themeConfig: {
    nav,
    // sidebar,
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/ukea' }
    // ]
  },
  appearance: 'dark',
  lastUpdated: true,
  vite: {
    plugins: [
      // add plugin
      AutoSidebar({
        // https://github.com/QC2168/vite-plugin-vitepress-auto-sidebar
        path: '/',
      })
    ]
  }
})
