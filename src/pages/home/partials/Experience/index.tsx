import { CustomText } from "@/components/CustomText";
import { TechnologyBox } from "@/components/TechnologyBox";
import { TechnologyCards } from "@/components/TechnologyCards";
import { SVG } from "@/resources/svg";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
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
        {/* <TechnologyBox /> */}
        <TechnologyCards />
      </Col>
      <Col className={styles.bottomContainer}>
        <CustomText text="[resume]" className={styles.title} />
        <span className={styles.description}>
          <CustomText
            text="I have been working as a front-end developer for almost 1 years in a company called Kreo Solutions. I have been working on projects using ReactJS, NextJS, CSS, TypeScript, and other technologies. If you want to know more about my experience, you can download my CV below."
            className={styles.descriptionText}
          />
          <Button className={styles.button}>
            <a className={styles.buttonText} href="/resume.pdf" download>
              Download CV
            </a>
          </Button>
        </span>
      </Col>
    </Container>
  );
};

export default ExperiencePage;
