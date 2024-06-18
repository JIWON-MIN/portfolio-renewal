import Image from "next/image";
import Typo from "../../core/Typo";
import styles from "./styles.module.scss";
import MJW from "../../assets/mjw_202404.jpeg";
import ContentSection from "../../module/ContentSection";
import { MENU_ID } from "../../constant/common";

export default function About() {
  return (
    <ContentSection className={styles.about} id={MENU_ID["ABOUT"]}>
      <div className={styles.textBox}>
        <Typo variant="60px" bold color="white">
          ABOUT ME
        </Typo>
        <Typo variant="t2" color="white" style={{ marginTop: "40px" }}>
          “개발자와 사용자 모두가 행복한 웹을 만들기 위해 노력 중인,
          <br />
          프론트엔드 개발자 민지원입니다.”
        </Typo>
        <Typo variant="caption1" color="white" style={{ marginTop: "18px", lineHeight: "30px" }}>
          학사 과정 중 C, C++, Java, Python 등의 언어와 함께 데이터베이스, 소프트웨어 공학, 운영체제, 알고리즘, 인공지능
          등의 과목을 수강하며 기초를 다졌습니다.
          <br />
          이후 웹 개발에 관심이 생겨 2021년 경 부터 다양한 프로젝트에 프론트엔드 개발자로 참여하였고, 2022년 9월부터
          파운트 플랫폼 팀에서 프론트엔드 개발자로 근무하고 있으며, NextJS, ReactJS, TypeScript, SASS, GraphQL 등을
          자유롭게 활용할 수 있습니다.
          <br />
          <br />
          혁신적인 사용자 경험을 이끄는 풀스택 개발자를 향해 최선을 다하겠습니다 :)
        </Typo>
      </div>
      <Image src={MJW} width={300} alt="mjw" />
    </ContentSection>
  );
}
