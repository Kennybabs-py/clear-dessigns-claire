import Image from "next/image";
import starsImg from "@/assets/about/stars.svg";
import { valuesData as data } from "@/data";
import styles from "./styles.module.scss";

export default function Values() {
  return (
    <section className={styles.values}>
      <h2 className={styles.values__heading}>
        Our <span>Values</span>
      </h2>

      <div className={styles.values__container}>
        {data.map((item) => {
          return (
            <div key={item.id} className={styles.value}>
              <div className={styles.title__img}>
                <Image src={starsImg} alt="stars" width={79} height={84} />

                <p>{item.title}</p>
              </div>

              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
