let configs = {
  login: { name: 'login', script: 'http://localhost:2234/login/static/js/login.js', style: 'http://localhost:2234/login/static/css/login.css' },
};

export default Object.values(configs).map((item) => ({
  name: item.name,
  container: '#subapp-container',
  activeRule: (location) => location.pathname.startsWith(`/${item.name}`),
  props: {
    basename: '/home',
    domId: item.name,
  },
  entry: {
    scripts: [item.script],
    html: `<div id="subapp-${item.name}">${item.style ? `<link rel="stylesheet" href="${item.style}">` : ''}<div id="${item.name}"></div></div>`,
  },
}));
