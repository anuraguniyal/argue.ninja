import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router'
import { connect } from 'react-redux'

class ArgueNinjaApp extends Component {

  render() {
    return (
      <div className="main_app">
        <div className="app_banner">Argue Ninja - keep arguing...</div>
        {this.props.children}
      </div>
    );
  }
}

function selectState(state){
  return {state}
}

export default connect(selectState)(ArgueNinjaApp)
