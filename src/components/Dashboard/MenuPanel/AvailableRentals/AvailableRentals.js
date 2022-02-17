import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Pagination from "../../Pagination/Pagination";
import TransactionActions from "../ActiveRentals/TransactionActions";
import RentalsTable from "../RentalsTable/RentalsTable";
import classes from "./AvailableRentals.module.css";

const SortingArray = [
  { name: "Renter Address", value: "address" },
  { name: "Wearable For Rent", value: "wearable" },
  { name: "Level Or Rank", value: "level" },
  { name: "Multiplier", value: "multiplier" },
  { name: "Rental Price", value: "price" },
  { name: "Rental Term", value: "term" },
  { name: "CheckIns", value: "checkin" },
];
let PageSize = 5;
const AvailableRentals = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useTranslation();
  return (
    <div className={classes.active_rentals_wrapper}>
      <TransactionActions
        selected="Renter Address"
        SortingArray={SortingArray}
      />
      <div className={classes.rental_table}>
        <div className={classes.active_rentals_table_wrapper}>
          <RentalsTable
          //   currentTableData={currentTableData}
          />
        </div>
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
    </div>
  );
};

export default AvailableRentals;
