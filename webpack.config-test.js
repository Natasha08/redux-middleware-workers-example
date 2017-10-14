var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  output: {
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-react-jsx', 'react-autorequire']
        }
      }
    ]
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
    plugins: [
    new webpack.ProvidePlugin({
      'React': 'react',
      'ReactDom': 'react-dom',
      'Redux': 'redux'
    }),
  ],
  target: 'node',
  externals: [nodeExternals()],
  devtool: "cheap-module-source-map"
};
