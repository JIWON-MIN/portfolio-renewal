"use client";

import { useEffect } from "react";
import Contact from "./Contact";
import styles from "./styles.module.scss";

export default function ContactSizingUp() {
  useEffect(() => {
    const target = document.querySelector("#sizingUpContent");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.sizeup);
          observer.unobserve(entry.target); // Once animated, stop observing
        }
      });
    });

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return <Contact id="sizingUpContent" />;
}
