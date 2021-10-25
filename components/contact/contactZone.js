import Link from "next/link";
import styles from "./contactZone.module.css";

export default function ContactZone() {
  return (
    <div>
      <h1>Contact Me</h1>
      <div className={styles.linkArea}>
        <Link href="/">
          <a>LinkedIn</a>
        </Link>
        <Link href="/">
          <a>Github</a>
        </Link>
        <Link href="/">
          <a>Twitter</a>
        </Link>
        <p>Email: sbrookshire99@gmail.com</p>
      </div>
    </div>
  );
}
