import Image from "next/image";
import Typo from "../../core/Typo";
import styles from "./styles.module.scss";
import MJW from "../../assets/mjw_202404.jpeg";
import ContentSection from "../../module/ContentSection";

export default function About() {
  return (
    <ContentSection className={styles.about}>
      <div className={styles.textBox}>
        <Typo variant="60px" bold color="white">
          ABOUT ME
        </Typo>
        <Typo variant="t2" color="white" style={{ marginTop: "40px" }}>
          “개발자와 사용자 모두가 행복한 웹을 만들기 위해 노력 중인,
          <br />
          프론트엔드 개발자 민지원입니다.”
        </Typo>
        <Typo variant="caption1" color="white" style={{ marginTop: "18px" }}>
          전공을 통해 데이터 베이스, 소프트웨어 공학, 운영체제, 알고리즘, 인공지능 등을 배웠습니다. 그러던 중 주변
          분들을 통해 웹 개발에 관심이 생겨 프론트엔드 개발자로 팀 프로젝트를 진행하게 되었고, 큰 매력을 느꼈습니다.
          <br />
          학사 과정 중 HTML, CSS, JavaScript로 시작해 ReactJS와 git을 스스로 학습하여 개발에 참여하였고, 이후
          TypeScript와 Nextjs, GraphQL 등을 공부하며 2022년 9월부터 파운트 플랫폼팀에서 프론트엔드 개발자로 근무하고
          있습니다. 최근에는 ReactNative에 관심을 가지고 앱 관련 이슈 처리에 참여하려고 노력하고 있습니다.
          <br />
          풀스택까지 최선을 다해 달려 나가겠습니다!
        </Typo>
      </div>
      <Image src={MJW} width={300} alt="mjw" />
    </ContentSection>
  );
}
