var path = require('path');


module.exports = {
    entry: path.resolve(__dirname, 'client/scripts/index.js'),
    output: {
        path: path.resolve(__dirname, 'client/build'),
        filename: 'bundle.js',
    },
    module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
