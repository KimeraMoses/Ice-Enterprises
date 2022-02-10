import React from "react";
import { Container, Row } from "react-bootstrap";
import BenefitsCard from "./BenefitsCard";
import classes from "./Benefits.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";

const Benefits = () => {
  return (
    <section className={classes.benefits_section_wrapper}>
      <Container className={classes.benefits_container} fluid>
        <SectionHeading />
        <Row className={classes.benefits_row_wrapper}>
          <BenefitsCard />
          <BenefitsCard />
          <BenefitsCard />
          <BenefitsCard />
        </Row>
      </Container>
    </section>
  );
};

export default Benefits;
