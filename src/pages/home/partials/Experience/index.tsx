import { CustomText } from "@/components/CustomText";
import { TechnologyBox } from "@/components/TechnologyBox";
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
  const [activeTech, setActiveTech] = useState(0);

  return (
    <Container id="experience" fluid className={styles.container}>
      <Col className={styles.topContainer}>
        <TechnologyBox
          image={technologies[activeTech].image}
          text={technologies[activeTech].text}
        />
        <span className={styles.techsList}>
          {technologies.map((tech, index) => (
            <b
              key={index}
              className={styles.tech}
              onClick={() => {
                setActiveTech(index);
              }}
            >
              <Image src={tech.image} alt={tech.text} width={48} height={48} />
            </b>
          ))}
        </span>
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
