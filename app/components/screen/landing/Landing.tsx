import Image from "next/image";
import LandingNav from "./LandingNav";
import ArrowIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import BusanJpeg from "../../assets/busan.jpeg";
import styles from "./styles.module.scss";
import Typo from "../../core/Typo";

const Arrows = () => {
  return (
    <div className={styles.arrows}>
      <ArrowIcon />
      <ArrowIcon style={{ marginTop: "-35px" }} />
    </div>
  );
};

export default function Landing() {
  return (
    <div className={styles.landing} id="landing">
      <LandingNav />
      <div className={styles.background}>
        <Image src={BusanJpeg} alt="busan" fill style={{ objectFit: "cover" }} />
        <div className={styles.overlay} />
        <Typo variant="h3" color="white" className={styles.text}>
          끊임없는 학습과 응용, 배려와 협업을 실천하는
          <br />
          프론트엔드 개발자{" "}
          <span className={styles.highlight}>
            민지원
            <div className={styles.pen} />
          </span>{" "}
          입니다.
        </Typo>

        <Arrows />
      </div>
    </div>
  );
}
