import React from "react";

import TextImageWrap from "@/components/TextImageWrap";
import lightenImage from "@/assets/about/lighten_up.png";
import styles from "./styles.module.scss";

export default function LightenUp() {
  return (
    <section className={styles.lighten}>
      <TextImageWrap
        textRight
        headingOne="Let's lighten up your"
        lastWord="Home"
        firstButtonName="contact us"
        imageSrc={lightenImage}
      />
    </section>
  );
}
