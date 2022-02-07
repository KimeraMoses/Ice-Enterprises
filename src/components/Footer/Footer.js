import React from "react";
import Logo from "../../assets/footer-icon.png";
import { Link } from "react-router-dom";
import SocialIcons from "../AppBar/SocialIcons";
import NavigationMenu from "../Navigation/NavigationMenu";
import classes from "./Footer.module.css";

const Footer = () => {
  let getCurrentYear = new Date().getFullYear();
  return (
    <div className={classes.footer_wrapper}>
      <div className={classes.copyright_wrapper}>
        <p>© {getCurrentYear} Ice Enterprises, LLC. All rights reserved.</p>
      </div>
      <div className={classes.powered_by_content}>
        <div className={classes.powered_by_content_icon}>
          <img src={Logo} alt="" />{" "}
        </div>
        <p>Powered by <a href="/">NFT Consulting</a></p>
      </div>
      <div className={classes.ice__footer__menu}>
        <ul>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms-of-services">Terms of Service</Link>
          </li>
        </ul>
      </div>
      <SocialIcons />
    </div>
  );
};

export default Footer;
