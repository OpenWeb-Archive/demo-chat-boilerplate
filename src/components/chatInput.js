import React, { Component } from "react";
import { Button, Input, T } from "semantic-ui-react";

class ChatInput extends Component {
  state = {
    text: "",
    usermessage: ""
  };

  handleText = (e, obj) => {
    this.setState({
      text: e.target.value
    });

    if (this.props.message) {
      this.setState({
        usermessage: obj
      });
    }
  };

  // if (this.state.text !== "") {
  //   this.typing();
  // }

  // typing = () => {
  //   return;
  // };

  handleKey = e => {
    // console.log("HANLDE KEY", e);
    // if (this.props.message) {
    //   this.setState({
    //     usermessage: this.props.username
    //   });
    // }

    if (e.key === "Enter") {
      if (e.target.checkValidity() === true) {
        this.handleSubmit(e);
      }
    }
  };

  handleSubmit = e => {
    // console.log("user", this.props.username);
    e.preventDefault();
    e.target.className += " was-validated";
    if (e.target.checkValidity() === true) {
      const message = {
        text: this.state.text,
        user: this.props.username,
        avatar: this.props.avatar
      };
      // console.log("MESSAGE", message);
      if (this.state.text) {
        this.props.sendMessage(message);
        this.setState({ text: "" });
      }
    }
  };

  render() {
    console.log("PROPS", this.props);
    return (
      <div className={"gavin"}>
        <form className="needs-validation" onSubmit={e => this.handleSubmit(e)}>
          <textarea
            type="text"
            cols="10"
            className={"inputWindow"}
            placeholder="Type a message"
            value={this.state.text}
            onChange={e => this.handleText(e, this.props.username)}
            onKeyPress={this.handleKey}
            required
            pattern="^\S[a-zA-Z\d\-_.,@\s]+$"
          />

          <Button color="blue">Send</Button>
          {this.state.text !== "" &&
            this.props.socketID !== this.props.socketID && (
              <span className="typing">
                This {`${this.state.usermessage}`} is typing...
              </span>
            )}
        </form>
        <div className="invalid-feedback" />
      </div>
    );
  }
}
export default ChatInput;
