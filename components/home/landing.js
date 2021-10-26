import Image from "next/image";
import styles from "./landing.module.css";
import splashImage from "../../public/imgs/splashImage.png";

export default function landing() {
  return (
    <div>
      <div className={styles.landingArea}>
        <h2 className={styles.landingText} id="solidLoad">
          Welcome.
        </h2>
        <div className={styles.landingImage}>
          <Image src={splashImage} width={720} height={720} />
        </div>
      </div>
    </div>
  );
}
