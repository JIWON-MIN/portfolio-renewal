import Image, { StaticImageData } from "next/image";
import Typo from "../../core/Typo";
import ContentSection from "../../module/ContentSection";
import styles from "./styles.module.scss";

interface Work {
  title: string;
  date: string;
  columnTitle: boolean;
  image: StaticImageData;
  content: React.ReactElement;
}

interface WorkProps {
  work: Work;
}

export default function Work({ work }: WorkProps) {
  const { title, date, columnTitle, image, content } = work;

  return (
    <ContentSection className={styles.work}>
      <div>
        {columnTitle ? (
          <div className={styles.columnTitle}>
            <Typo variant="caption1" color="white">
              {date}
            </Typo>
            <Typo variant="60px" color="white" bold>
              {title}
            </Typo>
          </div>
        ) : (
          <div className={styles.rowTitle}>
            <Typo variant="60px" color="white" bold>
              {title}
            </Typo>

            <Typo variant="caption1" color="white" style={{ margin: "20px" }}>
              {date}
            </Typo>
          </div>
        )}
        <Image src={image} width={439} alt="work" />
      </div>
      <Typo variant="caption1" color="white" style={{ width: "430px", lineHeight: 1.8 }}>
        {content}
      </Typo>
    </ContentSection>
  );
}
