import React from "react";
import Benefits from "../Benefits/Benefits";
import AppBar from "../../AppBar/AppBar";
import Faqs from "../Faqs/Faqs";
import HeroSlider from "../HeroSlider/HeroSlider";
import HowitWorks from "../HowItWorks/HowitWorks";
import OurStory from "../OurStory/OurStory";
import OurTeam from "../OurTeam/OurTeam";
import classes from "./Home.module.css";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <div className={classes.homepage_wrapper}>
      <AppBar />
      <HeroSlider />
      <HowitWorks />
      <Benefits />
      <Faqs />
      <OurTeam />
      <OurStory />
      <Footer />
    </div>
  );
};

export default Home;
