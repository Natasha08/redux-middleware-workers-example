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
  module: {
      loaders: [
        { test: /\.scss$/,
          loaders: ["style-loader", "css-loader", "sass-loader"]
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        },

          { test: /\.css$/, loader: "styles!css" },
          {
              test: /\.js?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                  presets: ['react', 'es2015'],
                  plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy', 'transform-react-jsx']
              }
          }
      ]
  },
  target: 'node',
  externals: [nodeExternals()],
  devtool: "cheap-module-source-map"
};
