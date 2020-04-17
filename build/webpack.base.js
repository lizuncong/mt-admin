const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const pkg = require('../package.json')

module.exports = (env) => {
  const isProduction = env.NODE_ENV === 'production'
  const isDevelopment = env.NODE_ENV === 'development'

  return {
    mode: env.NODE_ENV,
    bail: isProduction,
    target: 'node', // 使用node.js require加载chunks，并且任何内置的模块(如fs或者path)都不会打包进bundle中
    devtool: isProduction ? 'source-map' : 'cheap-module-inline-source-map', // 生产source-map，开发cheap-module-inline-source-map
    entry: {
      server: path.resolve(__dirname, '../src/app.js')
    },
    // 打包的时候，node_modules下面的模块不会打包进bundle中
    externals: [
      nodeExternals({})
    ],
    output: {
      publicPath: '/assets/',
      path: path.resolve(__dirname, '../dist'),
      filename: isDevelopment ? '[name].js' : '[name].[chunkhash:8].js',
      chunkFilename: isDevelopment ? '[name].chunk.js' : '[name].[chunkhash:8].chunk.js',
      libraryTarget: 'commonjs2',
      // Point sourcemap entries to original disk location (format as URL on Windows)
      devtoolModuleFilenameTemplate: (info) => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
    },
    resolve: {
      modules: ['node_modules', 'src'],
      alias: {
        src: path.resolve(__dirname, '../src')
      }
    },
    module: {
      strictExportPresence: true,
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, '../src'),
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: isDevelopment,
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      targets: {
                        node: pkg.engines.node.match(/(\d+\.?)+/)[0]
                      }
                    }
                  ]
                ],
                plugins: [
                  '@babel/plugin-syntax-dynamic-import'
                ].filter(Boolean)
              }
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif|ico)$/i,
          use: {
            loader: 'url-loader',
            options: {
              name: 'media/[name].[hash:8].[ext]',
              limit: 8192
            }
          }
        },
        {
          test: /\.(eot|ttf|svg|woff)$/i,
          use: {
            loader: 'file-loader',
            options: {
              name: 'media/[name].[hash:8].[ext]'
            }
          }
        }
      ]
    },

    plugins: [
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        __DEV__: isDevelopment
      }),
      new webpack.BannerPlugin({
        banner: 'require("source-map-support").install();',
        raw: true,
        entryOnly: false
      })
    ].filter(Boolean),
    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false
    },
    stats: {
      colors: true,
      timings: true
    }
  }
}
