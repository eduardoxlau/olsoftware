import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login, Home } from "../screens/index";

const Screens = () => {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Home" component={Home} />
    </Router>
  );
};
export default Screens;
