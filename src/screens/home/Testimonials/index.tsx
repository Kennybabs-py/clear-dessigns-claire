import Image from "next/image";
import ClientImg from "@/assets/home/client_one.png";
import { testimonialsData as data } from "@/data";
import styles from "./styles.module.scss";

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.testimonials__heading}>what our clients say </h2>

      <div className={styles.testimony__container}>
        {data.map((item) => {
          return (
            <div key={item.id} className={styles.testimony}>
              <p>{item.text}</p>

              <div className={styles.name__img}>
                <Image
                  src={item.staticImg}
                  alt="client"
                  width={94}
                  height={94}
                  placeholder="blur"
                />

                <p>{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
