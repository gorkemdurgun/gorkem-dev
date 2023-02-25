import Image from "next/image";
import { CustomText } from "@/components/CustomText";

import styles from "./index.module.scss";

interface TechnologyBoxProps {
  image?: any;
  text: string;
}

export const TechnologyBox = (props: TechnologyBoxProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.topContainer}>
        <span className={styles.title}>
          <Image alt={props.text} src={props.image} width={36} height={36} />
        </span>
        <span className={styles.time}>
          <CustomText text="1 years" className={styles.textTime} />
        </span>
      </span>
      <span className={styles.bottomContainer}>
        <CustomText text={props.text} className={styles.textTitle} />
        <CustomText
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl."
          className={styles.textDescription}
        />
      </span>
    </div>
  );
};
