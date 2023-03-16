import React from "react";
import Image from "next/image";

import Button from "@/components/Button";
import { TextImageWrapType } from "@/types";
import styles from "./styles.module.scss";

export default function TextImageWrap(props: TextImageWrapType) {
  const {
    textRight,
    headingOne,
    lastWord,
    headingTwo,
    paragraph,
    imageSrc,
    solidBox,
    firstButtonName,
    secondButtonName,
  } = props;

  return (
    <section
      className={` ${styles.text_image__wrap} ${
        textRight && styles.text__right
      }`}
    >
      <div className={styles.text__container}>
        {headingOne && (
          <h2>
            {headingOne} <span>{lastWord}</span>
          </h2>
        )}
        <h3>{headingTwo}</h3>
        <p>
          {paragraph
            ? paragraph
            : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt"}
        </p>

        {(firstButtonName || secondButtonName) && (
          <div className={styles.ctas}>
            {firstButtonName && <Button content={firstButtonName} />}
            {secondButtonName && <Button content={secondButtonName} />}
          </div>
        )}
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
