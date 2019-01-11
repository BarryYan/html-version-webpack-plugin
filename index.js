const HtmlWebpackPlugin = require('html-webpack-plugin')

const HTML_VERSION = '{{HTML_VERSION}}'

const getVersion = () => Date.now().toString(32)

class HtmlVersion {
  apply (compiler) {
    compiler.hooks.compilation.tap('HtmlVersion', (compilation) => {
      if (HtmlWebpackPlugin.getHooks) {
        HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
          'HtmlVersion',
          (data, cb) => {
            data.html = data.html.replace(HTML_VERSION, getVersion())
            cb(null, data)
          }
        )
      } else {
        compilation.hooks.htmlWebpackPluginAfterEmit.tapAsync('HtmlVersion', (htmlPluginData, callback) => {
          const html = htmlPluginData.html.source()
          htmlPluginData.html.source = () => html.replace(HTML_VERSION, getVersion())
          callback()
        })
      }
    })
  }
}

module.exports = HtmlVersion