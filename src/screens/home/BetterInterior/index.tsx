import React from "react";

import TextImageWrap from "@/components/TextImageWrap";
import styles from "./styles.module.scss";

export default function BetterInterior() {
  return (
    <section className={styles.better__interior}>
      <TextImageWrap
        textRight
        headingOne={
          <h2>
            Your interior just got <span>Better</span>
          </h2>
        }
        firstButtonName="contact us"
        imageSrc={`https://res.cloudinary.com/da9s8mfnz/image/upload/v1678977992/home_image_interior_kluvvs.png`}
      />
    </section>
  );
}
