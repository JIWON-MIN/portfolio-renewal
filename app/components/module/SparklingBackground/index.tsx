"use client";

import { ReactNode, useEffect } from "react";
import { gsap } from "gsap";
import styles from "./styles.module.scss";
import MenuBar from "../MenuBar";

interface SparklingBackgroundProps {
  children?: ReactNode;
}

export default function SparklingBackground({ children }: SparklingBackgroundProps) {
  const drawStars = () => {
    const tmpStar = document.createElement("figure");
    tmpStar.className = styles.star + " " + "star";
    tmpStar.style.top = 100 * Math.random() + "%";
    tmpStar.style.left = 100 * Math.random() + "%";
    document.getElementById("stars")?.appendChild(tmpStar);
  };

  const createStars = (i: number) => {
    for (i; i > 0; i--) {
      drawStars();
    }
    const stars = document.querySelectorAll(".star");
    animateStars(stars);
  };

  const animateStars = (stars: NodeListOf<Element>) => {
    Array.prototype.forEach.call(stars, function (el) {
      gsap.to(el, {
        duration: Math.random() * 0.5 + 1,
        opacity: Math.random(),
        repeat: -1, // 무한 반복
      });
    });
  };

  useEffect(() => {
    createStars(100);
  }, []);

  return (
    <div className={styles.background}>
      <div className={styles.stars} id="stars">
        <MenuBar />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
