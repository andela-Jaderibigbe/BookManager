import webpack from 'webpack';
import path from 'path';
import NpmInstallPlugin from 'npm-install-webpack-plugin';

const PATHS = {
  app    : path.join(__dirname, 'app'),
  static : path.join(__dirname, 'static')
};

export default {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    PATHS.app
  ],
  output: {
    path: PATHS.static,
    publicPath: '/',
    filename: 'bundle.js'
  },  
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new NpmInstallPlugin({
      save: true
    })    
  ],
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel?cacheDirectory'], exclude: /node_modules/, include: PATHS.app },
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /(\.scss)$/, loaders: ['style', 'css', 'sass']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {test: /\.(jpe?g|png|gif|svg)$/i, loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]}
    ]
  },
  resolve: {
    modulesDirectories: [
      'app',
      'node_modules'
    ],
    extensions: ['', '.json', '.js', '.jsx']
  }
};
