import React from "react";
import { Container, Row } from "react-bootstrap";
import BenefitsCard from "./BenefitsCard";
import classes from "./Benefits.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import ScrollToSection from "../SectionHeading/ScrollToSection";
import { useTranslation } from "react-i18next";

const Benefits = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className={classes.benefits_section_wrapper}>
        <Container className={classes.benefits_container} fluid>
          <SectionHeading title={t("pages.landing.benefits.heading")} />
          <Row className={classes.benefits_row_wrapper}>
            {t("pages.landing.benefits.cards", { returnObjects: true }).map(
              (card, index) => {
                return <BenefitsCard cardData={card} key={index} />;
              }
            )}
          </Row>
        </Container>
      </section>
      <ScrollToSection id="faqs" />
    </>
  );
};

export default Benefits;
