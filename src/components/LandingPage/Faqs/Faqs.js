import React from "react";
import Image from "../../../assets/Faq-Bunner.png";
import SectionHeading from "../SectionHeading/SectionHeading";
import classes from "./Faqs.module.css";
import FaqCard from "./FaqCard";
import ScrollToSection from "../SectionHeading/ScrollToSection";
import { useTranslation } from "react-i18next";

const Faqs = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* <ScrollToSection id="faqs" /> */}
      <section className={classes.faqs_section_wrapper}>
        <SectionHeading title={t("pages.landing.faqs.heading")} />

        <div className={classes.faqs_row_wrapper}>
          <div className={classes.faqs_list}>
            {t("pages.landing.faqs.list", { returnObjects: true }).map(
              (faq, index) => {
                return (
                  <FaqCard
                    key={index}
                    FaqTitle={faq.title}
                    FaqContent={faq.description}
                    FaqOpen={index === 0 ? true : false}
                  />
                );
              }
            )}
          </div>
          <div className={classes.faqs__side_bunner}>
            <img src={Image} alt="" />
          </div>
        </div>
      </section>
      <ScrollToSection id="our-team" />

    </>
  );
};

export default Faqs;
