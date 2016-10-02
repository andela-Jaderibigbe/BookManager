import webpack from 'webpack';
import path from 'path';
import express from 'express';
import open from 'open';

import config from '../webpack.config';

/* eslint-disable no-console */
const port = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath : config.output.publicPath,
    stats: {
      colors : true,
      chunks : false
    }    
  })
);

app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));

app.use(express.static(path.join(__dirname, '../static')));

app.get('*', (req, res) => {
  res.sendFile(path.join( __dirname, '../static/index.html'));
});

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.info(`🚧  Webpack development server listening on port ${port}`);
  open(`http://0.0.0.0:${port}`);
});
