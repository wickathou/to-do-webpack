const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

module.exports = async () => {
  // Create a new webpack compiler instance
  const compiler = webpack(webpackConfig);

  // Run the compiler
  compiler.run((err, stats) => {
    if (err) {
      console.error(err);
    } else {
      console.log(stats.toString());
    }
  });
};
