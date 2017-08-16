const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const environment = process.env.NODE_ENV;
const cssName = environment === 'production' ? 'styles-[hash].css' : 'styles.css';
const jsName = environment === 'production' ? 'bundle-[hash].js' : 'bundle.js';

module.exports = {
    context: path.resolve(__dirname, './src'),
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, './src'),
        ],
        extensions: ['.js', '.jsx']
    },
    entry: './client.js',
    output: {
        filename: jsName,
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'index.ejs',
            title: 'React',
            favicon: '../favicon.ico'
        }),
        new ExtractTextPlugin(cssName),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
    ],

    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ['env'],
                        plugins: ['transform-runtime']
                    }
                }
            },
            {test: /\.jsx?$/, exclude: [/node_modules/, /public/], use: 'babel-loader'},
            {test: /\.json$/, use: 'json-loader'},
            {test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1'},
            {test: /\.gif$/, use: 'url-loader?limit=10000&mimetype=image/gif'},
            {test: /\.jpg$/, use: 'url-loader?limit=10000&mimetype=image/jpg'},
            {test: /\.png$/, use: 'url-loader?limit=10000&mimetype=image/png'},
            {test: /\.svg/, use: 'url-loader?limit=26000&mimetype=image/svg+xml'},
        ]
    },

    devServer: {
        hot: environment !== 'production',
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    devtool: environment !== 'production' ? 'inline-source-map' : null
};