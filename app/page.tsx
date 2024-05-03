import Opening from "./components/screen/opening/Opening";
import LandingFadeOut from "./components/screen/landing/LandingFadeOut";
import SparklingBackground from "./components/module/SparklingBackground";
import About from "./components/screen/about/About";
import Career from "./components/screen/career/Career";
import Strength from "./components/screen/strength/Strength";
import Goal from "./components/screen/goal/Goal";

export default function Home() {
  return (
    <>
      {/* 개발 편의를 위한 임시 주석 처리 */}
      <Opening />
      <LandingFadeOut />
      <SparklingBackground>
        <About />
        <Career />
        <Strength />
        <Goal />
      </SparklingBackground>
    </>
  );
}
