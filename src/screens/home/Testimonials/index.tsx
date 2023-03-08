import React from "react";
import styles from "./styles.module.scss";

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.testimonials__heading}>what our clients say </h2>

      <div className={styles.testimony__container}>
        <div className={styles.testimony}></div>
        <div className={styles.testimony}></div>
        <div className={styles.testimony}></div>
        <div className={styles.testimony}></div>
      </div>
    </section>
  );
}
