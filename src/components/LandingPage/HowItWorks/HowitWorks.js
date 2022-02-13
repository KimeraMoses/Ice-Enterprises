import React from "react";
import { Container, Row } from "react-bootstrap";
import HowitWorksCard from "./HowitWorksCard";
import classes from "./HowitWorks.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import data from "../../../locales/en.json";
import ScrollToSection from "../SectionHeading/ScrollToSection";

const HowitWorks = () => {
  const howitWorksData = data.pages.landing.howitWorks;
  return (
    <>
      <ScrollToSection id="howItWorks" />
      <section className={classes.howitworks_section_wrapper}>
        <Container className={classes.howitworks_container} fluid>
          <SectionHeading title={howitWorksData.heading} />
          <Row className={classes.howitworks_row_wrapper}>
            {howitWorksData.cards.map((card, index) => {
              return <HowitWorksCard cardData={card} num={index} />;
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HowitWorks;
