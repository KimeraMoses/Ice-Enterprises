import React, { useEffect, useState } from "react";
import classes from "./Header.module.css";
import Logo from "../../assets/Enterprise-Logo.png";
import NavigationMenu from "../Navigation/NavigationMenu";
import SocialIcons from "../SocialIcons/SocialIcons";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${classes.header_wrapper} ${
        scrollPosition > 413 ? classes.header_bg_dark : ""
      }`}
    >
      <div className={classes.header_logo_wrapper}>
        <Link to="/"><img src={Logo} alt="Ice EnterPrises" /></Link>
      </div>
      <div className={classes.header_navigation_wrapper}>
        <NavigationMenu />
        <SocialIcons />
      </div>
    </div>
  );
};

export default Header;
