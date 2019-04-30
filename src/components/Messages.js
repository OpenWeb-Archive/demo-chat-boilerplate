import React from "react";

const Messages = props => {
  let color;
  if (props.message.user === props.username) {
    color = "blue";
  } else {
    color = "green";
  }

  return (
    <div className={"outputText"}>
      <img src={props.message.avatar} />
      <b style={{ color }}>{props.message.user}</b> {props.message.time}: <br />
      <span className="messagepad">{props.message.text}</span>
    </div>
  );
};

export default Messages;
