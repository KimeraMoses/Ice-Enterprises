import react from "react";
import classes from "./OurTeam.module.css";
import TeamCard from "./TeamCard";

const OurTeam = () => {
  return (
    <section className={classes.our_team_section_wrapper}>
      <div className={classes.section_header}>
        <h3>Our Team</h3>
      </div>
      <div className={classes.our_team_row_wrapper}>
          <TeamCard/>
          <TeamCard/>
      </div>
    </section>
  );
};

export default OurTeam;