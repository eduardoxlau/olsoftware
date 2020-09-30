import React from "react";
import { Login, Home } from "../screens/index";

const Screens = (props) => {
  const { isAuth } = props;
  return isAuth ? <Home /> : <Login />;
};
export default Screens;
