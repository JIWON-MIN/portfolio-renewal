import { ReactNode } from "react";
import Typo from "../../core/Typo";
import styles from "./styles.module.scss";

interface ContentSectionProps {
  title?: string;
  children?: ReactNode;
  className?: string;
}

export default function ContentSection({ title, children, className }: ContentSectionProps) {
  return (
    <div className={styles.contentSection + " " + className}>
      {title ? (
        <>
          <Typo variant="60px" bold color="white" style={{ textAlign: "center" }}>
            {title}
          </Typo>
          <div className={styles.centerContent}>{children}</div>
        </>
      ) : (
        children
      )}
    </div>
  );
}
