import React from "react";
import classes from "./ScrollToSection.module.css";

const ScrollToSection = ({ id }) => {
  return <div id={id} className={classes.scroll_to_wrapper}></div>;
};

export default ScrollToSection;
