import React from "react";
import classes from "./SideDrawerContent.module.css";
import DashBoardMenu from "../../NavigationMenu/DashBoardMenu";

const SideDrawerContent = (props) => {
  return (
    <div className={classes.side_menu_wrapper}>
      <DashBoardMenu DrawerClose={props.DrawerClose} />
    </div>
  );
};

export default SideDrawerContent;
