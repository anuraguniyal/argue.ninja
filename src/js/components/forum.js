import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

var ArgueNinjaForum = module.exports = React.createClass({
  render: function() {
    return (
        <div className="forum">
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
      Alpha1
      </div>
    )
  }
})

var BetaHeader = React.createClass({
  render: function() {
    return (
      <div className="beta_header">
      Beta1x
      </div>
    )
  }
})


