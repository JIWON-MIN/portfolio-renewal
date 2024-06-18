"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Alert from "@mui/material/Alert";

import LAPTOPIMG from "../../assets/big_laptop.png";
import Typo from "../../core/Typo";
import { clx, copyStr } from "../../func/common";
import styles from "./styles.module.scss";

interface ContactProps {
  id?: string;
}

export default function Contact({ id }: ContactProps) {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  }, [showAlert]);

  const INFO = [
    {
      key: "Phone",
      value: "010. 6681. 3534",
      onClick: () => {
        setShowAlert(true);
        copyStr("010. 6681. 3534");
      },
    },
    {
      key: "Email",
      value: "z_zzz7@naver.com",
      onClick: () => {
        setShowAlert(true);
        copyStr("z_zzz7@naver.com");
      },
    },
    {
      key: "Social",
      value: "LinkedIn",
      onClick: () => {
        window.open("https://www.linkedin.com/in/jiwon-min-67b3372b2/", "_blank");
      },
    },
  ];

  return (
    <div className={styles.contact} id={id}>
      <Image src={LAPTOPIMG} alt="laptop" width={1220} className={styles.bgLaptop} />
      <div className={styles.content}>
        <Typo variant="100px" color="white" bold className={styles.title}>
          "CONTACT ME"
        </Typo>
        <div className={styles.divider} />
        <div className={styles.info}>
          {INFO.map((el) => (
            <div className={styles.infoEl} key={el.key}>
              <Typo variant="t3" color="white">
                {el.key}
              </Typo>
              <Typo variant="caption1" color="gray1" className={styles.value} onClick={el.onClick}>
                {el.value}
              </Typo>
            </div>
          ))}
        </div>
      </div>
      <Alert severity="success" className={clx(styles.alert, showAlert ? styles.showAlert : styles.hideAlert)}>
        Contact information has been copied to clipboard.
      </Alert>
    </div>
  );
}
