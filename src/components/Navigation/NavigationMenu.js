import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import classes from "./NavigationMenu.module.css";
import data from "../../locales/en.json";

const NavigationMenu = (props) => {
  const { menuOpen, setMenuOpen } = props;
  const NavData = data.header.headerMenu;
  const NavMenuItem = ({ itemTitle, itemLink }) => {
    return (
      <li className={classes.menu_item}>
        <Link
          to={itemLink}
          spy={true}
          activeClass={classes.active}
          className={classes.nav_link}
          onClick={() => setMenuOpen(false)}
        >
          {itemTitle}
        </Link>
      </li>
    );
  };

  return (
    <div
      className={`${classes.navbar_wrapper} ${
        menuOpen ? classes.menuOpen : ""
      }`}
    >
      <ul className={`${classes.nav_menu} ${menuOpen ? classes.active : ""}`}>
        <NavMenuItem itemTitle={NavData.howItWorks} itemLink="howItWorks" />
        <NavMenuItem itemTitle={NavData.benefits} itemLink="benefits" />
        <NavMenuItem itemTitle={NavData.faqs} itemLink="faqs" />
        <NavMenuItem itemTitle={NavData.ourTeam} itemLink="our-team" />
        <NavMenuItem itemTitle={NavData.ourStory} itemLink="our-story" />
      </ul>
    </div>
  );
};

export default NavigationMenu;
