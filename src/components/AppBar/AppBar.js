import React, { useEffect, useState } from "react";

//===MUI IMPORTS===
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Hidden, IconButton } from "@material-ui/core";

//===COMPONENT IMPORTS===
import classes from "./AppBar.module.css";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "./Logo";
import NavigationMenu from "../Navigation/NavigationMenu";
import SocialIcons from "../SocialIcons/SocialIcons";

const AppBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
  }, [])

  return (
    <>
      <div className={`${classes.ice__AppBar_wrapper} ${scrollPosition > 485 ? classes.header_bg_dark : ""}`}>
        <div className={classes.ice__AppBar_logo_Wrapper}>
          <Logo setMenuOpen={setMenuOpen} />
        </div>

        <div className={classes.ice__AppBar_spacer} />

        <Hidden xsDown>
          <div className={classes.ice__action_btn_wrapper}>
            <NavigationMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <SocialIcons />
          </div>
        </Hidden>

        <Hidden smUp>
          <div className={classes.mobile_header_menu}>
            <SocialIcons />
            <IconButton
              size="large"
              onClick={() => setMenuOpen(!menuOpen)}
              className={classes.menu_btn_toggle}
            >
              {menuOpen ? (
                <CloseIcon fontSize="large" />
              ) : (
                <MenuIcon fontSize="large" />
              )}
            </IconButton>
          </div>
        </Hidden>
      </div>
      <Hidden smUp>
        <div className={classes.navbar_mobile_menu}>
          <NavigationMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </Hidden>
    </>
  );
};
export default AppBar;
