"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Landing from "./Landing";
import styles from "./styles.module.scss";

export default function LandingFadeOut() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: "#fadeOut",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });

    animation.from("#fadeOut", { opacity: 1 }).to("#fadeOut", { opacity: 0 });

    () => animation.kill();
  }, []);

  return (
    <div className={styles.landingFadeOut} id="fadeOut">
      <div className={styles.content}>
        <Landing />
      </div>
    </div>
  );
}
