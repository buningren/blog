module.exports = {
  title: '不宁人的网络日志',
  description: '不宁人的网络日志',
  base: '/',
  head: [
    ['link', {'rel': 'icon', href: '/img/logo.png'}]
  ],
  markdown: {
    
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/note/frontend/' },
      { text: '后端', link: '/note/backend/' },
      { text: '安全', link: '/note/secure/' },
      { text: '算法与数据结构', link: '/note/algorithm/' },
      { text: '服务端', link: '/note/server/' },
      { text: '外语', link: '/note/languages/' },
      { text: '综合', link: '/note/all/' },
      { text: '导航', link: '/navigator/' },
      { text: 'GitHub', link: 'https://github.com/buningren' },
    ]
  }
}