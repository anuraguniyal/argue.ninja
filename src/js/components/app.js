import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router'

var ArgueNinjaApp = module.exports = React.createClass({
  render: function() {
    return (
      <div className="main_app">
        <div className="app_banner">Argue Ninja - keep arguing...</div>
        {this.props.children}
      </div>
    );
  }
});


