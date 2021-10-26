import styles from "../styles/projects.module.css";
import Navbar from "../components/global/nav/nav";
import Footer from "../components/global/footer/footer";
import ProjectLanding from "../components/projects/projectLanding";
import OverlordCard from "../components/projects/overlord";
import NRECard from "../components/projects/nre";
import PortfolioCard from "../components/projects/portfolio";

export default function Projects() {
  return (
    <div>
      <main>
        <Navbar />
        <ProjectLanding />
        <OverlordCard />
        <div className={styles.twoCards}>
          <NRECard />
          <PortfolioCard />
        </div>
        <Footer />
      </main>
    </div>
  );
}
