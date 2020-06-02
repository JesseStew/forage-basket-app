module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
  transpileDependencies: ['vuetify'],
  devServer: {
    proxy: 'https://us-central1-forage-basket-7a7ed.cloudfunctions.net/',
  },
}
