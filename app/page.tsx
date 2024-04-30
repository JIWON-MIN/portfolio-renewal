import Opening from "./components/screen/opening/Opening";
import LandingFadeOut from "./components/screen/landing/LandingFadeOut";
import SparklingBackground from "./components/module/SparklingBackground";
import About from "./components/screen/about/About";

export default function Home() {
  return (
    <>
      <Opening />
      <LandingFadeOut />
      <SparklingBackground>
        <About />
      </SparklingBackground>
    </>
  );
}
