import Image from "next/image";
import { CarouselType } from "@/types";

import styles from "./carousel.module.scss";

export default function Carousel(props: CarouselType) {
  const { data } = props;

  return (
    <section className={styles.carousel}>
      <div className={styles.container}>
        {data.map((item) => {
          const { id, staticImg } = item;

          return (
            <div key={id} className={styles.image__container}>
              <Image src={staticImg} alt="carousel" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
