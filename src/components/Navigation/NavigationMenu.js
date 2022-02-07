import React  from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationMenu.module.css";

const NavigationMenu = (props) => {
  const { menuOpen, setMenuOpen } = props;
  
  const NavMenuItem = ({itemTitle,itemLink }) => {
    return (
      <li className={classes.menu_item} onClick={() => setMenuOpen(false)}>
        <NavLink
          to={itemLink}
          className={({ isActive }) =>
            classes.nav_link + (isActive ? ` ${classes.active}` : "")
          }
        >
          {itemTitle}
        </NavLink>
      </li>
    );
  };

  return (
    <div className={`${classes.navbar_wrapper} ${menuOpen? classes.menuOpen: ''}`}>
      <ul className={`${classes.nav_menu} ${menuOpen ? classes.active : ""}`}>
        <NavMenuItem itemTitle="How It Works" itemLink="/" />
        <NavMenuItem itemTitle="Benefits" itemLink="/benefits" />
        <NavMenuItem itemTitle="FAQs" itemLink="/faqs" />
        <NavMenuItem itemTitle="Our Team" itemLink="/our-team" />
        <NavMenuItem itemTitle="Our Story" itemLink="/our-story" />
      </ul>
    </div>
  );
};

export default NavigationMenu;
