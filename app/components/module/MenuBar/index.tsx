"use client";

import Image from "next/image";
import MJWSVG from "../../assets/mjw_icon.svg";
import styles from "./styles.module.scss";

const MENU_EL = [
  { title: "ABOUT", url: "about" },
  { title: "WORK", url: "about" },
  { title: "ABILITY", url: "about" },
  { title: "CONTACT", url: "about" },
];

interface MenuBarProps {
  hideIcon?: boolean;
}

export default function MenuBar({ hideIcon = false }: MenuBarProps) {
  return (
    <div className={styles.wrapper}>
      {!hideIcon && <Image src={MJWSVG} alt="mjw" />}
      <div className={styles.bar}>
        {MENU_EL.map((el) => {
          return <div className={styles.el}>{el.title}</div>;
        })}
      </div>
    </div>
  );
}
