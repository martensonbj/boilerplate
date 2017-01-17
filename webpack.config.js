module.exports = {
  entry: './app',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass' },
    ]
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  devServer: {
    contentBase: './build',
    inline: true
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.scss', '.css']
  }
}
