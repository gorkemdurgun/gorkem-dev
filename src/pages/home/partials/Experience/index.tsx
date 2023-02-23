import { CustomText } from "@/components/CustomText";
import { NextPage } from "next";
import { Container, Row, Col, Button } from "react-bootstrap";

import styles from "./index.module.css";

const ExperiencePage: NextPage = (props) => {
  return (
    <Container id="section2" fluid className={styles.container}>
      <CustomText text="Experience" className={styles.leftText} />
    </Container>
  );
};

export default ExperiencePage;
