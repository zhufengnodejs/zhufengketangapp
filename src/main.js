import React from 'react';
import {render} from 'react-dom';
import './common/index.less'
import {
  HashRouter as Router,
  Switch,
  Route} from 'react-router-dom';
import Home from "./containers/Home/index";
import Lesson from "./containers/Lesson/index";
import Profile from "./containers/Profile/index";
import App from "./containers/App";
render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/lesson" component={Lesson}/>
        <Route path="/profile" component={Profile}/>
      </Switch>
    </App>
  </Router>
  , document.querySelector('#app'));