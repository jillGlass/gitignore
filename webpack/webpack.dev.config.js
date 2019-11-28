// var webpack = require('webpack');
// var path = require('path');

// var parentDir = path.join(__dirname, '../');

// module.exports = {
//     entry: [
//         path.join(parentDir, 'index.js')
//     ],
//     module: {
//         loaders: [{
//             test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 loader: 'babel-loader'
//             },{
//                 test: /\.less$/,
//                 loaders: ["style-loader", "css-loder", "less-loader"]
//             }
//         ]
//     },
//     output: {
//         path: parentDir + '/dist',
//         filename: 'bundle.js'
//     },
//     devServer: {
//         contentBase: parentDir,
//         historyApiFallback: true
//     }
// }

var path = require('path');

module.exports = {
entry: './index.js',
mode: 'development',
resolve: {
extensions: ['.webpack.js', '.web.js', '.ts', '.js']
},
module: {
    rules: [
        {
          loader: 'babel-loader',
          test: /\.jsx?$/,
          exclude: path.join(__dirname, 'node_modules')
        }
      ]
},
output: {
filename: 'bundle.js',
path: path.resolve(__dirname, 'dist')
}
};
