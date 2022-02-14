import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import classes from "./NavigationMenu.module.css";
import { useTranslation } from "react-i18next";

const NavigationMenu = (props) => {
  const { menuOpen, setMenuOpen } = props;
  const { t } = useTranslation();
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
        <NavMenuItem itemTitle={t("header.headerMenu.howItWorks")} itemLink="howItWorks" />
        <NavMenuItem itemTitle={t("header.headerMenu.benefits")} itemLink="benefits" />
        <NavMenuItem itemTitle={t("header.headerMenu.faqs")} itemLink="faqs" />
        <NavMenuItem itemTitle={t("header.headerMenu.ourTeam")} itemLink="our-team" />
        <NavMenuItem itemTitle={t("header.headerMenu.ourStory")} itemLink="our-story" />
      </ul>
    </div>
  );
};

export default NavigationMenu;
