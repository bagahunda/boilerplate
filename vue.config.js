const path = require('path')

const PORT = 8550
const DEV_HOST = 'vmep.com'

/**
 * https://cli.vuejs.org/config/#pages
 */
module.exports = {
  css: {
    // Enable CSS source maps.
    sourceMap: true,
  },
  pages: {
    index: {
      entry: 'src/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
    dashboard: {
      entry: 'src/dashboard/main.js',
      template: 'public/index.html',
      filename: 'dashboard/index.html',
      title: 'Dashboard Page',
      chunks: ['chunk-vendors', 'chunk-common', 'dashboard'],
    },
  },

  devServer: {
    port: PORT,
    historyApiFallback: {
      rewrites: [
        {
          from: /^\/dashboard\/?.*/,
          to: path.posix.join('/', 'dashboard/index.html'),
        },
        { from: /./, to: path.posix.join('/', 'index.html') },
      ],
    },
    allowedHosts: [DEV_HOST],
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'ru',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
}
