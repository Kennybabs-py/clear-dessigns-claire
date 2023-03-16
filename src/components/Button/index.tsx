import React from "react";
import { raleway } from "@/utils/fonts";

import styles from "./button.module.scss";

type Props = {
  content?: string;
  transparent?: boolean;
};

export default function Button(props: Props) {
  const { content, transparent } = props;

  return (
    <button
      className={`${styles.button} ${raleway.className} ${
        !transparent ? styles.generic : styles.transparent
      }`}
    >
      {content}
    </button>
  );
}
