import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'Rising UI',
  // description: 'hello world',
  base: '/docs/preview/',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo_head.svg' }]],
  // lastUpdated: true,
  themeConfig: {
    siteTitle: 'Rising UI',
    logo: '/logo_head.svg',

    nav: [
      { text: '指南', link: '/guide/install' },
      { text: '组件', link: '/examples/button/' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/Leovenn' }],
    sidebar: {
      '/guide/': [
        {
          text: '快速上手',
          items: [
            {
              text: '安装',
              link: '/guide/install',
            },
            {
              text: '快速开始',
              link: '/guild/quickstart',
            },
          ],
        },
        {
          text: '进阶',
          items: [
            {
              text: 'xx',
              link: '/xx',
            },
          ],
        },
      ],
    },
  },
})
