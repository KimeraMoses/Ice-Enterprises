import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../Header";
import classes from "../PrivacyTerms.module.css";

const Terms = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.privacy_policy_wrapper}>
      <div className={classes.privacy_policy_wrapper_inner}>
        <Header />
        <div className={classes.privacy_content_wrapper}>
          <h2>{t("pages.termsOfService.heading")}</h2>
          <p>{t("pages.termsOfService.welcomeText")}</p>
          <div className={classes.info_collected_wrapper}>
            <p>{t("pages.termsOfService.iceDescription")}</p>

            <h4>{t("pages.termsOfService.whatWeOwn.heading")}</h4>
            <p> {t("pages.termsOfService.whatWeOwn.description")}</p>
            <h4>{t("pages.termsOfService.limitationOfLiability.heading")}</h4>
            <p>
              {" "}
              {t("pages.termsOfService.limitationOfLiability.description")}
            </p>
            <h4>{t("pages.termsOfService.noGaurantees.heading")}</h4>
            <p> {t("pages.termsOfService.noGaurantees.description")}</p>
            <h4>{t("pages.termsOfService.taxes.heading")}</h4>
            <p> {t("pages.termsOfService.taxes.description")}</p>
            <h4>{t("pages.termsOfService.classAction.heading")}</h4>
            <p> {t("pages.termsOfService.classAction.description")}</p>
            <h4>{t("pages.termsOfService.children.heading")}</h4>
            <p> {t("pages.termsOfService.children.description")}</p>
            <h4>{t("pages.termsOfService.arbitration.heading")}</h4>
            <p> {t("pages.termsOfService.arbitration.description")}</p>
            <h4>{t("pages.termsOfService.jurisdiction.heading")}</h4>
            <p> {t("pages.termsOfService.jurisdiction.description")}</p>
            <h4>{t("pages.termsOfService.privacyPolicy.heading")}</h4>
            <p> {t("pages.termsOfService.privacyPolicy.description")}</p>
            <h4>{t("pages.termsOfService.howToUtilize.heading")}</h4>
            <p>
              {t(
                "pages.termsOfService.howToUtilize.description.playerRenter.description"
              )}
              :
            </p>
            <ol type="a">
              {t(
                "pages.termsOfService.howToUtilize.description.playerRenter.procedures",
                {
                  returnObjects: true,
                }
              ).map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ol>
            <p>
              {t(
                "pages.termsOfService.howToUtilize.description.ownerDelegator.description"
              )}
              :
            </p>
            <ol type="a">
              {t(
                "pages.termsOfService.howToUtilize.description.ownerDelegator.procedures",
                {
                  returnObjects: true,
                }
              ).map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ol>
            <h4>{t("pages.termsOfService.fees.heading")}</h4>
            <p> {t("pages.termsOfService.fees.description")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
