
import React from "react";

function TypingArea(props) {
  return (
    <div>
      <input type="text" value={props.input} onChange={props.handleInputChange} />
      <p>Time Left: {props.timer}</p>
    </div>
  );
}

export default TypingArea;
