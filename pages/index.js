import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/global/nav/nav";
import Landing from "../components/home/landing";
import Intro from "../components/home/intro";
import Footer from "../components/global/footer/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sam's Portfolio</title>
        <meta
          name="description"
          content="Professional portfolio for Sam Brookshire"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <Landing />
        <Intro />
        <Footer />
      </main>
    </div>
  );
}
