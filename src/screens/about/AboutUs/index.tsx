import React from "react";
import Image from "next/image";

import imageOne from "@/assets/about/who_we_are.png";
import imageTwo from "@/assets/about/who_we_are2.png";

import styles from "./styles.module.scss";

export default function AboutUs() {
  return (
    <section className={styles.about_us}>
      <h2>
        Who <span>We</span> Are
      </h2>

      <div className={styles.content}>
        <div className={styles.content__images}>
          <Image
            placeholder="blur"
            loading="lazy"
            src={imageOne}
            alt="who we are"
          />

          <Image
            placeholder="blur"
            loading="lazy"
            src={imageTwo}
            alt="who we are"
          />
        </div>

        <div className={styles.content__texts}>
          <p>
            <span> Cleardesigns by Claire</span> is a building and interior
            design start-up company based in Lagos. This startup was founded by
            a professional builder and certified interior designer, Remilekun
            Claire Imasuen.
          </p>

          <div>
            <p>
              {" "}
              We are a building and interior design start-up that specializes in
              building and interior designs solutions turning your house into
              beauitful abode
            </p>
          </div>

          <p>
            Our goal is to offer functional and aesthetically pleasing spaces to
            meet our client&apos;s needs and reflect their personality. To bring
            to our customers, standard and custom-sized picture wall frame and
            poster frames to enhance the appearance and beauty of any space.
          </p>
        </div>
      </div>
    </section>
  );
}
