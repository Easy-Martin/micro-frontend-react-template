import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { BaseStore } from 'lingmou-basic-library';
import AppHome from './AppHome';

export default function App(props) {
  return (
    <Provider {...BaseStore}>
      <Router>
        <Switch>
          <Route path="/{{name}}" render={(params) => <AppHome {...props} {...params} />}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}
