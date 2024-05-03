import Typo from "../../core/Typo";
import ContentSection from "../../module/ContentSection";

export default function Strength() {
  return (
    <ContentSection title="MY GOAL">
      <Typo variant="t3" color="white" style={{ lineHeight: 2 }}>
        저의 MBTI인 ISTJ는 강한 집중력과 책임감, 신중한 일처리의 특징을 가지며,
        <br />
        꼼꼼하고 열정이 넘치는 성격 또한 저의 장점이라고 자부할 수 있습니다.
        <br />
        초반에는 다소 내향적일 수 있지만, 조직에 유연성 있게 적응하기 위해 항상 노력하고, <br />
        계획표에 맞춰 주어진 일을 미루지 않고 정확하게 분석하여 실행함과 더불어
        <br />
        빠른 학습 속도를 갖추고 있습니다.
      </Typo>
    </ContentSection>
  );
}
