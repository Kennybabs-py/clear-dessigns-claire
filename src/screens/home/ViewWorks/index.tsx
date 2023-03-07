import React from "react";

import Carousel from "@/components/Carousel";
import { homeCarousel } from "@/data";
import styles from "./styles.module.scss";

export default function ViewWorks() {
  return (
    <section className={styles.view__works}>
      <h2 className={styles.view__works__heading}>
        view our <span>works</span>
      </h2>

      <Carousel data={homeCarousel} />
    </section>
  );
}
