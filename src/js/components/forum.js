import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import { connect } from 'react-redux'

class ArgueNinjaForum extends Component{
  render() {
    var {forums, messages} = this.props.state
    var forum_id = this.props.params.id
    var forum = forums[forum_id]
    var messages = messages[forum_id]
    return (
        <div className="forum">
            <ForumHeader forum={forum} />
            <ForumMessages messages={messages} />
        </div>
    );
  }
}

class ForumHeader extends Component{
  render() {
    var {forum} = this.props
    return (
      <div className="forum_header">
        <h2>{forum.title}</h2>
        <div className="alpha_header">
        {forum.alpha_opt} - {forum.alpha_votes}
        </div>

        <div className="beta_header">
        {forum.beta_opt} - {forum.beta_votes}
        </div>
      </div>
    )
  }
}

class ForumMessages extends Component{
  render() {
    var {messages} = this.props
    var message_boxes = []
    for(let k in messages){
      message_boxes.push(<ForumMessage key={k} message={messages[k]}/>)
    }

    return (
      <div className="messages">{message_boxes}</div>
    );
  }
}

class ForumMessage extends Component{
  render(){
    var {message} = this.props
    var klass = message.vote+'_message'
    return (
      <div className={klass}>{message.user_display_name} -> {message.text}</div>
    );
  }
}



function selectState(state){
  console.log("forum selectState",state)
  return {state}
}
export default connect(selectState)(ArgueNinjaForum)


