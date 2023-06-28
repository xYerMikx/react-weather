import { FC } from "react";
import styles from "./Button.module.scss";

interface IButton {
  text: string;
  bg: string;
}

export const Button: FC<IButton> = ({ text, bg }) => {
  return (
    <button className={styles.button} style={{ background: bg }}>
      {text}
    </button>
  );
};
