import Typo from "../../core/Typo";
import { clx } from "../../func/common";
import styles from "./styles.module.scss";

export default function Opening() {
  return (
    <div className={styles.opening}>
      <div className={styles.text}>
        <Typo variant="t2" color="black" style={{ lineHeight: "40px" }}>
          Welcome to My Portfoilo!
          <br />
          I’m Frontend Developer MIN JI WON.
        </Typo>
      </div>

      <div className={clx(styles.animationBox, styles.left)} />
      <div className={clx(styles.animationBox, styles.right)} />
    </div>
  );
}
