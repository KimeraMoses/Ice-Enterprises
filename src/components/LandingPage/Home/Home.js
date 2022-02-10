import React from "react";
import Benefits from "../Benefits/Benefits";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.homepage_wrapper}>
      <div className={classes.home_slider_section_wrapper}></div>
      {/* <Benefits /> */}
    </div>
  );
};

export default Home;
