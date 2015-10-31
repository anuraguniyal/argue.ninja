(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/auniyal/src/argue.ninja/src/js/components/app.js":[function(require,module,exports){
var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link

var ArgueNinjaApp = module.exports = React.createClass({displayName: "exports",
  render: function() {
    return (
      React.createElement("div", {className: "main_app"}, 
        React.createElement("div", {className: "app_banner"}, "Argue Ninja - keep arguing..."), 
        this.props.children
      )
    );
  }
});

},{"react":"react","react-dom":"react-dom","react-router":"react-router"}],"/Users/auniyal/src/argue.ninja/src/js/components/forum.js":[function(require,module,exports){
var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link

var ArgueNinjaForum = module.exports = React.createClass({displayName: "exports",
  render: function() {
    return (
        React.createElement("div", {className: "forum"}, 
            React.createElement(ForumHeader, null)
        )
    );
  }
});

var ForumHeader = React.createClass({displayName: "ForumHeader",
  render: function() {
    return (
      React.createElement("div", {className: "forum_header"}, 
      React.createElement(AlphaHeader, null), 
      React.createElement(BetaHeader, null)
      )
    )
  }
})

var AlphaHeader = React.createClass({displayName: "AlphaHeader",
  render: function() {
    return (
      React.createElement("div", {className: "alpha_header"}, 
      "Alpha1"
      )
    )
  }
})

var BetaHeader = React.createClass({displayName: "BetaHeader",
  render: function() {
    return (
      React.createElement("div", {className: "beta_header"}, 
      "Beta1x"
      )
    )
  }
})

},{"react":"react","react-dom":"react-dom","react-router":"react-router"}],"/Users/auniyal/src/argue.ninja/src/js/components/home.js":[function(require,module,exports){
var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link

var ArgueNinjaHome = module.exports = React.createClass({displayName: "exports",
  render: function() {
    return (
      React.createElement("div", {className: "home"}, 
        React.createElement(Link, {to: "/arg/1"}, "Argument 1")
      )
    );
  }
});

},{"react":"react","react-dom":"react-dom","react-router":"react-router"}],"/Users/auniyal/src/argue.ninja/src/js/config/routes.js":[function(require,module,exports){
var Router = require('react-router').Router
var Route = require('react-router').Route
var IndexRoute = require('react-router').IndexRoute

var React = require('react');
var createBrowserHistory = require('history/lib/createBrowserHistory')

var App = require('../components/app')
var Forum = require('../components/forum')
var Home = require('../components/home')

module.exports = (
  React.createElement(Router, null, 
    React.createElement(Route, {path: "/", component: App}, 
      React.createElement(IndexRoute, {component: Home}), 
      React.createElement(Route, {path: "arg/:id", component: Forum})
    )
  )
);

},{"../components/app":"/Users/auniyal/src/argue.ninja/src/js/components/app.js","../components/forum":"/Users/auniyal/src/argue.ninja/src/js/components/forum.js","../components/home":"/Users/auniyal/src/argue.ninja/src/js/components/home.js","history/lib/createBrowserHistory":"history/lib/createBrowserHistory","react":"react","react-router":"react-router"}],"/Users/auniyal/src/argue.ninja/src/js/main.js":[function(require,module,exports){
var React = require('react');
var ReactDom = require('react-dom');
var routes = require('./config/routes');
ReactDom.render(routes, document.getElementById('app'));

},{"./config/routes":"/Users/auniyal/src/argue.ninja/src/js/config/routes.js","react":"react","react-dom":"react-dom"}]},{},["/Users/auniyal/src/argue.ninja/src/js/main.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYXVuaXlhbC9zcmMvYXJndWUubmluamEvc3JjL2pzL2NvbXBvbmVudHMvYXBwLmpzIiwiL1VzZXJzL2F1bml5YWwvc3JjL2FyZ3VlLm5pbmphL3NyYy9qcy9jb21wb25lbnRzL2ZvcnVtLmpzIiwiL1VzZXJzL2F1bml5YWwvc3JjL2FyZ3VlLm5pbmphL3NyYy9qcy9jb21wb25lbnRzL2hvbWUuanMiLCIvVXNlcnMvYXVuaXlhbC9zcmMvYXJndWUubmluamEvc3JjL2pzL2NvbmZpZy9yb3V0ZXMuanMiLCIvVXNlcnMvYXVuaXlhbC9zcmMvYXJndWUubmluamEvc3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3BDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJOztBQUV2QyxJQUFJLGFBQWEsR0FBRyxvQ0FBb0MsdUJBQUE7RUFDdEQsTUFBTSxFQUFFLFdBQVc7SUFDakI7TUFDRSxvQkFBQSxLQUFJLEVBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFDLFVBQVcsQ0FBQSxFQUFBO1FBQ3hCLG9CQUFBLEtBQUksRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsWUFBYSxDQUFBLEVBQUEsK0JBQW1DLENBQUEsRUFBQTtRQUM5RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVM7TUFDakIsQ0FBQTtNQUNOO0dBQ0g7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUNIOztBQ2RBLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDcEMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUk7O0FBRXZDLElBQUksZUFBZSxHQUFHLG9DQUFvQyx1QkFBQTtFQUN4RCxNQUFNLEVBQUUsV0FBVztJQUNqQjtRQUNJLG9CQUFBLEtBQUksRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsT0FBUSxDQUFBLEVBQUE7WUFDbkIsb0JBQUMsV0FBVyxFQUFBLElBQUEsQ0FBRyxDQUFBO1FBQ2IsQ0FBQTtNQUNSO0dBQ0g7QUFDSCxDQUFDLENBQUMsQ0FBQzs7QUFFSCxJQUFJLGlDQUFpQywyQkFBQTtFQUNuQyxNQUFNLEVBQUUsV0FBVztJQUNqQjtNQUNFLG9CQUFBLEtBQUksRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsY0FBZSxDQUFBLEVBQUE7TUFDOUIsb0JBQUMsV0FBVyxFQUFBLElBQUEsQ0FBRyxDQUFBLEVBQUE7TUFDZixvQkFBQyxVQUFVLEVBQUEsSUFBQSxDQUFHLENBQUE7TUFDUixDQUFBO0tBQ1A7R0FDRjtBQUNILENBQUMsQ0FBQzs7QUFFRixJQUFJLGlDQUFpQywyQkFBQTtFQUNuQyxNQUFNLEVBQUUsV0FBVztJQUNqQjtNQUNFLG9CQUFBLEtBQUksRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsY0FBZSxDQUFBLEVBQUE7QUFBQSxNQUFBLFFBQUE7QUFBQSxNQUV4QixDQUFBO0tBQ1A7R0FDRjtBQUNILENBQUMsQ0FBQzs7QUFFRixJQUFJLGdDQUFnQywwQkFBQTtFQUNsQyxNQUFNLEVBQUUsV0FBVztJQUNqQjtNQUNFLG9CQUFBLEtBQUksRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsYUFBYyxDQUFBLEVBQUE7QUFBQSxNQUFBLFFBQUE7QUFBQSxNQUV2QixDQUFBO0tBQ1A7R0FDRjtBQUNILENBQUMsQ0FBQztBQUNGOztBQzVDQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3BDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJOztBQUV2QyxJQUFJLGNBQWMsR0FBRyxvQ0FBb0MsdUJBQUE7RUFDdkQsTUFBTSxFQUFFLFdBQVc7SUFDakI7TUFDRSxvQkFBQSxLQUFJLEVBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFDLE1BQU8sQ0FBQSxFQUFBO1FBQ3BCLG9CQUFDLElBQUksRUFBQSxDQUFBLENBQUMsRUFBQSxFQUFFLENBQUMsUUFBUyxDQUFBLEVBQUEsWUFBaUIsQ0FBQTtNQUMvQixDQUFBO01BQ047R0FDSDtBQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0g7O0FDYkEsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU07QUFDM0MsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEtBQUs7QUFDekMsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVU7O0FBRW5ELElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixJQUFJLG9CQUFvQixHQUFHLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQzs7QUFFdEUsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDO0FBQ3RDLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQztBQUMxQyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUM7O0FBRXhDLE1BQU0sQ0FBQyxPQUFPO0VBQ1osb0JBQUMsTUFBTSxFQUFBLElBQUMsRUFBQTtJQUNOLG9CQUFDLEtBQUssRUFBQSxDQUFBLENBQUMsSUFBQSxFQUFJLENBQUMsR0FBQSxFQUFHLENBQUMsU0FBQSxFQUFTLENBQUUsR0FBSyxDQUFBLEVBQUE7TUFDOUIsb0JBQUMsVUFBVSxFQUFBLENBQUEsQ0FBQyxTQUFBLEVBQVMsQ0FBRSxJQUFLLENBQUUsQ0FBQSxFQUFBO01BQzlCLG9CQUFDLEtBQUssRUFBQSxDQUFBLENBQUMsSUFBQSxFQUFJLENBQUMsU0FBQSxFQUFTLENBQUMsU0FBQSxFQUFTLENBQUUsS0FBTSxDQUFFLENBQUE7SUFDbkMsQ0FBQTtFQUNELENBQUE7Q0FDVixDQUFDOzs7QUNsQkYsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNwQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN4QyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIExpbmsgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5MaW5rXG5cbnZhciBBcmd1ZU5pbmphQXBwID0gbW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9hcHBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBfYmFubmVyXCI+QXJndWUgTmluamEgLSBrZWVwIGFyZ3VpbmcuLi48L2Rpdj5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuXG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgTGluayA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLkxpbmtcblxudmFyIEFyZ3VlTmluamFGb3J1bSA9IG1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ydW1cIj5cbiAgICAgICAgICAgIDxGb3J1bUhlYWRlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxudmFyIEZvcnVtSGVhZGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtX2hlYWRlclwiPlxuICAgICAgPEFscGhhSGVhZGVyIC8+XG4gICAgICA8QmV0YUhlYWRlciAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59KVxuXG52YXIgQWxwaGFIZWFkZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxwaGFfaGVhZGVyXCI+XG4gICAgICBBbHBoYTFcbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSlcblxudmFyIEJldGFIZWFkZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmV0YV9oZWFkZXJcIj5cbiAgICAgIEJldGExeFxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59KVxuXG5cbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBMaW5rID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJykuTGlua1xuXG52YXIgQXJndWVOaW5qYUhvbWUgPSBtb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lXCI+XG4gICAgICAgIDxMaW5rIHRvPVwiL2FyZy8xXCI+QXJndW1lbnQgMTwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5cbiIsInZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5Sb3V0ZXJcbnZhciBSb3V0ZSA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLlJvdXRlXG52YXIgSW5kZXhSb3V0ZSA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLkluZGV4Um91dGVcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBjcmVhdGVCcm93c2VySGlzdG9yeSA9IHJlcXVpcmUoJ2hpc3RvcnkvbGliL2NyZWF0ZUJyb3dzZXJIaXN0b3J5JylcblxudmFyIEFwcCA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvYXBwJylcbnZhciBGb3J1bSA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvZm9ydW0nKVxudmFyIEhvbWUgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL2hvbWUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgPFJvdXRlcj5cbiAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcH0+XG4gICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0hvbWV9Lz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiYXJnLzppZFwiIGNvbXBvbmVudD17Rm9ydW19Lz5cbiAgICA8L1JvdXRlPlxuICA8L1JvdXRlcj5cbik7XG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgcm91dGVzID0gcmVxdWlyZSgnLi9jb25maWcvcm91dGVzJyk7XG5SZWFjdERvbS5yZW5kZXIocm91dGVzLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG4iXX0=
