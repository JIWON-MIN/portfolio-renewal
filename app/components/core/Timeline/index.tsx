import MuiTimeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import styles from "./styles.module.scss";
import Typo from "../Typo";

interface ContentEl {
  date: string;
  title: string;
  desc?: string | string[];
}

interface CustomedTimelineProps {
  contents: ContentEl[];
}

export default function Timeline({ contents }: CustomedTimelineProps) {
  const renderContent = (content: ContentEl) => {
    const { date, title, desc } = content;

    return (
      <div className={styles.contentEl}>
        <div className={styles.date}>
          <Typo variant="t3" bold color="white">
            {date}
          </Typo>
        </div>
        <div className={styles.text}>
          <Typo variant="caption1" bold color="white" className={styles.sub}>
            {title}
          </Typo>
          {typeof desc == "string" && (
            <Typo variant="16px" color="white" className={styles.desc}>
              {desc}
            </Typo>
          )}
          {typeof desc == "object" &&
            desc.map((descEl) => (
              <Typo variant="16px" color="white" key={descEl.slice(0, 10)} className={styles.desc}>
                {descEl}
              </Typo>
            ))}
        </div>
      </div>
    );
  };

  return (
    <MuiTimeline className={styles.timeline} sx={{ ".MuiTimelineItem-root::before": { display: "none" } }}>
      {contents.map((content) => {
        return (
          <TimelineItem key={content.date}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{renderContent(content)}</TimelineContent>
          </TimelineItem>
        );
      })}
    </MuiTimeline>
  );
}
