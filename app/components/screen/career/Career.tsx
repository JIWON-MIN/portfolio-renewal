import Timeline from "../../core/Timeline";
import ContentSection from "../../module/ContentSection";
import styles from "./styles.module.scss";

const TIMELINE_CONTENTS = [
  { date: "2019.07 ~ 2022.08", title: "에듀플렉스 인천삼산점", desc: "중 · 고등학생 영어 · 수학 강의" },
  { date: "2019.03 ~ 2023.07", title: "숭실대학교 소프트웨어학부 졸업 (공학인증 수료)" },
  { date: "2022.04 ~ 2022.09", title: "TOEIC 920점 및 정보처리기사 취득" },
  {
    date: "2022.09 ~",
    title: "파운트 플랫폼팀 프론트엔드 엔지니어",
    desc: [
      "각종 컴포넌트 정리 및 문서화",
      "폰트 및 이미지 경량화",
      "파운트, 파운트 투자자문 홈페이지 개선",
      "내부 관리자 포털 총괄",
      "KB증권 연금, 하나증권 미니ETF, KB증권 글로벌ETF 자율주행 상품 관련 개발 및 출시",
      "파운트 브랜드사이트 1인 개발",
      "통합 어드민(console, pms), B2B용 cms 시스템 개발 참여 (Backend 업무 일부 포함)",
    ],
  },
];

export default function Career() {
  return (
    <ContentSection title="CAREER" className={styles.career}>
      <Timeline contents={TIMELINE_CONTENTS} />
    </ContentSection>
  );
}
