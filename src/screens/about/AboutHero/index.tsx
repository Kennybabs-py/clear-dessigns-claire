import React from "react";

// import styles from "./hero.module.scss";
import HeroTextImageWrap from "@/components/HeroTextImageWrap";
import Carousel from "@/components/Carousel";
import { homeCarousel } from "@/data";

export default function AboutHero() {
  return (
    <section>
      <HeroTextImageWrap
        heroHeadingOne={
          <h2>
            Interior <span>Design Solution</span> Provider
          </h2>
        }
        heroHeadingTwo={
          <h3>
            We have mastered the art of delivering bespoke interior design
            solutions for the residential, commercial and hospitality industries
          </h3>
        }
        heroGallery={<Carousel data={homeCarousel} />}
      />
    </section>
  );
}
