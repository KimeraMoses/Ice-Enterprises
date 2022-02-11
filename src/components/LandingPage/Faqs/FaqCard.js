import React, { useState } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import classes from "./FaqCard.module.css";

const FaqCard = (props) => {
  const { FaqTitle, FaqContent, FaqOpen, key } = props;
  const [open, setOpen] = useState(FaqOpen);
  return (
    <div
      className={`${classes.ice__faq_card} ${
        open ? classes.ice__card_open : classes.ice__card_close
      }`}
      key={key}
    >
      <div
        className={classes.ice__faq_card_header}
        onClick={() => setOpen(!open)}
      >
        <h4>{FaqTitle}</h4>
        {open ? <RemoveIcon /> : <AddIcon />}
      </div>
      {open && (
        <div className={classes.ice__faq_card_content}>
          <p>{FaqContent}</p>
        </div>
      )}
    </div>
  );
};

export default FaqCard;
