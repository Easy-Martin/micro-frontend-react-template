const webpack = require('webpack');
const path = require('path');

const overrideDllReference = () => (config) => {
  config.plugins.unshift(
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require(path.resolve('./public/dll/vendor-manifest.json')),
    })
  );
  return config;
};

module.exports = overrideDllReference;
