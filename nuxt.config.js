const nodeExternals = require('webpack-node-externals')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

export default {
  mode: 'universal',
  head: {
    title: 'Delm - Shipping info for Shopify',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Increase your conversion rate and customer trust by telling your customers when they will get their delivery' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/images/logo.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Monda:400,700|Material+Icons' }
    ]
  },
  plugins: [
    { src: '~/plugins/vuetify.js' },
    { src: '~/plugins/mediumzoom.js', ssr: false }
  ],
  transition: '',
  loading: { color: '#3476D1' },
  modules: [
    ['@nuxtjs/google-analytics', { id: 'UA-56780752-9' }],
    ['@nuxtjs/markdownit', {
      html: true,
      linkify: true,
      breaks: true,
      highlight: (code, lang) => {
        const Prism = require('prismjs')
        return Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup)
      },
      use: [
        [require('markdown-it-anchor'), {
          level: 1,
          slugify: (s) => encodeURIComponent(String(s).trim().toLowerCase().replace(/[^a-zA-Z ]/g, '').replace(/\s+/g, '-')),
          permalink: true,
          permalinkSymbol: '#'
        }]
      ]
    }]
  ],
  build: {
    extractCSS: true,
    transpile: [/^vuetify/],
    plugins: [
      new VuetifyLoaderPlugin()
    ],
    extend (config, ctx) {
      if (ctx.isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        if (process.server) {
          config.externals = [
            nodeExternals({
              whitelist: [/^vuetify/]
            })
          ]
        }
      }
    }
  },
  router: {
    scrollBehavior (to, from, savedPosition) {
      if (to.hash && document.querySelector(to.hash)) {
        return {
          selector: to.hash
        }
      } else {
        return { x: 0, y: 0 }
      }
    }
  }
}
