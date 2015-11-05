import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

var ArgueNinjaHome = module.exports = React.createClass({
  render: function() {
    return (
      <div className="home">
        <Link to="/arg/1">Argument 1</Link>
      </div>
    );
  }
});


