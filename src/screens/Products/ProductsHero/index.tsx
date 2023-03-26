import Image from "next/image";

import HeroTextImageWrap from "@/components/HeroTextImageWrap";
import heroImg from "@/assets/products/products_hero_img.png";

import styles from "./styles.module.scss";

export default function ProductsHero() {
  return (
    <section className={styles.products__hero}>
      <HeroTextImageWrap
        heroHeadingOne={
          <h2>
            <span>Products</span> You Love
          </h2>
        }
        heroHeadingTwo={
          <h3>
            We sell quality artworks and minimalist wall frames that give your
            space that extra touch
          </h3>
        }
        heroGallery={
          <figure className={styles.hero__image}>
            <Image src={heroImg} alt="products hero" />
          </figure>
        }
      />
    </section>
  );
}
