import Link from "next/link";
import styles from "./nav.module.css";

export default function navbar() {
  return (
    <div>
      <div className={styles.navBar}>
        <ul className={styles.navList}>
          <li className={styles.homeButton}>
            <Link href="/">
              <a className={styles.navText}>Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/projects">
              <a className={styles.navText}>Project List</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">
              <a className={styles.navText}>Contact Me</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/resume">
              <a className={styles.navText}>Resume</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
