module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader',
        query: { presets: [ 'es2015', 'react' ] }
      }
    ]
  }
};
