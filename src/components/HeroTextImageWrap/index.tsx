import { ReactNode } from "react";
import styles from "./styles.module.scss";

type HeroType = {
  heroHeadingOne: ReactNode;
  heroHeadingTwo: ReactNode;
  heroGallery?: ReactNode;
};

export default function HeroTextImageWrap(props: HeroType) {
  const { heroHeadingOne, heroHeadingTwo, heroGallery } = props;

  return (
    <section className={styles.hero__component}>
      <div className={styles.heading__one}> {heroHeadingOne}</div>
      <div className={styles.heading__two}> {heroHeadingTwo}</div>
      <div className={styles.gallery}> {heroGallery}</div>
    </section>
  );
}
