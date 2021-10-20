import React from "react";

import "./Input.css";

//?changeValue= a callback that changes input state
const Input = ({ cName, text, type, value, changeValue }) => {
  return (
    <div className={"Input " + cName}>
      <label>{text}</label>
      <input type={type} value={value} onChange={changeValue} />
    </div>
  );
};

export default Input;
