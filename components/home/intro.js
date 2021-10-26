import styles from "./intro.module.css";
import Link from "next/link";

export default function intro() {
  return (
    <div className={styles.introZone}>
      <h1 className={styles.about}>About Me.</h1>
      <div className={styles.introArea}>
        <p className={styles.introText}>
          My name is Sam Brookshire. I am a full stack web developer based out
          Beloit, Wisconsin. I am currently seeking work, so please feel free to
          reach out via the{" "}
          <Link href="/">
            <a className={styles.contactLink}>Contact Me</a>
          </Link>{" "}
          page. I am 22 years old and seeking my first opportunity to prove
          myself. I graduated from the Denver University Full Stack Web
          Developer bootcamp and am looking to bring my passion for functional,
          elegant web design to a professional setting. I have always been
          passionate about "geeky" hobbies and I have applied much of that
          passion to my work in web development.
          <br />
          <br />I am currently independently developing a tool for the popular
          table top game Dungeons & Dragons and plan to continue developing
          tools for table top gamers. Intersecting my other hobbies with web
          development has allowed me to expand my knowledge substantially. It is
          my goal to bring this passion to every job, no matter where that may
          be. I consider myself proficient in mySQL, React, Next.JS and many of
          the the "basics" of web development like HTML, CSS, and Javascript.
          <br />
          <br />
          While I am currently seeking traditional employment, if you have
          freelance opportunities I would love to explore those as well.
          <br />
        </p>
      </div>
    </div>
  );
}
