import styles from "./projectLanding.module.css";
import Link from "next/link";

export default function projectLanding() {
  return (
    <div className={styles.projectLanding}>
      <h1 className={styles.title}>Explore.</h1>
      <p className={styles.pageDesc}>
        Welcome to my current list of projects that I have deployed as well as
        any that are currently a work in progress. Each project will have a link
        to its active deployment(if actively deployed) as well as the Github
        repo where the codebase is stored. Feel free to browse around and feel
        free to{" "}
        <Link href="/contact">
          <a>Contact Me</a>
        </Link>{" "}
        if you have any questions.
        <br />
        <br />
      </p>
    </div>
  );
}
