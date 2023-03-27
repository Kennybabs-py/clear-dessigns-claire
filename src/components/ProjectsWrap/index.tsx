import React from "react";
import Image from "next/image";

import { ProjectWrapType } from "@/types";
import styles from "./styles.module.scss";

export default function ProjectsWrap(props: ProjectWrapType) {
  const { textRight, headingTwo, paragraph, imageSrc } = props;

  return (
    <section
      className={` ${styles.text_image__wrap} ${
        textRight && styles.text__right
      }`}
    >
      <div className={styles.text__container}>
        {headingTwo && <h3>{headingTwo}</h3>}

        <p>
          {paragraph
            ? paragraph
            : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt"}
        </p>
      </div>

      <div className={`${styles.image__container}  `}>
        <Image
          src={imageSrc}
          alt="Clear Designs by Claire"
          placeholder="blur"
          loading="lazy"
        />
      </div>
    </section>
  );
}
