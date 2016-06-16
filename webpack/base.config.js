import webpack from 'webpack';

export const jsLoader = 'babel?cacheDirectory';

const baseConfig = {
  entry: undefined,

  output: undefined,

  externals: undefined,

  module: {
    loaders: [
      { test: /\.js/, loader: jsLoader, exclude: /node_modules/ },
      { test: /\.txt/, loader: 'raw' }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ]
};

export default baseConfig;