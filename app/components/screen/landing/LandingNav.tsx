"use client";

import Typo from "../../core/Typo";
import Icon from "@mui/material/Icon";
import CopyIcon from "@mui/icons-material/ContentCopyRounded";
import ArrowIcon from "@mui/icons-material/NorthEastRounded";
import styles from "./styles.module.scss";
import Alert from "@mui/material/Alert";
import { SetStateAction, useEffect, useState } from "react";
import { clx, copyStr } from "../../func/common";

const SHORTCUTS: { title: string; link: string }[] = [
  { title: "Velog", link: "https://velog.io/@loopy" },
  { title: "Github", link: "https://github.com/JIWON-MIN" },
  { title: "LinkedIn", link: "https://www.linkedin.com/in/jiwon-min-67b3372b2/" },
];

const EMAIL = "z_zzz7@naver.com";
const LAST_UPDATED = "2024.03.27";

const navLi = () => {
  return SHORTCUTS.map((shortcut) => {
    const { title, link } = shortcut;
    const onClickLink = (link: string) => {
      window.open(link, "_blank");
    };

    return (
      <div key={title} className={styles.navLi} onClick={() => onClickLink(link)}>
        <Typo variant="t1" color="gray1">
          {title}
        </Typo>
        <ArrowIcon className={styles.arrow} />
      </div>
    );
  });
};

interface NavFooterProps {
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavFooter = ({ setShowAlert }: NavFooterProps) => {
  const onClickEmail = () => {
    setShowAlert(true);
    copyStr("z_zzz7@naver.com");
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
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  }, [showAlert]);

  return (
    <>
      <div className={styles.landingNav}>
        <div className={styles.navList}>{navLi()}</div>
        <NavFooter setShowAlert={setShowAlert} />
      </div>
      {/* {showAlert && ( */}
      <Alert severity="success" className={clx(styles.alert, showAlert ? styles.showAlert : styles.hideAlert)}>
        Email has been copied to clipboard.
      </Alert>
      {/* )} */}
    </>
  );
}
