// This is for webapck2
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      'babel-polyfill',
      './src/app.js',
    ]
  },
  context: __dirname,
  target: 'web',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    modules: [
      path.resolve('node_modules'),
      path.resolve('src'),
    ],
    /*extensions: ['*', '.js', '.jsx', '.json', '.html', '.css'],*/
  },
  module: {
    rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        include: [path.resolve(__dirname, "src")],
        exclude: /node_modules/,
        options: {
          plugins: [
            ["transform-react-jsx", { "pragma":"h" }]
          ],
          presets: ["es2015", "es2016", "preact"]
        }
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify("production"),
        BROWSER: JSON.stringify(true),
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: true,
      compress: {
        screw_ie8: true,
        warnings: false
      }
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    publicPath: '/',
    port: 9000,
    quiet: false,
    noInfo: true,
    stats: {colors: true},
    hot: true,
    historyApiFallback: true,
  }
}
