const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = 3000;

const isEnvProduction = false
const shouldUseReactRefresh = false
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(png|jp(e*)g)$/,
                use: [{
                  loader: "url-loader",
                //   options: { ...loaderOptions  }
                }]
              },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        // options: {
                        //     modules: true,
                        //     localsConvention: 'camelCase',
                        // }
                    }
                ]
            },
            {
                test: /\.svg$/,
                issuer: /\.[jt]sx?$/,
                // use: ["file-loader?name=[name].[ext]"],
                use: [{
                    loader: '@svgr/webpack',
                    // options: {
                    //     svgo: false,
                    //   },
                },
                // {
                //     loader: 'url-loader'
                // }
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        })
    ],
    devServer: {
        host: 'localhost',
        port: port,
        open: false,
        historyApiFallback: true,
        hot: true,
        proxy: {
            '**': { 
                target: 'http://localhost:8080/' ,
            }

        }
    }
};