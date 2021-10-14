import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

//?STYLES
import "./index.css";

//?COMPONENT
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
