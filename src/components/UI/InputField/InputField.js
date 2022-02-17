import { Switch, withStyles } from "@material-ui/core";
import { green, grey } from "@material-ui/core/colors";
import React from "react";

import classes from "./InputField.module.css";

const InputField = (props) => {
  const CustomSwitch = withStyles((theme) => ({
    root: {
      width: 36,
      height: 19,
      padding: 0,
      margin: 1,
    },
    switchBase: {
      padding: 1,
      color: "#262626",
      "&$checked": {
        transform: "translateX(16px)",
        color: "#40A9FF",

        "& + $track": {
          backgroundColor: "#595959",
          opacity: 1,
          border: "none",
        },
      },
      "&$focusVisible $thumb": {
        color: "#595959",
        border: "6px solid #8C8C8C",
      },
    },
    thumb: {
      width: 16,
      height: 16,
    },
    track: {
      borderRadius: 20 / 2,
      backgroundColor: "#595959",
      opacity: 1,
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });
  const {
    type,
    value,
    name,
    disabled,
    placeholder,
    onChange,
    toggle,
    checked,
    fullwidth
  } = props;
  return (
    <div
      className={`${classes.input_field_wrapper} ${
        disabled ? classes.input_field__disabled : ""
      } ${fullwidth? classes.fullwidth: ""}`}
    >
      <input
        className={classes.input_field}
        type={type}
        value={toggle ? "" : value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        disabled={disabled || toggle}
      />
      {toggle && (
        <CustomSwitch checked={checked} onChange={onChange} name={name} />
      )}
    </div>
  );
};

export default InputField;
