import React from 'react';

const RouteContext = React.createContext(null);
export const { Provider, Consumer } = RouteContext;

export function withRouteContext(ComponentWrapper) {
  return class withRouteContextComponent extends React.Component {
    render() {
      return <Consumer>{(context) => <ComponentWrapper {...this.props} {...context} />}</Consumer>;
    }
  };
}
