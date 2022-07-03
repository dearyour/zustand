import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ZustandPage from "./zustandPage";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("../mocks/browser");
  worker.start();
}
export default function Home() {
  return (
    <div className={styles.container}>
      <ZustandPage />
    </div>
  );
}
