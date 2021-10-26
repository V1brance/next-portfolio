import styles from "./portfolio.module.css";
import Link from "next/link";
import Image from "next/image";
import portfolioImg from "../../public/imgs/portfolio.png";

export default function Portfolio() {
  return (
    <div>
      <Image src={portfolioImg} height={300} width={450} />
    </div>
  );
}
