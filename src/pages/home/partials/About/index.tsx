import { CustomText } from "@/components/CustomText";
import { NextPage } from "next";
import { Container, Row, Col, Button } from "react-bootstrap";

import styles from "./index.module.css";

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

export default AboutPage;
