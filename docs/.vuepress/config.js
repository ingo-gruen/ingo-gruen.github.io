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
    }
  },
  themeConfig: {
    logo:'/logo.jpg',
    // sidebar: [ ],
    sidebarDepth: 2,

    locales: {
      '/': {
        selectText: 'Deutsch',
        label: 'Deutsch',
        nav: [
          { text: 'Zuhause', link: '/' },
          { text: 'Über uns', link: '/about.html' },
          {
            text: 'Gutachten',
            items: [
              { text: 'Prüfung', link: '/report/1' },
              { text: 'Beweissicherung', link: '/report/2' },
              { text: 'Beratung', link: '/report/3' },
              { text: 'Gerichtgutachten', link: '/report/4' }
            ]
          },
          { text: 'Fassade', link: '/facades/' },
          { text: 'Kontakt', link: '/contact' }
        ],
        sidebar: {
          '/report/': [
            {
              title: 'report',
              collapsable: false,
              children: ['1', '2', '3', '4']
            }
          ]
        }
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        nav: [
          { text: '主页', link: '/zh/' },
          { text: '关于我们', link: '/zh/about.html' },

          // { text: '报告', link: '/zh/report/' },
          {
            text: '报告',
            items: [
              { text: '报告1', link: '/zh/report/1' },
              { text: '报告2', link: '/zh/report/2' },
              { text: '报告3', link: '/zh/report/3' },
              { text: '报告4', link: '/zh/report/4' }
            ]
          },
          { text: '外墙', link: '/zh/facades/' },
          { text: '联系我们', link: '/zh/contact' }
        ],
        sidebar: {
          '/zh/report/': [
            {
              title: 'report',
              collapsable: false,
              children: ['1', '2', '3', '4']
            }
          ]
        }
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'About', link: '/en/about.html' },

          // { text: 'report', link: '/en/report/' },
          {
            text: 'Report',
            items: [
              { text: 'Prüfung', link: '/en/report/1' },
              { text: 'Beweissicherung', link: '/en/report/2' },
              { text: 'Beratung', link: '/en/report/3' },
              { text: 'Gerichtgutachten', link: '/en/report/4' }
            ]
          },
          { text: 'Facades', link: '/en/facades/' },
          { text: ' Contact Us', link: '/en/contact' }
        ],
        sidebar: {
          '/en/report/': [
            {
              title: 'report',
              collapsable: false,
              children: ['1', '2', '3', '4']
            }
          ]
        }
      }
    }
  }
}
