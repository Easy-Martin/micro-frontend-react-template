import { Service } from 'lingmou-basic-library';
import URL from './url';


@Service.httpRequest
class LoginServer {
  loginWithoutIdentifyCode(options) {
    return this.$httpRequest({
      url: URL.loginWithoutIdentifyCode.value,
      method: 'post',
      data: options,
    });
  }
}


const user = new LoginServer();

Service.register('user', user);

export default user;
