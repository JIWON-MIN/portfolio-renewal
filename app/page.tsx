import Landing from "./components/screen/landing/Landing";
import Opening from "./components/screen/opening/Opening";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Opening />
      <Landing />
    </main>
  );
}
