const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, "public", "scripts"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.js(x)?$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    devtool: 'cheap-eval-source-map',
    devServer: {
        contentBase: './public',
        publicPath: '/scripts/',
        historyApiFallback: true
    }
}