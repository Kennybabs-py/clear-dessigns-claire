import Image from "next/image";

import HeroTextImageWrap from "@/components/HeroTextImageWrap";
import heroImg from "@/assets/projects/hero_img.png";

import styles from "./styles.module.scss";

export default function ProjectsHero() {
  return (
    <section className={styles.projects__hero}>
      <HeroTextImageWrap
        heroHeadingOne={
          <h2>
            Discover our <span>Projects</span>
          </h2>
        }
        heroHeadingTwo={
          <h3>
            We ensure to deliver quality and bespoke interior design solutions
            for the residential, commercial and hospitality industries
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
