const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  pages: {
    index: {
      entry: 'src/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    second: {
      entry: 'src/second/main.js',
      template: 'public/second.html',
      filename: 'second.html',
      title: 'Second Page',
      chunks: ['chunk-vendors', 'chunk-common', 'second']
    }
  }
}