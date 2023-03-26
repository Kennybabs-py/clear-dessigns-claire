import React from "react";
import Image from "next/image";

import ArrowdownIcon from "@/assets/products/arrow_down.svg";
import { artworksData as data } from "@/data";
import styles from "./artwork.module.scss";

export default function Artworks() {
  return (
    <section className={styles.artworks}>
      <h2>Artworks</h2>

      <div className={styles.filter__viewall}>
        <a href="#">
          Filter by size <Image src={ArrowdownIcon} alt="arrow down" />
        </a>
        <a href="#">View all</a>
      </div>

      <div className={styles.artworks_list}>
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
