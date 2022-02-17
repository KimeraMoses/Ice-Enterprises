import React from "react";
import { useTranslation } from "react-i18next";
import InputField from "../../../UI/InputField/InputField";
import Button from "../../Button/Button";
import classes from "./Settings.module.css";

const Settings = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.settings_wrapper}>
        <form>
      <div className={classes.settings_form_wrapper}>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className={classes.input_field_wrapper}>
                <h5>{t("dashboard.settings.formInputsTitles.siteName")}</h5>
                <InputField placeholder="Site Name" />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className={classes.input_field_wrapper}>
                <h5>{t("dashboard.settings.formInputsTitles.maxItems")}</h5>
                <InputField placeholder="Max Items" />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className={classes.input_field_wrapper}>
                <h5>{t("dashboard.settings.formInputsTitles.minRentalAmount")}</h5>
                <InputField placeholder="Min Rental Amount" />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className={classes.input_field_wrapper}>
                <h5>{t("dashboard.settings.formInputsTitles.maxRentalAmount")}</h5>
                <InputField placeholder="Max Rental Amount" />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className={classes.input_field_wrapper}>
                <h5>{t("dashboard.settings.formInputsTitles.adminEmail")}</h5>
                <InputField placeholder="Admin Email Address" />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className={classes.input_field_wrapper}>
                <h5>{t("dashboard.settings.formInputsTitles.maintenance")}</h5>
                <InputField
                  placeholder="Maintenance"
                  toggle={true}
                  checked={true}
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className={classes.input_field_wrapper}>
                <h5>{t("dashboard.settings.formInputsTitles.walletAddress")}</h5>
                <InputField placeholder="Enter Wallet Address" />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className={classes.input_field_wrapper}>
                <h5>{t("dashboard.settings.formInputsTitles.privateKey")}</h5>
                <InputField placeholder="Enter Private Key" />
              </div>
            </div>
            <div className="col-md-12 col-sm-12">
              <div className={classes.input_field_wrapper}>
                <h5>{t("dashboard.settings.formInputsTitles.providerUrl")}</h5>
                <InputField placeholder="Enter Provider URL" fullwidth={true} />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className={classes.input_field_wrapper}>
                <h5>{t("dashboard.settings.formInputsTitles.PecentagePerOwner")}</h5>
                <InputField placeholder="Escrow Fee Percentage" />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className={classes.input_field_wrapper}>
                <h5>{t("dashboard.settings.formInputsTitles.PecentagePerPlayer")}</h5>
                <InputField placeholder="Escrow Fee Percentage" />
              </div>
            </div>
          </div>
      </div>
      <div className={classes.settings_btn_wrapper}>
          <Button variant="primary">{t("dashboard.settings.btnText")}</Button>
      </div>
        </form>

    </div>
  );
};

export default Settings;
