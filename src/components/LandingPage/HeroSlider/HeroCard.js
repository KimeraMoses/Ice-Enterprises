import React from "react";
import OwnerImage from "../../../assets/Owner-Image.png";
import PlayerImage from "../../../assets/Player-Image.png";
import { Button } from "../../UI/Button/Button";
import classes from "./HeroCard.module.css";

const HeroCard = ({ CardData, key }) => {
  return (
    <div className={classes.hero_card_wrapper}>
      <div
        className={classes.hero_card}
        style={{
          backgroundImage: `url(${OwnerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      >
        <h4>{CardData.title}</h4>
        <p>{CardData.summary}</p>
        <Button>{CardData.btnText}</Button>
      </div>
    </div>
  );
};

export default HeroCard;
