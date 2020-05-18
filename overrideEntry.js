const { name } = require('./package');
const path = require('path');

const overrideEntry = () => (config) => {
  if (process.env.NODE_ENV === 'development') {
    return config;
  }
  config.entry = {
    [name]: path.resolve('src/index.js'),
  };
  return config;
};

module.exports = overrideEntry;
