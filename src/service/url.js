import config from './prefix';

const api = config.api;

export default {
  login: {
    value: `${api}/user/v2/login`,
    label: '用户登录',
    actionName: 'login',
  },
  loginWithoutIdentifyCode: {
    value: `${api}/user/v1/loginWithoutIdentifyCode`,
    label: '用户登录(无验证码)',
    actionName: 'loginWithoutIdentifyCode',
  },
};
