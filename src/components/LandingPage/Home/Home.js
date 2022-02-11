import React from "react";
import Benefits from "../Benefits/Benefits";
import Faqs from "../Faqs/Faqs";
import HowitWorks from "../HowItWorks/HowitWorks";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.homepage_wrapper}>
      <div className={classes.home_slider_section_wrapper}></div>
      <HowitWorks />
      <Benefits />
      <Faqs/>
    </div>
  );
};

export default Home;

