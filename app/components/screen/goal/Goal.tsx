import Typo from "../../core/Typo";
import ContentSection from "../../module/ContentSection";

export default function Goal() {
  return (
    <ContentSection title="MY STRENGTH">
      <Typo variant="t3" color="white" style={{ lineHeight: 2 }}>
        현재로서는 지속적 학습과 발전을 통해 더욱 능력 있는 프론트엔드 개발자로 성장하는 것이 저의 목표입니다.
        <br />
        하지만 최종 목표는 풀스택 개발자라고 말씀드릴 수 있겠습니다.
        <br />
        그렇기 때문에 개발을 할 때에 항상 특정 분야에만 국한된 시야를 가지지 않고
        <br />
        넓은 범위를 고려 할 수 있도록 꾸준히 노력하고 있습니다.
      </Typo>
    </ContentSection>
  );
}
