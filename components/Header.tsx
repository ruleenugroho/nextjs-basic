import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <h1 className={styles.title}>
        Welcome to <Link href="/">Next.js!</Link>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.tsx</code>
      </p>
    </div>
  );
}
