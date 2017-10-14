'use strict';

let webpack = require('webpack');
let webpackConfig = require('hjs-webpack');

let config = webpackConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true,
  port: '3001',
  devServer: {
    hostname: '0.0.0.0'
  },
  html: function(context) {
    return context.defaultTemplate({
        html: '<div id="app"></div>'
    })
  }
});

config.plugins.push(new webpack.ProvidePlugin({
  'React': 'react',
  'ReactDom': 'react-dom',
  'Redux': 'redux'
}));

module.exports = config;
