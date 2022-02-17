import React from "react";
import InputField from "../../../UI/InputField/InputField";
import Button from "../../Button/Button";
import classes from "./Settings.module.css";

const Settings = () => {
  return (
    <div className={classes.settings_wrapper}>
        <form>
      <div className={classes.settings_form_wrapper}>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className={classes.input_field_wrapper}>
                <h5>Site Name</h5>
                <InputField placeholder="Site Name" />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className={classes.input_field_wrapper}>
                <h5>Max Items</h5>
                <InputField placeholder="Max Items" />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className={classes.input_field_wrapper}>
                <h5>Min Rental Amount</h5>
                <InputField placeholder="Min Rental Amount" />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className={classes.input_field_wrapper}>
                <h5>Max Rental Amount</h5>
                <InputField placeholder="Max Rental Amount" />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className={classes.input_field_wrapper}>
                <h5>Admin Email Address</h5>
                <InputField placeholder="Admin Email Address" />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className={classes.input_field_wrapper}>
                <h5>Maintenance</h5>
                <InputField
                  placeholder="Maintenance"
                  toggle={true}
                  checked={true}
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className={classes.input_field_wrapper}>
                <h5>Wallet Address</h5>
                <InputField placeholder="Enter Wallet Address" />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className={classes.input_field_wrapper}>
                <h5>Private Key</h5>
                <InputField placeholder="Enter Private Key" />
              </div>
            </div>
            <div className="col-md-12 col-sm-12">
              <div className={classes.input_field_wrapper}>
                <h5>Provider URL</h5>
                <InputField placeholder="Enter Provider URL" fullwidth={true} />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className={classes.input_field_wrapper}>
                <h5>Escrow Fee Percentage Per Owner</h5>
                <InputField placeholder="Escrow Fee Percentage" />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className={classes.input_field_wrapper}>
                <h5>Escrow Fee Percentage Per Player</h5>
                <InputField placeholder="Escrow Fee Percentage" />
              </div>
            </div>
          </div>
      </div>
      <div className={classes.settings_btn_wrapper}>
          <Button variant="primary">Save Changes</Button>
      </div>
        </form>

    </div>
  );
};

export default Settings;
