var Router = require('react-router').Router
var Route = require('react-router').Route
var IndexRoute = require('react-router').IndexRoute

var React = require('react');
var createBrowserHistory = require('history/lib/createBrowserHistory')

var App = require('../components/app')
var Forum = require('../components/forum')
var Home = require('../components/home')

module.exports = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="arg/:id" component={Forum}/>
    </Route>
  </Router>
);
