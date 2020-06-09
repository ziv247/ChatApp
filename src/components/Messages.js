import React, { Component } from 'react';


class Messages extends Component {
    render() {
        console.log(this.props.messages)
        return ( 
            <div className = "messages" ref={this.props.refProp}>
                {this.props.messages.map((message, indexMessage) => 
                    <div className ={ `message ${this.props.username === message.user ? 'message--me' : message.user === 'server_1' ? 'message--server' :  message.user === 'server_0' && 'message--server-0'}`} key={indexMessage} >
                        <div className = "message__user" > {message.user.slice(0,6) === 'server' ? "" : message.user}</div> 
                        <div className = "message__content" > {message.content} </div> 
                    </div> 
                    
                )} 
            </div>
            );
        }
    }

    export default Messages;