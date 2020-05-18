import React from 'react';
import { inject, observer } from 'mobx-react';
import { Button } from 'antd';
import { Utils } from 'lingmou-basic-library';
import { Provider, withRouteContext } from './RouteContext';
import { InitialRequest } from 'lingmou-components';
import './content.less';

class AppContext extends React.Component {
  render() {
    const { route, history } = this.props;
    const shimRoute = { push: history.push, replace: history.replace };
    return (
      <Provider value={{ route: route ? route : shimRoute }}>
        <AppHomeView {...this.props} />
      </Provider>
    );
  }
}
function InitialHomeRequest({ children }) {
  if (window.__IS_RUN_SEFL__) {
    return <InitialRequest>{children}</InitialRequest>;
  } else {
    return children;
  }
}

@withRouteContext
@inject('user')
@observer
class AppHomeView extends React.Component {
  componentDidMount() {
    const { user } = this.props;
    if (!user.isLogin) {
      this.props.route.replace('/login');
    }
  }
  openNewPage = () => {
    console.log(this.props);
    this.props.route.push(`/home?id=${Utils.uuid()}`);
  };
  render() {
    const { user } = this.props;
    if (!user.isLogin) {
      return null;
    }
    return (
      <InitialHomeRequest>
        <div className="home-layout">
          <h1 style={{ color: 'red' }}>这是Home页面</h1>
          <h2>当前登录用户名{user.userInfo.loginName}</h2>
          <Button type="primary" onClick={this.openNewPage}>
            新开一个Home Page
          </Button>
        </div>
      </InitialHomeRequest>
    );
  }
}

export default AppContext;
