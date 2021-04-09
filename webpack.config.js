const path = require('path');
const fs = require('fs');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const EventHooksPlugin = require('event-hooks-webpack-plugin');

const basePath = '.';

var config = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'source-map',
  mode: 'production',
  watch: true,
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: function () {
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images',
              esModule: false,
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: 'assets/fonts',
              esModule: false,
            }
          }
        ]
      },
    ]
  },
};

let configs = [];
['/demo/'].forEach((subFolder) => {
  console.log(subFolder);
  fs.readdirSync(basePath + subFolder).forEach(element => {
    const extension = path.extname(element);
    const filename = element.replace(extension, '');

    if (extension == '.scss' && filename[0] != '_') {
      console.log(element);

      configs.push({
        ...config, ...{
          entry: basePath + subFolder + element,
          output: {
            path: path.resolve(__dirname,  basePath + '/demo/dist'),
            filename: filename + '.min.js'
          },
          plugins: [
            new MiniCssExtractPlugin({
              filename: filename + '.min.css'
            })
          ]
        }
      });
    }
  });
});

configs.forEach((config) => {
  if (config.plugins) {
    config.plugins.push(new EventHooksPlugin({
      'done': () => {
        fs.readdirSync(basePath + '/demo/dist/').forEach(element => {
          if (fs.lstatSync(basePath + '/demo/dist/' + element).isFile() && element.indexOf('.js') > -1) fs.unlinkSync(basePath + '/demo/dist/' + element);
        });
      }
    }));
  }
});

module.exports = configs;
