const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,        // handle .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',  // <--- this is the key for Tailwind
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',   // replaces file-loader in webpack 5
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']     // so imports don't need file extensions
  },
  
  mode: 'development'
};
