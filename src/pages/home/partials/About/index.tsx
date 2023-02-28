import { CustomText } from "@/components/CustomText";
import { NextPage } from "next";
import { Container, Row, Col, Button } from "react-bootstrap";

import { en } from "../../../../resources/texts.json";

import styles from "./index.module.scss";

const AboutPage: NextPage = (props) => {
  return (
    <Container id="about" fluid className={styles.container}>
      <Row lg={6} className={styles.leftSide}>
        <Col lg={12} className={styles.leftContainer}>
          <span className={styles.boxInfo}>
            <CustomText text="Hi," className={styles.leftText} />
            <CustomText text="I'm Görkem" className={styles.leftText} />
            <CustomText
              text="Frontend Developer"
              className={styles.typewriterText}
            />
          </span>
          <span>
            <Button href="#contact" variant="light" className={styles.button}>
              <CustomText text="Contact Me" className={styles.buttonText} />
            </Button>
          </span>
        </Col>
      </Row>
      <Row lg={6} className={styles.rightSide}>
        <Col lg={12} className={styles.aboutContainer}>
          <div className={styles.perspectiveText}>
            <div className={styles.perspectiveLine}>
              <p>Who am i?</p>
            </div>
            <div className={styles.perspectiveLine}>
              <p>About Me</p>
            </div>
          </div>
          <span className={styles.descriptionContainer}>
            <CustomText
              text={en.description1}
              className={styles.descriptionText}
            />
            <CustomText
              text={en.description2}
              className={styles.descriptionText}
            />
            <CustomText
              text={en.description3}
              className={styles.descriptionText}
            />
            <CustomText
              text={en.description4}
              className={styles.descriptionText}
            />
            <CustomText
              text={en.description5}
              className={styles.descriptionText}
            />
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
