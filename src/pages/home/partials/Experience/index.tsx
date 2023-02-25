import { CustomText } from "@/components/CustomText";
import { TechnologyBox } from "@/components/TechnologyBox";
import { SVG } from "@/resources/svg";
import { NextPage } from "next";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";

import styles from "./index.module.scss";

const technologies = [
  {
    image: SVG.NextjsIcon,
    text: "Next.js",
  },
  {
    image: SVG.ReactIcon,
    text: "React",
  },
  {
    image: SVG.HTMLIcon,
    text: "HTML",
  },
  {
    image: SVG.CSSIcon,
    text: "CSS",
  },
  {
    image: SVG.JSIcon,
    text: "JavaScript",
  },
  {
    image: SVG.TSIcon,
    text: "TypeScript",
  },
];

const ExperiencePage: NextPage = (props) => {
  return (
    <Container id="experience" fluid className={styles.container}>
      <Col className={styles.topContainer}>
        <TechnologyBox image={SVG.ReactIcon} text="React" />
        <span className={styles.techsList}>
          {technologies.map((tech, index) => (
            <Image
              className={styles.tech}
              key={index}
              src={tech.image}
              alt={tech.text}
              width={48}
              height={48}
            />
          ))}
        </span>
      </Col>
      <Col className={styles.bottomContainer}>
        <CustomText text="Employment History" className={styles.title} />
        <span className={styles.experiences}>
          <span className={styles.experience}></span>
        </span>
      </Col>
    </Container>
  );
};

export default ExperiencePage;
