var React = require('react');
var ReactDOM = require('react-dom');

var ArgueNinjaApp = React.createClass({
  render: function() {
    return (
      <div className="main_app">
        <ForumHeader />
      </div>
    );
  }
});

var ForumHeader = React.createClass({
  render: function() {
    return (
      <div className="forum_header">
      <AlphaHeader />
      <BetaHeader />
      </div>
    )
  }
})

var AlphaHeader = React.createClass({
  render: function() {
    return (
      <div className="alpha_header">
      Alpha
      </div>
    )
  }
})

var BetaHeader = React.createClass({
  render: function() {
    return (
      <div className="beta_header">
      Beta
      </div>
    )
  }
})


ReactDOM.render(
  <ArgueNinjaApp />,
  document.getElementById('app')
);
