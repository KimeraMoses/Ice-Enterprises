import React from "react";
import OwnerImage from "../../../assets/Owner-Image.png";
import PlayerImage from "../../../assets/Player-Image.png";
import { Button } from "../../UI/Button/Button";
import classes from "./HeroCard.module.css";

const HeroCard = ({ CardData, key }) => {
  let CardImage = CardData.title ==="Owner"? OwnerImage: PlayerImage;
  return (
    <div className={classes.hero_card_wrapper}>
      <div
        className={classes.hero_card}
        style={{
          backgroundImage: `url(${CardImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      >
        <h4>{CardData.title}</h4>
        {/* <p>{CardData.summary}</p> */}
        <Button buttonSize="Btn--large">{CardData.btnText}</Button>
      </div>
    </div>
  );
};

export default HeroCard;
