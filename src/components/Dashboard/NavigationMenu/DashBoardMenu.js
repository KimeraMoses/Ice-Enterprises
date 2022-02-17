import React from "react";
import { Link, NavLink } from "react-router-dom";
//===MUI IMPORTS===
import NewUnivIcon from "@material-ui/icons/AccountBalance";
import {
  ActiveRentalIcon,
  AvailableRentalIcon,
  DashBoardIcon,
  SettingsIcon,
  TransactionsIcon,
  UsersIcon,
  IceLogo,
  LogoutIcon,
} from "../../UI/Icons/Icons";
//===REDUX IMPORTS===

//===COMPONENT IMPORTS===
import classes from "./DashBoardMenu.module.css";
import { useTranslation } from "react-i18next";

const DashBoardMenuItem = (props) => {
  return (
    <NavLink
      className={({ isActive }) =>
        classes.dashboard_menu_item_wrapper +
        " " +
        (isActive ? `${classes.selected_menu_item}` : "")
      }
      to={`/dashboard/${props.menuItemLink}`}
      end
      onClick={props.DrawerClose}
    >
      <div className={classes.dashboard_menu_item_icon_wrapper}>
        {props.menuItemIcon}
      </div>
      <h5 className={classes.dashboard_menu_item_title_wrapper}>
        {props.menuItemTitle}
      </h5>
    </NavLink>
  );
};

const DashBoardMenu = (props) => {
  const { DashMenuTitle, DrawerClose } = props;
  const { t } = useTranslation();
  const UserMenuItems = [
    {
      icon: <DashBoardIcon />,
      url: "user",
      title: t("dashboard.dashboard.heading"),
    },
    {
      icon: <ActiveRentalIcon />,
      url: "active-rentals",
      title: t("dashboard.activeRentals.heading"),
    },
    {
      icon: <AvailableRentalIcon />,
      url: "available-rentals",
      title: t("dashboard.availableRentals.heading"),
    },
    {
      icon: <TransactionsIcon />,
      url: "transactions",
      title: t("dashboard.transactions.heading"),
    },
    {
      icon: <UsersIcon />,
      url: "users",
      title: t("dashboard.users.heading"),
    },
    {
      icon: <SettingsIcon />,
      url: "settings",
      title: t("dashboard.settings.heading"),
    },
  ];

  const logOutHandler = () => {
    //logout logic goes here
    DrawerClose();
  };
  return (
    <div className={classes.dashboard_menu_wrapper}>
      <div className={classes.dashboard_menu_logo_wrapper}>
        <Link to="/">
          <div className={classes.dashboard_logo}>
            <IceLogo />
          </div>
        </Link>
      </div>
      {UserMenuItems.map((menu, index) => {
        return (
          <DashBoardMenuItem
            key={index}
            menuItemIcon={menu.icon}
            menuItemLink={menu.url}
            menuItemTitle={menu.title}
            menuCount={menu.count}
            DrawerClose={DrawerClose}
          />
        );
      })}
      <NavLink
        className={classes.dashboard_menu_item_wrapper}
        to={`/`}
        end
        onClick={logOutHandler}
      >
        <div className={classes.dashboard_menu_item_icon_wrapper}>
          <LogoutIcon />
        </div>
        <h5 className={classes.dashboard_menu_item_title_wrapper}>
          {t("dashboard.logout")}
        </h5>
      </NavLink>
    </div>
  );
};

export default DashBoardMenu;
