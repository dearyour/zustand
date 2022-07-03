import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ZustandPage from "./zustandPage";

//이 부분은 처음에 npm run dev 할때 주석하고
// 서버가 켜지면 그때 주석을 풀러주자
// if (process.env.NODE_ENV === "development") {
//   const { worker } = require("../mocks/browser");
//   worker.start();
// }
/////////////////////////////////////////////////

export default function Home() {
  return (
    <div className={styles.container}>
      <ZustandPage />
    </div>
  );
}
