import React from "react";
import Logo from "../../assets/footer-icon.png";
import { Link } from "react-router-dom";
import SocialIcons from "../SocialIcons/SocialIcons";
import NavigationMenu from "../Navigation/NavigationMenu";
import data from "../../locales/en.json";
import classes from "./Footer.module.css";
import SocialIcon, {
  SocialMedia,
} from "../../containers/SocialIcon/SocialIcon";

const Footer = () => {
  let getCurrentYear = new Date().getFullYear();
  const footerData = data.footer;
  console.log(data);

  return (
    <div className={classes.footer_wrapper}>
      <div className={classes.copyright_wrapper}>
        <p>
          © {getCurrentYear} {footerData.copyright}
        </p>
      </div>
      <div className={classes.powered_by_content}>
        <div className={classes.powered_by_content_icon}>
          <SocialIcon type={SocialMedia.DIAMOND} />
        </div>
        <p>
          {footerData.poweredBy.text}{" "}
          <a href="/">{footerData.poweredBy.linkText}</a>
        </p>
      </div>
      <div className={classes.ice__terms_social_wrapper}>
        <div className={classes.ice__footer__menu}>
          <ul>
            <li>
              <Link to="/privacy-policy">
                {footerData.footerMenu.privacyPolicy}
              </Link>
            </li>
            <li>
              <Link to="/terms-of-services">
                {footerData.footerMenu.termsOfService}
              </Link>
            </li>
          </ul>
        </div>
        <SocialIcons />
      </div>
    </div>
  );
};

export default Footer;
