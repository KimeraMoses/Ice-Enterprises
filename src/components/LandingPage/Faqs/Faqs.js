import React from "react";
import Image from "../../../assets/Faq-Bunner.png";
import SectionHeading from "../SectionHeading/SectionHeading";
import classes from "./Faqs.module.css";
import data from "../../../locales/en.json";
import FaqCard from "./FaqCard";

const Faqs = () => {
  const faqsData = data.pages.landing.faqs;
  return (
    <section className={classes.faqs_section_wrapper}>
      <SectionHeading title={faqsData.heading} />

      <div className={classes.faqs_row_wrapper}>
        <div className={classes.faqs_list}>
          {faqsData.list.map((faq, index) => {
            return (
              <FaqCard
                key={index}
                FaqTitle={faq.title}
                FaqContent={faq.description}
                FaqOpen={index === 0 ? true : false}
              />
            );
          })}
        </div>
        <div className={classes.faqs__side_bunner}>
          <img src={Image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Faqs;
