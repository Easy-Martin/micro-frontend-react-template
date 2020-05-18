const proxy = require('http-proxy-middleware');

const proxyConfig = {
  '/api': {
    target: 'http://127.0.0.1:8992'
    // target: "http://127.0.0.1:8882"
    // target: "http://127.0.0.1:8892"
    // target: 'http://127.0.0.1:8896'
  },
  '/staticResource': {
    target: 'http://127.0.0.1:8992'
    // target: "http://127.0.0.1:8882"
    // target: "http://127.0.0.1:8892"
    // target: 'http://127.0.0.1:8896'
  }
};

module.exports = function(app) {
  Object.keys(proxyConfig).forEach(key => {
    app.use(proxy(key, proxyConfig[key]));
  });
};
