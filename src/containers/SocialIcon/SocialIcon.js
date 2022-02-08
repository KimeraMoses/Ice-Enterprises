import React from "react";
import classes from "./SocialIcon.module.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import { DiamondIcon, DiscordIcon } from "../../components/UI/Icons/Icons";

export const SocialMedia = {
  TWITTER: "twitter",
  FACEBOOK: "facebook",
  DISCORD: "discord",
  DIAMOND: "diamond",
};
const SocialIcon = (props) => {
  const { type, link } = props;
  return (
    <a href={link}>
      <div className={classes.social_icons}>
        {type === SocialMedia.TWITTER ? (
          <TwitterIcon />
        ) : type === SocialMedia.DISCORD ? (
          <DiscordIcon />
        ) : type === SocialMedia.DIAMOND ? (
          <DiamondIcon />
        ) : null}
      </div>
    </a>
  );
};

export default SocialIcon;
