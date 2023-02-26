import styles from "./index.module.css";

export const CustomText = (props: {
  text: string;
  className?: any;
  id?: string;
}) => {
  return (
    <h1 id={props.id} className={props.className ? props.className : styles.text}>
      {props.text}
    </h1>
  );
};
