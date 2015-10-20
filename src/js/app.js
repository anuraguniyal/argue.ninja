var React = require('react');
var ReactDOM = require('react-dom');

var ArgueNinjaApp = React.createClass({
  render: function() {
    return (
      <div className="main_app">
        Hello, world! I am a ArgueNinja.
      </div>
    );
  }
});
ReactDOM.render(
  <ArgueNinjaApp />,
  document.getElementById('app')
);
