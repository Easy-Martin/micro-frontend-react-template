const { override, addLessLoader, adjustWorkbox, addBabelPlugin, addDecoratorsLegacy, overrideDevServer } = require('customize-cra');
const overrideProcessEnv = require('./overrideProcessEnv');
const overrideOutput = require('./overrideOutput');
const overrideOptimization = require('./overrideOptimization');
const overrideEntry = require('./overrideEntry');
const overrideMiniCssExtractPlugin = require('./overrideMiniCssExtractPlugin');
const overrideDllReference = require('./overrideDllReference');


module.exports = {
  webpack: override(
    addBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }]),
    addDecoratorsLegacy(),
    adjustWorkbox((wb) =>
      Object.assign(wb, {
        skipWaiting: true,
      })
    ),
    addLessLoader({
      javascriptEnabled: true,
    }),
    overrideEntry(),
    overrideOutput(),
    overrideOptimization(),
    overrideDllReference(),
    overrideMiniCssExtractPlugin(),
    overrideProcessEnv({
      ROUTE_PERFIX: JSON.stringify(process.env.ROUTE_PERFIX),
      API_DOMAIN: JSON.stringify(process.env.API_DOMAIN),
      START_ENV: JSON.stringify(process.env.START_ENV),
    })
  ),
  devServer: overrideDevServer((config) => {
    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;
    // config.hot = false;
    // config.watchContentBase = false;
    return config;
  }),
};
