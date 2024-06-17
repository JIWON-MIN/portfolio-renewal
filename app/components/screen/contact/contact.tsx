import Image from "next/image";
import LAPTOPIMG from "../../assets/big_laptop.png";
// import ContentSection from "../../module/ContentSection";
import styles from "./styles.module.scss";
import Typo from "../../core/Typo";

interface ContactProps {
  id?: string;
}

export default function Contact({ id }: ContactProps) {
  const INFO = [
    { key: "Phone", value: "010. 6681. 3534", link: null },
    { key: "Email", value: "z_zzz7@naver.com", link: null },
    { key: "Social", value: "LinkedIn", link: "https://www.naver.com" },
  ];

  return (
    <div className={styles.contact} id={id}>
      <Image src={LAPTOPIMG} alt="laptop" width={1220} className={styles.bgLaptop} />
      <div className={styles.content}>
        <Typo variant="120px" color="white" bold className={styles.title}>
          "CONTACT ME"
        </Typo>
        <div className={styles.divider} />
        <div className={styles.info}>
          {INFO.map((el) => (
            <div className={styles.infoEl} key={el.key}>
              <Typo variant="t3" color="white">
                {el.key}
              </Typo>
              <Typo variant="caption1" color="gray1" style={{ marginTop: "8px" }}>
                {el.value}
              </Typo>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
