import Link from "next/link";
import styles from "./contactZone.module.css";

export default function ContactZone() {
  return (
    <div className={styles.contactPage}>
      <h1 className={styles.title}>Contact Me</h1>
      <div className={styles.linkArea}>
        <Link href="/">
          <a className={styles.linkText}>LinkedIn</a>
        </Link>
        <Link href="/">
          <a className={styles.linkText}>Github</a>
        </Link>
        <Link href="/">
          <a className={styles.linkText}>Twitter</a>
        </Link>
        <p className={styles.linkText}>Email: sbrookshire99@gmail.com</p>
      </div>
    </div>
  );
}
