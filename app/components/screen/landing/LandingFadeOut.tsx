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
        trigger: "#fade-out",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });

    animation.from("#fade-out", { opacity: 1 }).to("#fade-out", { opacity: 0 });

    () => animation.kill();
  }, []);

  return (
    <div className={styles.landingFadeOut} id="fade-out">
      <div className={styles.content}>
        <Landing />
      </div>
    </div>
  );
}
