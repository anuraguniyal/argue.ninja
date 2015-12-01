import { Router, Route, Link, IndexRoute } from 'react-router'
import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import App from '../components/app'
import Forum from '../components/forum'
import Home from '../components/home'

export default (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="arg/:id" component={Forum}/>
    </Route>
  </Router>
);
