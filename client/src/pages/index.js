import React from "react";
import { Switch, Route } from "react-router-dom";

//?STYLES
import "./pages.css";

//?PAGES
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

const Pages = () => {
  return (
    <div className="Pages">
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route>Rout not found</Route>
      </Switch>
    </div>
  );
};

export default Pages;
