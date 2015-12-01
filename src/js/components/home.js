import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import { connect } from 'react-redux'

class ArgueNinjaHome extends Component{
  render(){
    var {forums} = this.props.state
    var links = []
    for(let k in forums){
      links.push(<Link key={k} to={"/arg/"+k}>{forums[k].title}</Link>)
    }
    return (
      <div className="home">{links}</div>
    );
  }
}

function selectState(state){
  console.log("home selectState",state)
  return {state}
}

export default connect(selectState)(ArgueNinjaHome)


