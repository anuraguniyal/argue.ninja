var React = require('react');
var ReactDom = require('react-dom');
var routes = require('./config/routes');
console.log(document.getElementById('app'),'xxxx', routes)
ReactDom.render(routes, document.getElementById('app'));

