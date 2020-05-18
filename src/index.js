import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './public-path';

let mainProps = { container: document.getElementById('home') };

function render(props = {}) {
  ReactDOM.render(<App {...props} />, props.container);
}

window.__IS_RUN_SEFL__ = !window.__POWERED_BY_QIANKUN__ || process.env.START_ENV === 'dev';
if (window.__IS_RUN_SEFL__) {
  require('./registerApp');
  render(mainProps);
}

export async function bootstrap() {
  console.log('home app bootstraped');
}

export async function mount(props) {
  console.log('home app mount', props);
  const container = document.getElementById(props.domId);
  mainProps = { ...props, container };
  render(mainProps);
}

export async function update(props) {
  const container = document.getElementById(props.domId);
  mainProps = { ...props, container };
  render(mainProps);
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(mainProps.container);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
