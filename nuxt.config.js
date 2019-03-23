const nodeExternals = require('webpack-node-externals')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

export default {
  mode: 'spa',
  head: {
    title: 'delm.io',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Increase your conversion rate and customer trust by telling your customers when they will get their delivery' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/images/logo.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Merriweather+Sans:400,700|Material+Icons' }
    ]
  },
  plugins: [
    '~/plugins/vuetify.js'
  ],
  // css: [
  //   { src: '~/assets/style/app.styl', lang: 'stylus' }
  // ],
  transition: '',
  loading: { color: '#3B8070' },
  modules: [
    ['@nuxtjs/google-analytics', { id: 'UA-56780752-9' }]
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
  }
}
