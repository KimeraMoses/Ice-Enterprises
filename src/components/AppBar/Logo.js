import React from "react";
import { Link } from 'react-router-dom'

//==COMPONENT IMPORTS===
import Logo from "../../assets/Enterprise-Logo.png"
import classes from "./Logo.module.css";

const DavLogo = (props) => {
  const { setMenuOpen} = props
  return (
    <Link to="/" onClick={()=>setMenuOpen(false)} className={classes.logo_wrapper}>
      <img className={classes.logo} src={Logo} alt="Ice Enterprises" />
    </Link>
  );
};
export default DavLogo;
