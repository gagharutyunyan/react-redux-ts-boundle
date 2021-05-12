/**
 * @description Returns a config for development server
 * @memberOf module:Parts
 * @return {Part}
 */
function getDevServer() {
  return {
    historyApiFallback: true,
    host: 'localhost',
    port: 8002,
    hot: true,
    open: true,
    disableHostCheck: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  };
}

module.exports = getDevServer;
