import React, { useEffect, useState } from "react";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import DrawerToggleButton from "./DrawerToggleButton";
import classes from "./MobileSideDrawer.module.css";
import { Hidden } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/CloseOutlined";
import SideDrawerContent from "./SideDrawerContent/SideDrawerContent";
import Wrapper from "../../../containers/hoc/wrapper";
import { IceLogo } from "../../UI/Icons/Icons";

const MobileSideDrawer = (props) => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const sideDrawerCloseHandler = () => {
    setState({ ...state, left: false });
  };

  return (
    <Wrapper>
      {["left"].map((anchor) => (
        <Wrapper key={anchor}>
          <div className={classes.dashboard__mobile_header_wrapper}>
            <div className={classes.dashboard_menu_logo_wrapper}>
              <div className={classes.dashboard_logo}>
                <IceLogo />
              </div>
            </div>
            <div className={classes.toggle_icon_wrapper}>
              <div className={classes.sidemenu_toggle_btn_wrapper}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  <DrawerToggleButton />
                </Button>
              </div>
            </div>
          </div>

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            className={classes.mobile_drawer}
          >
            <SideDrawerContent DrawerClose={sideDrawerCloseHandler} />
          </SwipeableDrawer>
        </Wrapper>
      ))}
    </Wrapper>
  );
};
export default MobileSideDrawer;
