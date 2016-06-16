import _ from 'lodash-compat';
import baseConfig from './base.config';

let outputPath = './dist';
if (process.env.SPECTRE_DOCS) {
  outputPath = './docs';
}

export default _.extend({}, baseConfig, {
  entry: {
    'react-spectre': './src/index.js'
  },

  output: {
    path: outputPath,
    filename: '[name].js',
    library: 'ReactSpectre',
    libraryTarget: 'umd'
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
    }
  ]
});