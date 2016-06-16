import _ from 'lodash-compat';
import baseConfig from './base.config';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const BUILD_DIR = path.join(__dirname, '../', 'docs');

export default _.extend({}, baseConfig, {
  entry: {
    app: ['./docs/app.js']
  },

  output: {
    path:       BUILD_DIR,
    publicPath: '/',
    filename:   'javascripts/[name].js'
  },

  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    },
    {
      'react-spectre': {
        root: 'ReactSpectre',
        commonjs2: 'react-spectre',
        commonjs: 'react-spectre',
        amd: 'react-spectre'
      }
    }
  ],

  plugins: [
    new HtmlWebpackPlugin({
      template:     './docs/index.html',
      filename:     'index.html'
    }),
    new CopyWebpackPlugin([{
      from: './docs/css', to: 'css'
    }])
  ]
});