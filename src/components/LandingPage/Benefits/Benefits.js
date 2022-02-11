import React from "react";
import { Container, Row } from "react-bootstrap";
import BenefitsCard from "./BenefitsCard";
import classes from "./Benefits.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import data from "../../../locales/en.json";

const Benefits = () => {
  console.log(data.pages.landing.benefits);
  const benefitsData = data.pages.landing.benefits;
  return (
    <section className={classes.benefits_section_wrapper}>
      <Container className={classes.benefits_container} fluid>
        <SectionHeading title={benefitsData.heading} />
        <Row className={classes.benefits_row_wrapper}>
          {benefitsData.cards.map((card, index) => {
            return <BenefitsCard cardData={card} num={index} />;
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Benefits;
