const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'アプリ作成ハンズオン〜Nuxt編〜',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    sidebar: [
      {
        title: "1. はじめに",
        path: "/curriculum-01/",
        collapsable: false
      },
      {
        title: "2. ハンズオンのポイント",
        path: "/curriculum-02/",
        collapsable: false
      },
      {
        title: "3. Vue.js / Nuxt.js とは",
        path: "/curriculum-03/",
        collapsable: false
      },
      {
        title: "4. 事前準備",
        path: "/curriculum-04/",
        collapsable: false
      },
      {
        title: "5. Pagesを使ってみる",
        path: "/curriculum-05/",
        collapsable: false
      },
      {
        title: "6. Componentsを使ってみる",
        path: "/curriculum-06/",
        collapsable: false
      },
      {
        title: "7. Storeを使ってみる",
        path: "/curriculum-07/",
        collapsable: false
      },
      {
        title: "8. おわりに",
        path: "/curriculum-08/",
        collapsable: false
      },
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
  dest: 'curriculums/',
  base: '/handson-markdowne-editor_part1-nuxt/vuepress/docs/curriculums/',
}
