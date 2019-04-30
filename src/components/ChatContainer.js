import React, { Component } from "react";
import Messages from "./Messages";
import ChatInput from "./chatInput";

class ChatContainer extends Component {
  componentDidUpdate() {
    let chatWindow = this.refs.chatWindow;
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  typing = () => {
    console.log("this user is typing");
  };

  render() {
    const { sendMessage, messages, username, avatar } = this.props;

    const renderMessages = () =>
      messages.map((message, i) => {
        return (
          <Messages
            key={i}
            message={message}
            username={username}
            avatar={avatar}
          />
        );
      });

    return (
      <React.Fragment>
        <div ref="chatWindow" className={"chat-window"}>
          {renderMessages()}
        </div>
        <div>
          <ChatInput
            sendMessage={sendMessage}
            username={username}
            avatar={avatar}
            typing={this.typing}
            message={messages[messages.length - 1]}
            socketID={this.props.socketID}
          />
        </div>
      </React.Fragment>
    );
  }
}
export default ChatContainer;
