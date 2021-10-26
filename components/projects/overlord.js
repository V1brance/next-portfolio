import styles from "./overlord.module.css";
import Link from "next/link";
import Image from "next/image";

//image imports
import overlordCap from "../../public/imgs/overlord.png";

export default function Overlord() {
  return (
    <div className={styles.card}>
      <h1 className={styles.cardTitle}>Overlord Sheets - WIP</h1>
      <div className={styles.cardContent}>
        <Image
          src={overlordCap}
          width={1100}
          height={500}
          alt="screenshot of Overlord Sheets"
          placeholder="blur"
          quality={100}
        />
        <div className={styles.cardInfo}>
          <h2>Next Generation D&D Character Sheets</h2>
          <p>Full Stack Development</p>
          <p>Currently in Development</p>
          <p>Tech Used</p>
          <ul>
            <li>Next.JS</li>
            <li>mySQL</li>
            <li>Nodemailer</li>
          </ul>
          <p>
            Deployment Link:{" "}
            <Link href="overlord.vercel.app">
              <a>Overlord Sheets</a>
            </Link>
          </p>
          <p>
            Github Repo:{" "}
            <Link href="/">
              <a>Overlord Repo</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
