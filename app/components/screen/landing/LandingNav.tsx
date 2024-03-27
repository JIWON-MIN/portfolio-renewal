"use client";

import Typo from "../../core/Typo";
import Icon from "@mui/material/Icon";
import CopyIcon from "@mui/icons-material/ContentCopyRounded";
import ArrowIcon from "@mui/icons-material/NorthEastRounded";
import styles from "./styles.module.scss";

const SHORTCUTS: { title: string; link: string }[] = [
  { title: "Velog", link: "/" },
  { title: "Github", link: "/" },
  { title: "Wanted", link: "/" },
  { title: "LinkedIn", link: "/" },
];

const EMAIL = "z_zzz7@naver.com";
const LAST_UPDATED = "2024.03.27";

const navLi = () => {
  return SHORTCUTS.map((shortcut) => {
    const { title, link } = shortcut;
    return (
      <div key={title} className={styles.navLi}>
        <Typo variant="t1" color="gray1">
          {title}
        </Typo>
        <ArrowIcon className={styles.arrow} />
      </div>
    );
  });
};

const NavFooter = () => {
  const onClickEmail = () => {
    console.log("onClickEmail");
  };

  return (
    <div className={styles.navFooter}>
      <div className={styles.email} onClick={onClickEmail}>
        <Icon component={CopyIcon} />
        <Typo variant="caption1" color="white">
          {EMAIL}
        </Typo>
      </div>

      <Typo variant="caption2" color="gray1">
        last updated : {LAST_UPDATED}
      </Typo>
    </div>
  );
};

export default function LandingNav() {
  return (
    <div className={styles.landingNav}>
      <div className={styles.navList}>{navLi()}</div>

      <NavFooter />
    </div>
  );
}
