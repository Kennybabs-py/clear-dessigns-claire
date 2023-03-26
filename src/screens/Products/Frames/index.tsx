import React from "react";
import Image from "next/image";

import ArrowdownIcon from "@/assets/products/arrow_down.svg";
import { framesData as data } from "@/data";
import styles from "./frames.module.scss";

export default function Frames() {
  return (
    <section className={styles.frames}>
      <h2>Frames</h2>

      <div className={styles.filter__viewall}>
        <a href="#">
          Filter by size <Image src={ArrowdownIcon} alt="arrow down" />
        </a>
        <a href="#">View all</a>
      </div>

      <div className={styles.frames_list}>
        {data.map((item) => {
          return (
            <figure key={item.id}>
              {" "}
              <Image
                src={item.staticImg}
                alt={`artwork ${item.id}`}
                placeholder="blur"
                loading="lazy"
              />
            </figure>
          );
        })}
      </div>
    </section>
  );
}
