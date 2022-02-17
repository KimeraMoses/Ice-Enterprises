import React, { useState } from "react";
import { Button, IconButton } from "@material-ui/core";
import { Link, Outlet, useLocation } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import classes from "./Dashboard.module.css";
import DashBoardMenu from "./NavigationMenu/DashBoardMenu";
import MobileSideDrawer from "./SideDrawer/MobileSideDrawer";
import { Col, Container, Row } from "react-bootstrap";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const DashMenuTitle = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  );
  let menuTitle = "";
  let isActive = false;
  switch (location.pathname) {
    case `/dashboard/${DashMenuTitle}`:
      menuTitle = DashMenuTitle.replace(/-/g, " ");
      isActive = true;
      break;
    default:
      menuTitle = "DashBoard";
      break;
  }
  if (menuTitle === "user") {
    menuTitle = "DashBoard";
  }

  return (
    <Container className={classes.dashboard_page_wrapper} fluid>
      <MobileSideDrawer />
      <Row className={classes.grandpa__dashboard_wrapper}>
        <Col className={classes.menu__wrapper} lg={2}>
          <DashBoardMenu DashMenuTitle={DashMenuTitle} />
        </Col>

        <Col lg={10} className={classes.selected_menu_item_wrapper}>
          <div className={classes.selected_menu_item_title}>
            <h3>{menuTitle}</h3>
          </div>
          <div className={classes.gpa__dashbaord_selected_item_display_wrapper}>
            <Outlet />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
