"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import MJWSVG from "../../assets/mjw_icon.svg";
import styles from "./styles.module.scss";
import { MENU_ID, MENU_ITEM } from "../../constant/common";

interface MenuBarProps {
  hideIcon?: boolean;
}

export default function MenuBar({ hideIcon = false }: MenuBarProps) {
  return (
    <div className={styles.wrapper}>
      {!hideIcon && <Image src={MJWSVG} alt="mjw" />}
      <div className={styles.bar}>
        {MENU_ITEM.map((item) => {
          return (
            <Link className={styles.el} key={item} to={MENU_ID[item]} smooth={true}>
              {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
