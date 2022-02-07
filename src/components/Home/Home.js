import React from "react";
import Header from "../AppBar/Header";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.homepage_wrapper}>
      <div className={classes.home_top_bar}>
        <Header />

        {/* <div className={classes.home_hero_content_wrapper}>
          Content Goes here
        </div> */}
      </div>
    </div>
  );
};

export default Home;
