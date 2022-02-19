import React from "react";
import classes from "./BenefitsCard.module.css";
import { Col } from "react-bootstrap";
import OwnerImage from "../../../assets/Owner-Image.png";
import PlayerImage from "../../../assets/Player-Image.png";
import { Button } from "../../UI/Button/Button";

const BenefitsCard = ({ cardData, key }) => {
  const { title, list, btnText } = cardData;

  let CardImage = title ==="Owner"? OwnerImage: PlayerImage;
  return (
    <Col
      lg={6}
      md={12}
      sm={12}
      className={classes.benefits_card_wrapper}
      key={key}
    >
      <div
        className={classes.benefits_card}
        style={{
          backgroundImage: `url(${CardImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      >
        <div className={classes.benefits_content_wrapper}>
          <h4>{title}</h4>
          <div className={classes.benefits_list_wrapper}>
            <ul>
              {list.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
          <div className={classes.card_actions_wrapper}>
            <Button buttonSize="Btn--large">
              {btnText}
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default BenefitsCard;
