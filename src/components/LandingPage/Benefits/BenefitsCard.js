import React from "react";
import classes from "./BenefitsCard.module.css";
import { Col } from "react-bootstrap";
import { OwnerIcon, PlayerIcon } from "../../UI/Icons/Icons";
import { SvgIcon } from "@material-ui/core";

const BenefitsCard = ({ cardData, num }) => {
  const { title, description } = cardData;
  return (
    <Col lg={2} md={2} sm={12} className={classes.benefits_card_wrapper}>
      <div className={classes.benefits_card}>
        
      </div>
    </Col>
  );
};

export default BenefitsCard;
