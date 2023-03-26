import TextImageWrap from "@/components/TextImageWrap";
import styles from "./styles.module.scss";
import extraTouchImg from "@/assets/products/extra_touch.png";

export default function ExtraTouch() {
  return (
    <section className={styles.extra__touch}>
      <TextImageWrap
        textRight
        headingOne={
          <h2>
            Get that <span>Extra Touch</span> you want
          </h2>
        }
        firstButtonName="contact us"
        imageSrc={extraTouchImg}
      />
    </section>
  );
}
