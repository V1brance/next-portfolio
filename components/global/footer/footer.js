import styles from "./footer.module.css";
import Link from "next/link";

export default function footer() {
  return (
    <div className={styles.footerArea}>
      <div className={styles.copyright}>
        © Samuel Brookshire <br />
        2021 All rights reserved
      </div>
      <div className={styles.linkArea}>
        <Link href="/contact">
          <a>Contact Me</a>
        </Link>
        <Link href="/projects">
          <a>Project List</a>
        </Link>
        <Link href="/credit">
          <a>Image Credits</a>
        </Link>
      </div>
    </div>
  );
}
