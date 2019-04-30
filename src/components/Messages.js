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
      "https://pbs.twimg.com/profile_images/1002272769352978433/9S4QWSR0.jpg";
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
