import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Pagination from "../../Pagination/Pagination";
import TransactionActions from "../ActiveRentals/TransactionActions";
import classes from "./Users.module.css";
import UsersTable from "./UsersTable/UsersTable";

const SortingArray = [
  { name: "User Address", value: "address" },
  { name: "Email Address", value: "email" },
  { name: "Items", value: "item" },
  { name: "Rentals", value: "rentals" },
  { name: "Total Spent", value: "total-spent" },
  { name: "Total Earned", value: "earned" },
  { name: "User Type", value: "user" },
  { name: "Status", value: "status" },
];
let PageSize = 5;
const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useTranslation();

  return (
    <div className={classes.active_rentals_wrapper}>
      <TransactionActions selected="User Address" SortingArray={SortingArray} />
      <div className={classes.rental_table}>
        <div className={classes.active_rentals_table_wrapper}>
          <UsersTable
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

export default Users;
