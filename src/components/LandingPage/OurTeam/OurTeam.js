import react from "react";
import classes from "./OurTeam.module.css";
import TeamCard from "./TeamCard";
import ScrollToSection from "../SectionHeading/ScrollToSection";
import { useTranslation } from "react-i18next";

const OurTeam = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className={classes.our_team_section_wrapper}>
        <div className={classes.section_header}>
          <h3>{t("pages.landing.ourTeam.heading")}</h3>
        </div>
        <div className={classes.our_team_row_wrapper}>
          {t("pages.landing.ourTeam.cards", { returnObjects: true }).map(
            (team, index) => {
              return <TeamCard Team={team} key={index} />;
            }
          )}
        </div>
      </section>
      <ScrollToSection id="our-story" />
    </>
  );
};

export default OurTeam;
