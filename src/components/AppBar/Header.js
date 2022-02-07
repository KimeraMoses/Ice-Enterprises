import React from "react";
import classes from "./Header.module.css";
import Logo from "../../assets/Enterprise-Logo.png";
import NavigationMenu from "../Navigation/NavigationMenu";
import SocialIcons from "./SocialIcons";

const Header = () => {
  return (
    <div className={classes.header_wrapper}>
      <div className={classes.header_logo_wrapper}>
        <img src={Logo} alt="Ice EnterPrises" />
      </div>
      <div className={classes.header_navigation_wrapper}>
        <NavigationMenu />
        <SocialIcons />
      </div>
      {/* <div className={classes.header_socials_wrapper}></div> */}
    </div>
  );
};

export default Header;
