import React from "react";
import classes from "./BenefitsCard.module.css";
import { Col } from "react-bootstrap";

const BenefitsCard = () => {
  return (
    <Col lg={3} md={6} sm={12} className={classes.benefits_card_wrapper}>
      <div className={classes.benefits_card}>
        <div className={classes.benefits_card_icon_wrapper}>
          <div className={classes.benefits_card_icon}>Icon</div>
          <div className={classes.benefits_card_number}>01</div>
        </div>
        <div className={classes.benefits_card_content_wrapper}>
          <h5>Owner Action</h5>
          <p>
            Connect your preferred wallet and list an available wearable for
            rent. OWNERS are free to set the rental fee (min. 50 ICE per day)
            and have a variety of rental terms to choose from. A 4% service fee
            is assessed and deducted automatically from the daily rental fees
            you will receive.
          </p>
        </div>
      </div>
    </Col>
  );
};

export default BenefitsCard;
