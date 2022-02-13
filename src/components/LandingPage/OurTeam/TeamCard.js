import React from "react";
import UserAvatar from "../../../assets/User-Avater1.png";
import UserAvatar2 from "../../../assets/User-Avater2.png";
import classes from "./TeamCard.module.css";

const TeamCard = ({ Team, key }) => {
  const UserProfile = Team.name ==="Matt"? UserAvatar:UserAvatar2; 
  return (
    <div className={classes.team_card_wrapper} key={key}> 
      <div className={classes.team_avatar_wrapper}>
        <img src={UserProfile} alt="" />
      </div>
      <div className={classes.team_info_wrapper}>
        <div className={classes.team_name_wrapper}>
          <div className={classes.name_role_row}>
            <div className={classes.name}>{Team.name}</div>
            <div className={classes.role}>{Team.role}</div>
          </div>
          <span className={classes.discord}>{Team.discord.title} : {Team.discord.value}</span>
        </div>
        <div className={classes.background}>
          <h5 className={classes.text_upper}>{Team.background.title}</h5>
          <p>{Team.background.value}</p>
        </div>
        <div className={classes.specialities}>
          <h5 className={classes.text_upper}>{Team.specialities.title}</h5>
          <p>{Team.specialities.value}</p>
        </div>
        <div className={classes.hustle}>
          <h5 className={classes.text_upper}>{Team.sidehustle.title}</h5>
          <p>{Team.sidehustle.value}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
