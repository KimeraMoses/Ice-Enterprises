import React from "react";
import heroImage from "../../../assets/heroImage.png";
import classes from "./HeroSlider.module.css";
import HeroCard from "./HeroCard";
import { useTranslation } from "react-i18next";
import ScrollToSection from "../SectionHeading/ScrollToSection";

const HeroSlider = () => {
  const { t } = useTranslation();
  return (
    <>
    <div className={classes.hero_overlay}>
      <div className={classes.home_slider_section_wrapper}>
        <div className={classes.hero_content_wrapper}>
          <div className={classes.hero_content_header}>
            <h5>{t("pages.landing.heroSlider.heading")}</h5>
            <img src={heroImage} alt="" />
          </div>
          <div className={classes.description_wrapper}>
            <p>{t("pages.landing.heroSlider.description")}}</p>
          </div>
          <div className={classes.hero_cards_wrapper}>
            {t("pages.landing.benefits.cards", { returnObjects: true }).map(
              (card, index) => {
                return <HeroCard CardData={card} key={index} />;
              }
            )}
          </div>
        </div>
      </div>
    </div>
      <ScrollToSection id="howItWorks" />

    </>
  );
};

export default HeroSlider;
