import React from "react";
import Image from "next/image";

import { TextImageWrapType } from "@/types";
import styles from "./styles.module.scss";

export default function TextImageWrap(props: TextImageWrapType) {
  const { textRight, heading, paragraph, imageSrc, solidBox } = props;

  return (
    <section
      className={` ${styles.text_image__wrap} ${
        textRight && styles.text__right
      }`}
    >
      <div className={styles.text__container}>
        <h2>{heading}</h2>
        <p>
          {paragraph
            ? paragraph
            : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt"}
        </p>
      </div>

      <div className={`${styles.image__container}  `}>
        <div
          className={`${styles.solid_box} ${solidBox && styles.solid} ${
            textRight ? styles.box_right : styles.box_left
          }`}
        ></div>
        <Image src={imageSrc} alt="Clear Designs by Claire" fill />
      </div>
    </section>
  );
}
