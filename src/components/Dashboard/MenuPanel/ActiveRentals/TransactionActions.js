import React from "react";
import Button from "../../Button/Button";
import SortingDropdown from "../../../UI/SortingDropdown/SortingDropdown";
import classes from "./TransactionActions.module.css";
import { useTranslation } from "react-i18next";

const TransactionActions = (props) => {
  const { t } = useTranslation();
  const {
    transactions,
    setOpen,
    AddNewBlackListHandler,
    SortingArray,
    selected,
    setSelected,
  } = props;
  return (
    <div className={classes.transactions_header_wrapper}>
      <div className={classes.transactions_sorting_input_wrappper}>
        <SortingDropdown
          selected={selected}
          ArrayData={SortingArray}
          setSelected={setSelected}
        />
      </div>
      <div className={classes.transactions_header_action_buttons}>
        <div className={classes.pdf_btn_wrapper}>
          <Button variant="secondary">{t("dashboard.actionBtnText.btnL")}</Button>
        </div>
        <div className={classes.add_new_btn_wrapper}>
          <Button variant="secondary" onClick={AddNewBlackListHandler}>
          {t("dashboard.actionBtnText.btnR")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransactionActions;
