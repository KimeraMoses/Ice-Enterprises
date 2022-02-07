import React from "react";
import classes from "./SocialIcons.module.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import DiscordIcon from "../../assets/discordIcon.png";
import twitterIcon from "../../assets/twitterIcon.png";

const SocialIcons = () => {
  return (
    <div className={classes.social__icon_wrapper}>
      <a href="/">
        <div className={classes.social_icons}>
          <img src={twitterIcon} alt="" />
        </div>
      </a>
      <a href="/">
        <div className={classes.social_icons}>
          <img src={DiscordIcon} alt="" />
        </div>
      </a>
    </div>
  );
};

export default SocialIcons;
