var webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',

    entry: './src/index.js',
    output: {
        publicPath: '/dist/',
        path: __dirname + '/dist',
        filename: 'index.js'
    },

    devServer: {
        contentBase: './dist',
        port: 8081,
        hot: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react', 'es2015']
                    }
                },
                exclude: /node_module/
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' }
                ]
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
}