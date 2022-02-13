import React from "react";
import classes from "./SectionHeading.module.css";

const SectionHeading = (props) => {
  const { title } = props;
  return (
    <div className={classes.section_heading_wrapper}>
      <h1>{title}</h1>
    </div>
  );
};

export default SectionHeading;
