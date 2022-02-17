import React from "react";
import Logo from "../AppBar/Logo";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header_wrapper}>
      <Logo />
    </div>
  );
};

export default Header;
