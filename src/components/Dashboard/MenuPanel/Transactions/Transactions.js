import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import FundImg from "../../../../assets/funds-card.png";
import Pagination from "../../Pagination/Pagination";
import TransactionActions from "../ActiveRentals/TransactionActions";
import classes from "./Transactions.module.css";
import TransactionsTable from "./TransactionsTable/TransactionsTable";

const SortingArray = [
  { name: "Date", value: "date" },
  { name: "Transferred From", value: "from" },
  { name: "Transferred To", value: "to" },
  { name: "Amount", value: "amount" },
];
let PageSize = 5;
const Transactions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useTranslation();
  return (
    <div className={classes.active_rentals_wrapper}>
      <TransactionActions selected="Date" SortingArray={SortingArray} />
      <div className={classes.rental_table}>
        <div className={classes.active_rentals_table_wrapper}>
          <div className={classes.transaction_table_wrapper}>
            <TransactionsTable />
            <div className={classes.tokens_actions_wrapper}>
              <div className={classes.displayed_transactions_count}>
                <h4>
                  {t("dashboard.tableFooter.textL")} 5{" "}
                  {t("dashboard.tableFooter.textM")} 40{" "}
                  {t("dashboard.tableFooter.textR")}
                </h4>
              </div>
              <div className={classes.transaction_pagination_wrapper}>
                <Pagination
                  className="pagination-bar"
                  currentPage={currentPage}
                  totalCount={40}
                  pageSize={PageSize}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </div>
            </div>
          </div>
          <div className={classes.total_funds_wrapper}>
            <div className={classes.total_funds_wrapper_inner}>
              <h4>{t("dashboard.transactions.totalFunds.heading")}</h4>
              <h3>
                22,450.00{" "}
                {t("dashboard.transactions.totalFunds.currency")}
              </h3>
              <div className={classes.total_funds_img}>
                <img src={FundImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
