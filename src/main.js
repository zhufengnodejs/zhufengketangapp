import React from 'react';
import {render} from 'react-dom';
import './common/index.less'
import {
  Switch,
  Route
} from 'react-router-dom';
import Home from "./containers/Home/index";
import Lesson from "./containers/Lesson/index";
import Profile from "./containers/Profile/index";
import App from "./containers/App";
import store from './store';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import createHashHistory from 'history/createHashHistory';
let history = createHashHistory();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/lesson" component={Lesson}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>
  , document.querySelector('#app'));