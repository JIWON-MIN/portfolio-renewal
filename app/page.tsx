import Opening from "./components/screen/opening/Opening";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Opening />
    </main>
  );
}
