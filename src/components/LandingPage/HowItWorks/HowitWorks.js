import React from "react";
import { Container, Row } from "react-bootstrap";
import HowitWorksCard from "./HowitWorksCard";
import classes from "./HowitWorks.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import ScrollToSection from "../SectionHeading/ScrollToSection";
import { useTranslation } from "react-i18next";

const HowitWorks = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* <ScrollToSection id="howItWorks" /> */}
      <section className={classes.howitworks_section_wrapper}>
        <Container className={classes.howitworks_container} fluid>
          <SectionHeading title={t("pages.landing.howitWorks.heading")} />
          <Row className={classes.howitworks_row_wrapper}>
            {t("pages.landing.howitWorks.cards", { returnObjects: true }).map((card, index) => {
              return <HowitWorksCard cardData={card} num={index} />;
            })}
          </Row>
        </Container>
      </section>
      <ScrollToSection id="benefits" />
    </>
  );
};

export default HowitWorks;
