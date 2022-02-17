import React from "react";
import { useSelector } from "react-redux";
import classes from "./DrawerToggleButton.module.css";

const DrawerToggleButton = (props) => {
  return (
    <button className={classes.menu__toggle_button} onClick={props.click}>
      <div className={classes.menu__toggle_button_item} />
      <div className={classes.menu__toggle_button_item} />
      <div className={classes.menu__toggle_button_item} />
    </button>
  );
};

export default DrawerToggleButton;
