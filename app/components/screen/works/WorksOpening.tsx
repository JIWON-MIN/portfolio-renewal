import ContentSection from "../../module/ContentSection";
import Typo from "../../core/Typo";
import styles from "./styles.module.scss";

export default function WorksOpening() {
  return (
    <ContentSection className={styles.opening}>
      <Typo variant="t1" color="white" style={{ textAlign: "left", paddingLeft: "220px" }}>
        Now, Let Me Introduce
      </Typo>
      <Typo variant="120px" bold color="white">
        MY WORK
      </Typo>
    </ContentSection>
  );
}
