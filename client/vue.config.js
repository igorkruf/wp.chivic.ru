module.exports = {

  //для REST API KSK66
  configureWebpack: (config) => {
    return {
      devServer: {
        proxy: {
          '/wp-json': {
            target: 'https://ksk66.ru',
            secure: false,
            changeOrigin: true
          }

        }
      }
    }
  },
  //////////////////
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ]
}
