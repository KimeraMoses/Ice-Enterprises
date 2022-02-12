import React from "react";
import Benefits from "../Benefits/Benefits";
import Faqs from "../Faqs/Faqs";
import HeroSlider from "../HeroSlider/HeroSlider";
import HowitWorks from "../HowItWorks/HowitWorks";
import OurStory from "../OurStory/OurStory";
import OurTeam from "../OurTeam/OurTeam";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.homepage_wrapper}>
      <HeroSlider/>
      <HowitWorks />
      <Benefits />
      <Faqs />
      <OurTeam />
      <OurStory />
    </div>
  );
};

export default Home;
