import { CustomText } from "@/components/CustomText";
import { NextPage } from "next";
import { Container, Row, Col, Button } from "react-bootstrap";

import styles from "./index.module.css";

const ContactPage: NextPage = (props) => {
  return (
    <Container id="section3" fluid className={styles.container}>
      <h6>
        <CustomText text="Contact" className={styles.leftText} />
      </h6>
    </Container>
  );
};

export default ContactPage;
