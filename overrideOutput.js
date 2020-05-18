const { name } = require('./package');
const overrideOutput = () => (config) => {
  // if (process.env.NODE_ENV === 'development') {
  //   return config;
  // }
  delete config.output.chunkFilename;
  config.output.filename = `static/js/${name}.js`;
  config.output.library = `${name}-[name]`;
  config.output.libraryTarget = 'umd';
  config.output.jsonpFunction = `webpackJsonp_${name}`;

  return config;
};

module.exports = overrideOutput;
