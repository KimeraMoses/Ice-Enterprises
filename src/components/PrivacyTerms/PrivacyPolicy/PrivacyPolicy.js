import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "../Header";
import classes from "../PrivacyTerms.module.css";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.privacy_policy_wrapper}>
      <div className={classes.privacy_policy_wrapper_inner}>
        <Header />
        <div className={classes.privacy_content_wrapper}>
          <h2>{t("pages.privacyPolicy.heading")}</h2>
          <p>{t("pages.privacyPolicy.description")}</p>
          <div className={classes.info_collected_wrapper}>
            <h4>{t("pages.privacyPolicy.infoWeCollect.heading")}</h4>
            {t("pages.privacyPolicy.infoWeCollect.paragraphs", {
              returnObjects: true,
            }).map((paragraph, index) => {
              return <p key={index}>{paragraph}</p>;
            })}
            <h4>
              {t("pages.privacyPolicy.infoWeCollect.linkToWebsites.heading")}
            </h4>
            {t("pages.privacyPolicy.infoWeCollect.linkToWebsites.paragraphs", {
              returnObjects: true,
            }).map((paragraph, index) => {
              return <p key={index}>{paragraph}</p>;
            })}
            <h4>
              {t(
                "pages.privacyPolicy.infoWeCollect.changesToPrivacyPolicy.heading"
              )}
            </h4>
            <p>
              {t(
                "pages.privacyPolicy.infoWeCollect.changesToPrivacyPolicy.paragraph"
              )}
            </p>
            <h4>{t("pages.privacyPolicy.infoWeCollect.contactUs.heading")}</h4>
            <p>{t("pages.privacyPolicy.infoWeCollect.contactUs.paragraph")}:</p>
            <div className={classes.contact_us_details_wrapper}>
              <p>
                {t(
                  "pages.privacyPolicy.infoWeCollect.contactUs.contactDetails.email.name"
                )}
                {" : "}
                {t(
                  "pages.privacyPolicy.infoWeCollect.contactUs.contactDetails.email.value"
                )}
              </p>
              <p>
                {t(
                  "pages.privacyPolicy.infoWeCollect.contactUs.contactDetails.discord.name"
                )}
                {" : "}
                {t(
                  "pages.privacyPolicy.infoWeCollect.contactUs.contactDetails.discord.value"
                )}
              </p>
              <p>
                {t(
                  "pages.privacyPolicy.infoWeCollect.contactUs.contactDetails.twitter.name"
                )}
                {" : "}
                {t(
                  "pages.privacyPolicy.infoWeCollect.contactUs.contactDetails.twitter.value"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
