import React from "react";
import Image from "../../../assets/Image.png";
import classes from "./OurStory.module.css";
import data from "../../../locales/en.json";

const OurStory = () => {
  const storyData = data.pages.landing.ourStory;
  return (
    <section className={classes.our_story_section_wrapper}>
      <div className={classes.our_story_header}>
        <h3>{storyData.heading}</h3>
      </div>
      <div className={classes.our_story_row_wrapper}>
        <div className={classes.our_story_content}>
          {storyData.paragraph.map((paragragh, index) => {
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
  );
};

export default OurStory;
