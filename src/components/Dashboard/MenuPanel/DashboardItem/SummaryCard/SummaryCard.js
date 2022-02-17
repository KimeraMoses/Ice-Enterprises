import React from "react";
import {
  NewRentalsIcon,
  TotalFundsIcon,
} from "../../../../UI/Icons/Icons";
import classes from "./SummaryCard.module.css";

const SummaryCard = ({ card, index }) => {
  const CardIcon =
    card.title === "New Rentals" || card.title === "Rentals About To End" ? (
      <NewRentalsIcon />
    ) : (
      <TotalFundsIcon />
    );

  return (
    <div className={classes.summary_card_wrapper} key={index}>
      <div className={classes.card_content_wrapper}>
        <div className={classes.card__title}>
          <h4>{card.title}</h4>
        </div>
        <div className={classes.card__amount}>
          <h3>
            {card.amount}
            {card.currency}
          </h3>
        </div>
      </div>
      <div className={classes.card_icon_wrapper}>{CardIcon}</div>
    </div>
  );
};

export default SummaryCard;
