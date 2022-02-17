import React from "react";
import { useTranslation } from "react-i18next";
import RentalChart from "../../../../assets/rental-graph.png";
import classes from "./DashboardItem.module.css";
import PopularRental from "./PopularRentals/PopularRental";
import SummaryCard from "./SummaryCard/SummaryCard";

const DashboardItem = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.dashboard_items_summary_wrapper}>
      <div className={classes.dashboard_items_summary_card_wrapper}>
        {t("dashboard.dashboard.summaryCards", { returnObjects: true }).map(
          (card, index) => {
            return <SummaryCard card={card} index={index} />;
          }
        )}
      </div>
      <div className={classes.chart_popular_data_wrapper}>
        <div className={classes.rental_chart_wrapper}>
          <h4>{t("dashboard.dashboard.toMonthlyRental.heading")}</h4>

          <div className={classes.rental_chart}>
            <img src={RentalChart} alt="" />
          </div>
        </div>
        <div className={classes.popular_rentals_wrapper}>
          <h4>{t("dashboard.dashboard.mostPopularRentals.heading")}</h4>
          <PopularRental />
          <PopularRental />
          <PopularRental />
          <PopularRental />
          <PopularRental />
        </div>
      </div>
    </div>
  );
};

export default DashboardItem;
