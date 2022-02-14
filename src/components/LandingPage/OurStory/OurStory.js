import React from "react";
import Image from "../../../assets/our-story_bunner.png";
import classes from "./OurStory.module.css";
import ScrollToSection from "../SectionHeading/ScrollToSection";
import { useTranslation } from "react-i18next";

const OurStory = () => {
  const { t } = useTranslation();
  return (
    <>
    <section className={classes.our_story_section_wrapper} >
      <div className={classes.our_story_header}>
        <h3>{t("pages.landing.ourStory.heading")}</h3>
      </div>
      <div className={classes.our_story_row_wrapper}>
        <div className={classes.our_story_content}>
          {t("pages.landing.ourStory.paragraph", { returnObjects: true }).map((paragragh, index) => {
            return (
              <p key={index}>
                {paragragh.blackTextL}{" "}
                <span className={classes.blue_text}>{paragragh.blueText}</span>
                {" "}{paragragh.blackTextR}
              </p>
            );
          })}
        </div>
        <div className={classes.our_story_portifolio}>
          <img src={Image} alt="" />
        </div>
      </div>
    </section>
    </>
  );
};

export default OurStory;
