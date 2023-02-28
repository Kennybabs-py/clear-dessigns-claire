import Button from "@/components/Button";
import React from "react";
import styles from "./hero.module.scss";

export default function HomeHero() {
  return (
    <section className={styles.home_hero}>
      <div className={styles.hero_texts}>
        <h2>
          More than just <span>Interior</span>
        </h2>

        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt{" "}
        </p>

        <div className={styles.hero_texts__ctas}>
          <Button content="contact us" />
          <Button content="explore" transparent />
        </div>
      </div>

      <div className={styles.hero_image}>
        <div className={styles.solid_box}></div>
      </div>
    </section>
  );
}
