import React from "react";

import "./FormButton.css";

const FormButton = ({ cName, text, type }) => {
  return (
    <button className={"FormButton " + cName} type={type}>
      {text}
    </button>
  );
};

export default FormButton;
