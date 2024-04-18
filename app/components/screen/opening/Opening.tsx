"use client";

import { useEffect } from "react";
import Typo from "../../core/Typo";
import { clx } from "../../func/common";
import styles from "./styles.module.scss";

export default function Opening() {
  useEffect(() => {
    document.body.style.position = "relative";
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";

    setTimeout(() => {
      document.body.style.position = "static";
      document.body.style.overflow = "unset";
      document.body.style.height = "unset";
    }, 6000);
  }, []);

  return (
    <div className={styles.opening}>
      <div className={styles.text}>
        <Typo variant="t3" color="black" style={{ lineHeight: "40px" }}>
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
