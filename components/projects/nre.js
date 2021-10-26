import styles from "./nre.module.css";
import Link from "next/link";
import Image from "next/image";

//image import
import nreImg from "../../public/imgs/nre.png";

export default function NRE() {
  return (
    <div>
      <Image src={nreImg} height={300} width={450} />
    </div>
  );
}
