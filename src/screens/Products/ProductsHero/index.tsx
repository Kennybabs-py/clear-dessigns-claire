import React from "react";

// import styles from "./hero.module.scss";
import HeroTextImageWrap from "@/components/HeroTextImageWrap";
import Carousel from "@/components/Carousel";
import { homeCarousel } from "@/data";

export default function ProductsHero() {
  return (
    <section>
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
        heroGallery={<Carousel data={homeCarousel} />}
      />
    </section>
  );
}
