import React from "react";
import UserAvatar from "../../../assets/User-Avater1.png";
import classes from "./TeamCard.module.css";

const TeamCard = () => {
  return (
    <div className={classes.team_card_wrapper}>
      <div className={classes.team_avatar_wrapper}>
        <img src={UserAvatar} alt="" />
      </div>
      <div className={classes.team_info_wrapper}>
        <div className={classes.team_name_wrapper}>
            <div className={classes.name_role_row}>
                <div className={classes.name}>Matt</div>
                <div className={classes.role}>Co-founder</div>
            </div>
            <span className={classes.discord}>Discord : Howard0x</span>
        </div>
        <div className={classes.background}>
            <h5 className={classes.text_upper}>BACKGROUND</h5>
            <p>Lawyer</p>
        </div>
        <div className={classes.specialities}>
            <h5 className={classes.text_upper}>Specialities</h5>
            <p>Blockchain/Crypto, FinTech/DeFi, Marketing</p>
        </div>
        <div className={classes.hustle}>
            <h5 className={classes.text_upper}>Side-Hustle + Fun Fact</h5>
            <p>ICE Poker Guild Manager + Aspiring Golfer</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
