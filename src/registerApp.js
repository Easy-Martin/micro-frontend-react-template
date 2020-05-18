import { registerMicroApps, runAfterFirstMounted, start } from 'qiankun';

import AppConfig from './config';

// for angular subapp

/**
 * 主应用 **可以使用任意技术栈**
 * 以下分别是 React 和 Vue 的示例，可切换尝试
 */
// import render from './render/VueRender'

/**
 * Step1 初始化应用（可选）
 */
// render({ loading: true });

/**
 * Step2 注册子应用
 */

 console.log(AppConfig)

registerMicroApps(AppConfig, {
  beforeLoad: [
    (app) => {
      console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
    },
  ],
  beforeMount: [
    (app) => {
      console.log(app)
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
    },
  ],
  afterUnmount: [
    (app) => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
    },
  ],
});

/**
 * Step3 设置默认进入的子应用
 */
// setDefaultMountApp("/react16");

/**
 * Step4 启动应用
 */
start({
  prefetch: ['login'],
  jsSandbox: true,
  singular: true,
});

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});
