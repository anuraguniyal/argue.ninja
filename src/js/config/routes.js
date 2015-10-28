var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link
var React = require('react');
var createBrowserHistory = require('history/lib/createBrowserHistory')

var App = require('../components/app')

module.exports = (
  <Router>
    <Route path="/" component={App}>
    <Route path="/try" component={App}/>
    </Route>
  </Router>
);
