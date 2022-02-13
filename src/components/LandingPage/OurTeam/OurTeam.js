import react from "react";
import classes from "./OurTeam.module.css";
import TeamCard from "./TeamCard";
import data from "../../../locales/en.json";
import ScrollToSection from "../SectionHeading/ScrollToSection";

const OurTeam = () => {
  const teamData = data.pages.landing.ourTeam;
  return (
    <>
    <ScrollToSection id="our-team"/>
    <section className={classes.our_team_section_wrapper} >
      <div className={classes.section_header}>
        <h3>{teamData.heading}</h3>
      </div>
      <div className={classes.our_team_row_wrapper}>
        {teamData.cards.map((team, index) => {
          return <TeamCard Team={team} key={index} />;
        })}
      </div>
    </section>
    </>
  );
};

export default OurTeam;
