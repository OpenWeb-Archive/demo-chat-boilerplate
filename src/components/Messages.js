import React from "react";

const Messages = props => {
  let color;
  if (props.message.user === props.username) {
    color = "blue";
  } else {
    color = "green";
  }
  let avatar = props.message.avatar;
  if (avatar === "") {
    avatar =
      "https://spotim-demo-chat-server.herokuapp.com/avatars/002-psyduck.png";
  }

  return (
    <div className={"outputText"}>
      <img src={avatar} alt="avatar" />
      <b style={{ color }}>{props.message.user}</b> {props.message.time}: <br />
      <span className="messagepad">{props.message.text}</span>
    </div>
  );
};

export default Messages;
