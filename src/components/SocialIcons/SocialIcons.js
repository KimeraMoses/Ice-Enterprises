import React from "react";
import classes from "./SocialIcons.module.css";

import SocialIcon, {
  SocialMedia,
} from "../../containers/SocialIcon/SocialIcon";

const SocialIcons = () => {
  return (
    <div className={classes.social__icon_wrapper}>
      <SocialIcon type={SocialMedia.TWITTER} link={'/'}/>
      <SocialIcon type={SocialMedia.DISCORD} link={'/'}/>
    </div>
  );
};

export default SocialIcons;
