import Opening from "./components/screen/opening/Opening";
import LandingFadeOut from "./components/screen/landing/LandingFadeOut";
import SparklingBackground from "./components/module/SparklingBackground";
import About from "./components/screen/about/About";
import Career from "./components/screen/career/Career";
import Strength from "./components/screen/strength/Strength";
import Goal from "./components/screen/goal/Goal";
import Works from "./components/screen/works/Works";
import ContactSizingUp from "./components/screen/contact/ContactSizingUp";
import Skills from "./components/screen/skills/Skills";

export default function Home() {
  return (
    <>
      <Opening />
      <LandingFadeOut />
      <SparklingBackground>
        <About />
        <Career />
        <Strength />
        <Goal />
        <Works />
        <Skills />
        <ContactSizingUp />
      </SparklingBackground>
    </>
  );
}
