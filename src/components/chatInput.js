import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class ChatInput extends Component {
  state = {
    text: ""
  };

  handleText = (e, obj) => {
    this.setState({
      text: e.target.value
    });
  };

  handleKey = e => {
    if (e.key === "Enter") {
      if (e.target.checkValidity() === true) {
        this.handleSubmit(e);
      }
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    e.target.className += " was-validated";
    if (e.target.checkValidity() === true) {
      function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        var strTime = hours + ":" + minutes + " " + ampm;
        return strTime;
      }

      const message = {
        text: this.state.text,
        user: this.props.username,
        avatar: this.props.avatar,
        time: formatAMPM(new Date())
      };
      if (this.state.text) {
        this.props.sendMessage(message);
        this.setState({ text: "" });
      }
    }
  };

  render() {
    return (
      <div className={"formPad"}>
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
        </form>
        <div className="invalid-feedback" />
      </div>
    );
  }
}
export default ChatInput;

// {this.state.text !== "" &&
//   this.props.socketID &&
//   this.message.user && (
//     <span className="typing">
//       This {`${this.message.user}`} is typing...
//     </span>
//   )}
///broadcast to other users on who's typing onkeydown
