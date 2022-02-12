import React from "react";
import heroImage from "../../../assets/heroImage.png";
import classes from "./HeroSlider.module.css";
import data from "../../../locales/en.json";
import HeroCard from "./HeroCard";

const HeroSlider = () => {
  const heroSliderData = data.pages.landing.heroSlider;
  const heroCardsData = data.pages.landing.benefits.cards;
  return (
    <div className={classes.hero_overlay}>
      <div className={classes.home_slider_section_wrapper}>
        <div className={classes.hero_content_wrapper}>
          <div className={classes.hero_content_header}>
            <h5>{heroSliderData.heading}</h5>
            <img src={heroImage} alt="" />
          </div>
          <div className={classes.description_wrapper}>
            <p>{heroSliderData.description}</p>
          </div>
          <div className={classes.hero_cards_wrapper}>
            {heroCardsData.map((card, index) => {
              return <HeroCard CardData={card} key={index}/>;
            })}
            {/* <HeroCard /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
