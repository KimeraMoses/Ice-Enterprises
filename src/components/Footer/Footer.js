import React from "react";
import { Link } from "react-router-dom";
import SocialIcons from "../SocialIcons/SocialIcons";
import classes from "./Footer.module.css";
import SocialIcon, {
  SocialMedia,
} from "../../containers/SocialIcon/SocialIcon";
import { useTranslation } from "react-i18next";

const Footer = () => {
  let getCurrentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <div className={classes.footer_wrapper}>
      <div className={classes.copyright_wrapper}>
        <p>
          © {getCurrentYear} {t("footer.copyright")}
        </p>
      </div>
      <div className={classes.powered_by_content}>
        <div className={classes.powered_by_content_icon}>
          <SocialIcon type={SocialMedia.DIAMOND} />
        </div>
        <p>
          {t("footer.poweredBy.text")}{" "}
          <a href="/">{t("footer.poweredBy.linkText")}</a>
        </p>
      </div>
      <div className={classes.ice__terms_social_wrapper}>
        <div className={classes.ice__footer__menu}>
          <ul>
            <li>
              <Link to="/privacy-policy">
                {t("footer.footerMenu.privacyPolicy")}
              </Link>
            </li>
            <li>
              <Link to="/terms-of-services">
                {t("footer.footerMenu.termsOfService")}
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
