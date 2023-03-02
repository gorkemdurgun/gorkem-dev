import { SVG } from "@/resources/svg";
import Image from "next/image";
import styles from "./index.module.scss";

const technologies = [
  {
    image: SVG.NextjsIcon,
    text: "Next.js",
    description:
      "Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications.",
  },
  {
    image: SVG.ReactIcon,
    text: "React",
    description:
      "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.",
  },
  {
    image: SVG.HTMLIcon,
    text: "HTML",
    description:
      "HTML is the standard markup language for creating Web pages. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.",
  },
  {
    image: SVG.CSSIcon,
    text: "CSS",
    description:
      "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
  },
  {
    image: SVG.JSIcon,
    text: "JavaScript",
    description:
      "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.",
  },
  {
    image: SVG.TSIcon,
    text: "TypeScript",
    description:
      "TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language.",
  },
];
export const TechnologyCards = () => {
  return (
    <div className={styles.container}>
      {technologies.map((item, index) => {
        return (
          <div key={index} className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src={item.image}
                alt={item.text}
                width={100}
                height={100}
              />
            </div>
            <div className={styles.cardTexts}>
              <p className={styles.cardTitle}>{item.text}</p>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
