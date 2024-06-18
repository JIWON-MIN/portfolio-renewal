import { MENU_ID } from "../../constant/common";
import Typo from "../../core/Typo";
import ContentSection from "../../module/ContentSection";
import { EXPERIENCED, GOOD_AT } from "./skillList";

import styles from "./styles.module.scss";
import Image from "next/image";

export default function Skills() {
  const SkillEl = ({ title, icon }: { title: string; icon?: string }) => {
    return (
      <div className={styles.skillEl}>
        {icon && <Image src={icon} alt="skill_icon" width={48} height={48} />}
        <Typo variant="t1" color="white">
          {title}
        </Typo>
      </div>
    );
  };

  return (
    <>
      {/* opening */}
      <ContentSection className={styles.opening} id={MENU_ID["SKILLS"]}>
        <Typo variant="120px" bold color="white">
          So, What Can I Do?
        </Typo>
      </ContentSection>
      <div className={styles.skills}>
        <div className={styles.section}>
          <Typo variant="h2" color="white" bold className={styles.subTitle}>
            I'm Good At
          </Typo>
          <div className={styles.list}>
            {GOOD_AT.map((s) => (
              <SkillEl key={s.title} title={s.title} icon={s.icon} />
            ))}
          </div>
        </div>

        <div className={styles.section} style={{ marginTop: "60px" }}>
          <Typo variant="h2" color="white" bold className={styles.subTitle}>
            I've experienced
          </Typo>
          <div className={styles.list}>
            {EXPERIENCED.map((s) => (
              <SkillEl key={s.title} title={s.title} icon={s.icon} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
