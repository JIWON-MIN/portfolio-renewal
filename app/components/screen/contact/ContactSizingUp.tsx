"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Contact from "./Contact";
import styles from "./styles.module.scss";

export default function ContactSizingUp() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: "#sizingUpBg",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    animation.from("#sizingUpContent", { transform: "scale(0.2)" }).to("#sizingUp", { transform: "scale(1)" });

    () => animation.kill();
  }, []);

  return (
    // <div className={styles.contactSizingUp} id="sizingUpBg">
    // <div className={styles.contentWrapper}>
    <Contact id="sizingUpContent" />
    // </div>
    // </div>
  );
}
