const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');

module.exports = {
    entry: './src/index.tsx',
    // 在这里配置 alias
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, '../src/')
        },
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(js|tsx)$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }],
                exclude: /(node_modules)/,
            }, {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                include: [path.resolve(__dirname, '../src/')],
                use: ["file-loader", {
                    loader: "image-webpack-loader",
                    options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 65
                        },
                        optipng: {
                            enabled: false
                        },
                        pngquant: {
                            quality: '65-90',
                            speed: 4
                        },
                        gifsicle: {
                            interlaced: false
                        },
                        webp: {
                            quality: 75
                        }
                    }
                }, ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                include: [path.resolve(__dirname, '../src/')],
                use: ['file-loader']
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname, "../public/index.html"),
            minify: {
                collapseWhitespace: true, // 移除空格
                removeComments: true, // 移除注释
                removeAttributeQuotes: true, // 移除双引号
                html5: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
            },
            templateParameters: (...args) => {
              const [complication] = args;
              const publicPath = complication.outputOptions.publicPath;
              return {
                PUBLIC_URL: publicPath.endsWith('/') ? publicPath.slice(0, -1) : publicPath
              }
            }
        }),
        new CopyPlugin({patterns: [path.resolve(__dirname, '../public')]}),
        new WatchMissingNodeModulesPlugin(path.resolve('node_modules')),
    ]
}
