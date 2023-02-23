import { NextPage } from "next";
import { Ubuntu, Quicksand } from "@next/font/google";

import MainContainer from "@/containers/MainContainer";

import styles from "./index.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { classicNameResolver } from "typescript";
import Image from "next/image";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "500" });
const quicksandLight = Ubuntu({ subsets: ["latin"], weight: "300" });
const quicksandRegular = Ubuntu({ subsets: ["latin"], weight: "400" });
const quicksandBold = Ubuntu({ subsets: ["latin"], weight: "700" });

const CustomText = (props: { text: string; className?: any; id?: string }) => {
  return (
    <h1 className={props.className ? props.className : styles.text}>
      {props.text}
    </h1>
  );
};

const AboutPage: NextPage = (props) => {
  return (
    <Container id="section1" fluid className={styles.container}>
      <Row lg={6} className={styles.leftSide}>
        <Col lg={12} className={styles.leftContainer}>
          <div className={styles.box2}></div>
          <div className={styles.box3}></div>
          <span>
            <CustomText text="Hi," className={styles.leftText} />
            <CustomText text="I'm Görkem" className={styles.leftText} />
            <CustomText text="Frontend Engineer" className={styles.leftText} />
          </span>
          <span>
            <Button href="#section3" variant="light" className={styles.button}>
              <CustomText text="Contact Me" className={styles.buttonText} />
            </Button>
          </span>
        </Col>
      </Row>
      <Row lg={6} className={styles.rightSide}>
        <Col lg={12}>
          <div className={styles.boxImage}></div>
        </Col>
      </Row>
    </Container>
  );
};

const ExperiencePage: NextPage = (props) => {
  return (
    <Container id="section2" fluid className={styles.container}>
      <Row lg={6} className={styles.leftSide}>
        <Col lg={12} className={styles.leftContainer}>
          <div className={styles.box2}></div>
          <div className={styles.box3}></div>
          <span>
            <CustomText text="Hi," className={styles.leftText} />
            <CustomText text="I'm Görkem" className={styles.leftText} />
            <CustomText text="Frontend Engineer" className={styles.leftText} />
          </span>
        </Col>
      </Row>
      </Container>
  );
};

const HomePage: NextPage = () => {
  return (
    <MainContainer>
      <AboutPage />
      <ExperiencePage />
    </MainContainer>
  );
};

export default HomePage;
