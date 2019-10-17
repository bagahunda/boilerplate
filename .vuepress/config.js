const appConfig = require('../src/app.config')

module.exports = {
  title: appConfig.title + ' Docs',
  description: appConfig.description,
  themeConfig: {
    sidebar: [
      ['/', 'Introduction'],
      '/docs/apiLayer',
      '/docs/state',
      '/docs/editors',
      '/docs/linting',
      '/docs/styles',
    ],
  },
}
