import Image from "next/image";
import { CustomText } from "@/components/CustomText";

import styles from "./index.module.scss";
import { SVG } from "@/resources/svg";
import { useState } from "react";

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

export const TechnologyBox = () => {
  const [activeTech, setActiveTech] = useState(0);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <span className={styles.topContainer}>
          <span className={styles.title}>
            <Image
              alt={technologies[activeTech].text}
              src={technologies[activeTech].image}
              width={36}
              height={36}
            />
          </span>
          <span className={styles.time}>
            <CustomText text="1 years" className={styles.textTime} />
          </span>
        </span>
        <span className={styles.bottomContainer}>
          <CustomText
            text={technologies[activeTech].text}
            className={styles.textTitle}
          />
          <CustomText
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl."
            className={styles.textDescription}
          />
        </span>
      </div>
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
    </div>
  );
};
