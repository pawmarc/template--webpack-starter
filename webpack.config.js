const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = {
    mode: 'development',
    entry: './src/index.js', //default anyway
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // clean: true
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        // open: true, // open page in browser on start
        // hot: false, //default is true anyway
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "WebpackTraversy App",
            filename: 'index.html',
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin()
    ],
};

