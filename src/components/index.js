import React from "react";
import logo from "../assets/spotim-logo.jpg";
import { Container, Image, Input, Button } from "semantic-ui-react";
import styled from "styled-components";
import ChatContainer from "./ChatContainer";
import { subscribeToChat } from "../index.js";

const Logo = styled.div`
  img {
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
  }
`;

class App extends React.PureComponent {
  state = {
    loggedIn: false,
    messages: [],
    username: "",
    avatar: ""
  };

  componentDidMount() {
    subscribeToChat(this.receiveMessage);
  }

  receiveMessage = data => {
    this.setState({ messages: [...this.state.messages, data] });
  };

  inputHandle = e => {
    this.setState({ [e.target.name]: e.target.value.trim() });
  };

  setUser = () => {
    if (this.state.username) {
      this.setState({ loggedIn: true });
    }
  };

  sendMessage = message => {
    if (this.state.username && message.text) {
      this.props.socket.emit("spotim/chat", message);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Container className={"spotim-header"}>
          <div className={"spotim-title"}>Welcome to the Spot.IM Chat app</div>
          <div>
            <Logo>
              <Image size={"tiny"} src={logo} />
            </Logo>
          </div>
        </Container>
        <Container>
          {this.state.loggedIn && this.state.username ? (
            <ChatContainer
              sendMessage={this.sendMessage}
              messages={this.state.messages}
              username={this.state.username}
              avatar={this.state.avatar}
              socketID={this.props.socket.id}
            />
          ) : (
            <div>
              <Input
                style={{ color: "#0082DD" }}
                name="username"
                icon="users"
                iconPosition="left"
                placeholder="Type your Username"
                type="text"
                value={this.state.Username}
                onChange={e => this.inputHandle(e)}
              />
              <Input
                style={{ color: "#0082DD" }}
                placeholder="image url"
                name="avatar"
                type="text"
                value={this.state.avatar}
                onChange={e => this.inputHandle(e)}
              />
              <Button color="blue" onClick={this.setUser}>
                Set Your Username
              </Button>
            </div>
          )}
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
