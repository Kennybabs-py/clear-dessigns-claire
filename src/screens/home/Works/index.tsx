import TextImageWrap from "@/components/TextImageWrap";

import WorksImageOne from "@/assets/home/works_image_one.png";
import WorksImageTwo from "@/assets/home/works_image_two.png";
import WorksImageThree from "@/assets/home/works_image_three.png";
import WorksImageFour from "@/assets/home/works_image_four.png";

import styles from "./works.module.scss";

export default function Works() {
  return (
    <section className={styles.works}>
      <TextImageWrap
        heading="Functional and Aesthetic Design Services"
        imageSrc={WorksImageOne}
      />

      <TextImageWrap
        heading="Quality Artworks and Minimalist Wall frames"
        imageSrc={WorksImageTwo}
        textRight
      />

      <TextImageWrap
        heading="Finishing and Furnishing"
        imageSrc={WorksImageThree}
      />

      <TextImageWrap
        heading="Interior Consultations and Renovations"
        imageSrc={WorksImageFour}
        textRight
      />
    </section>
  );
}
