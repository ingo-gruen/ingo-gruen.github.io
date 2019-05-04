module.exports = {
  title: 'Richard Grün Institut',
  description: 'Richard Grün Institut',
  dest: 'dist',

  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'de-DE' // 将会被设置为 <html> 的 lang 属性
      // title: 'VuePress-en',
      // description: 'Vue-powered Static Site Generator'
    },
    '/en/': {
      lang: 'en-US'
      // title: 'Richard Grün Institut',
      // description: 'Richard Grün Institut desc...'
    },
    '/zh/': {
      lang: 'zh-CN'
      // title: '中文版',
      // description: 'Vue 驱动的静态网站生成器'
    },
    
  },
  themeConfig: {
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Guide', link: '/guide/' },
    //   { text: 'External', link: 'https://google.com' }
    // ],
    locales: {
      '/': {
        selectText: 'Deutsch',
        // 该语言在下拉菜单中的标签
        label: 'Deutsch',
        nav: [
          { text: 'Zuhause', link: '/' },
          { text: 'Kontakt', link: '/contact' }, // 接触
          { text: 'Fassade', link: '/facades/' }, // 正面
          { text: 'Gutachten', link: '/report/' }, // 报告
          { text: 'Über uns', link: '/about.html' }
        ]
      },
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        nav: [
          { text: '主页', link: '/zh/' },
          { text: '联系我们', link: '/zh/contact' }, // 接触
          { text: '外墙', link: '/zh/facades/' }, // 正面
          { text: '报告', link: '/zh/report/' }, // 报告
          { text: '关于我们', link: '/zh/about.html' }
        ]
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: ' Contact Us', link: '/en/contact' }, // 接触
          { text: 'Facades', link: '/en/facades/' }, // 正面
          { text: 'report', link: '/en/report/' }, // 报告
          { text: 'about', link: '/en/about.html' }
        ]
      }
    }
  }
}
