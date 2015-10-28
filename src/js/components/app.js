var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link

var ArgueNinjaApp = module.exports = React.createClass({
  render: function() {
    return (
      <div className="main_app">
        <div className="app_banner">ArgueNinja - keep arguing...</div>
        {this.props.children}
      </div>
    );
  }
});


