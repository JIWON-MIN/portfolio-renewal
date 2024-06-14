import Typo from "../../core/Typo";
import ContentSection from "../../module/ContentSection";
import WorksOpening from "./WorksOpening";

import DokitImage from "../../assets/dokit.png";
import CosmosImage from "../../assets/cosmos.png";
import BrandsiteImage from "../../assets/brandsite.png";
import FoppyImage from "../../assets/foppy.png";
import PortfolioImage from "../../assets/portfolio.png";
import Work from "./Work";

const WORK_LIST = [
  {
    title: "Dokit",
    date: "2021.05 ~ 2021.06",
    columnTitle: false,
    image: DokitImage,
    content: (
      <>
        Dokit은 Todo와 Bucket List의 합성어로, 친구 및 팀 목록을 관리하며 개인 용 일별+월별 페이지와 팀 용 캘린더
        페이지를 제공하여 모두의 효율적인 일정관리를 돕고, 친구 목록에 있는 사용자의 페이지로 접근해 공개된 일정을
        확인하고 방명록을 남길 수 있도록 하는 <strong>SNS형 일정 관리 웹 플랫폼</strong>입니다.
        <br />
        <br />
        프론트엔드 개발자로서 참여한 첫 번째 프로젝트로, <strong>React, styled-components, git, Figma</strong> 등을
        사용하여 아이디어 산출 및 구체화, UI 구성을 포함한 친구 및 팀 검색, 추가, 삭제, 즐겨찾기 관련 프론트엔드 기능을
        전담하여 개발했습니다.
      </>
    ),
  },
  {
    title: "COSMOS",
    date: "2021.11 ~ 2021.12",
    columnTitle: false,
    image: CosmosImage,
    content: (
      <>
        COSMOS는 Catch Our Sound, Make Our Script의 줄임말로, <strong>구글 STT API</strong>를 활용하여 오디오 파일을
        업로드하면 스크립트를 출력해주고, 별명 및 날짜를 포함한 파일 목록 관리 및 스크립트 관련 요약, 검색어 서치, 번역
        기능 등을 제공하여 <strong>문서화된 음성을 편리하게 다룰 수 있도록 돕는 웹 사이트</strong> 입니다.
        <br />
        <br />
        아이디어 구체화 및 설계 제안, UI 구성에 참여하였으며 <strong>React, styled-components, git, Figma</strong> 등을
        사용하여 프론트엔드의 대부분인 STT(Speech To Text), 요약, 번역, 오디오 파일 관련 서버 통신 및 출력 기능을
        전담하여 개발했습니다.
      </>
    ),
  },
  {
    title: "Fount Brandsite",
    date: "2023.03 ~ 2023.04",
    columnTitle: true,
    image: BrandsiteImage,
    content: (
      <>
        Fount Brandsite는 재직 중인 파운트 내에서 1인 개발자로 기획·디자인 담당자 분들과 협업하여 진행한 프로젝트로,
        기술스택 관련 결정부터 다양한 애니메이션의 구현까지 스스로 작업을 진행하였습니다.
        <br />
        <br />
        기존 web view 구현에 활용해왔던 <strong>Next, Typescript, Sass, Lottie</strong> 등을 기반으로 사내 프로젝트에
        Next13을 최초로 도입하였으며 Gsap를 활용한 스크롤 기반 애니메이션을 구현하였습니다.
      </>
    ),
  },
  {
    title: "Foppy",
    date: "2023.03 ~ 2023.11",
    columnTitle: true,
    image: FoppyImage,
    content: (
      <>
        Foppy(For Our Puppy)는 <strong>컴퓨터 비전 기술을 활용한 비문 인식 및 유기견 관리 애플리케이션</strong>입니다.
        개는 코의 주름인 비문으로 개체 식별이 가능하다는 점과 함께 딥러닝 및 컴퓨터 비전 기술을 적절히 활용하여 정확한
        비문 식별과 빠른 유기견 확인 서비스를 제공하였으며, 실시간 채팅 등의 부가적인 기능을 통해 유기견 발견 및 실종
        신고에 도움을 주고자 하였습니다. 아이디어 구체화 및 설계 제안, UI 구성에 참여하였으며 
        <strong>Next, Typescript, Sass</strong>
         등을 사용하여 로그인, 정보 등록 및 수정, 유기견 등록 및 비문 확인 등과 관련된 페이지를 전담하여 개발하였습니다.
        <br />
        <br />
        FOPPY는 숭실대학교 IT대학이 주관한 <strong>"2023년도 IT대학 소프트웨어 공모전"</strong>과 숭실대학교가 주관한{" "}
        <strong>"제13회 숭실 캡스톤디자인 경진대회"</strong>에서 2번의 수상을 거친 후 학교 대표로 선발되어, 한양대학교
        ERICA에서 주관한 <strong>“2023 지능형 로봇 컨소시엄 창의적 종합설계 경진대회”</strong>에서 좋은 결과를 가져올 수
        있었습니다.
      </>
    ),
  },
  {
    title: "Portfolio",
    date: "2024.03 ~",
    columnTitle: true,
    image: PortfolioImage,
    content: (
      <>
        현재 페이지인 Portfolio 프로젝트는 2022년 1월 React와 Styled-components만으로 작업했던 지난 포트폴리오
        페이지(https://mjw-portfolio.netlify.app/)에 부족함을 느껴 Next13과 Typescript 등의 스택을 추가하고 mui, scss
        등을 새로이 활용하여 개발하였습니다. Figma판 디자인부터 혼자 작업하여 미숙한 부분은 꾸준히 유지보수 중에
        있습니다!
      </>
    ),
  },
];

export default function Works() {
  return (
    <div>
      <WorksOpening />
      {WORK_LIST.map((work) => (
        <Work work={work} key={work.title} />
      ))}
    </div>
  );
}
