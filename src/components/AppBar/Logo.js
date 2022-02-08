import React from "react";
import { Link } from 'react-router-dom';

//==COMPONENT IMPORTS===
import logo from "../../assets/Enterprise-Logo.png";
import classes from "./Logo.module.css";

const Logo = (props) => {
  const { setMenuOpen} = props
  return (
    <Link to="/" onClick={()=>setMenuOpen(false)} className={classes.logo_wrapper}>
      <img className={classes.logo} src={logo} alt="Ice Enterprises" />
    </Link>
  );
};
export default Logo;
