import React from "react";
import classes from "./HowitWorksCard.module.css";
import { Col } from "react-bootstrap";
import {
  NotificationDelegationIcon,
  OwnerIcon,
  PlayerIcon,
  SecureIcon,
} from "../../UI/Icons/Icons";
import { SvgIcon } from "@material-ui/core";

const HowitWorksCard = ({ cardData, num }) => {
  const { title, description } = cardData;
  let Icon =
    title === "Owner Action" ? (
      <OwnerIcon />
    ) : title === "Player Action" ? (
      <PlayerIcon />
    ) : title === "Secure Escrow Account" ? (
      <SecureIcon />
    ) : (
      <NotificationDelegationIcon />
    );

  return (
    <Col lg={3} md={6} sm={12} className={classes.howitworks_card_wrapper}>
      <div className={classes.howitworks_card}>
        <div className={classes.howitworks_card_icon_wrapper}>
          <div className={classes.howitworks_card_icon}>
            {Icon}
          </div>
          <div className={classes.howitworks_card_number}>0{num + 1}</div>
        </div>
        <div className={classes.howitworks_card_content_wrapper}>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  );
};

export default HowitWorksCard;
