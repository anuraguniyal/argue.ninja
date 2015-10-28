var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link

var ArgueNinjaHome = module.exports = React.createClass({
  render: function() {
    return (
      <div className="home">
        <Link to="/arg/1">Argument 1</Link>
      </div>
    );
  }
});


