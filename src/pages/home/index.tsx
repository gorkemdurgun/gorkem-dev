import { NextPage } from "next";
import { Ubuntu } from "@next/font/google";

import MainContainer from "@/containers/MainContainer";

import styles from "./index.module.css";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "500" });

const PageOne: NextPage = () => {
    return (
        <div className={styles.pageOne}>
            <h1>Page One</h1>
        </div>
    );
};

const HomePage: NextPage = () => {
  return (
    <MainContainer>
        <PageOne />
    </MainContainer>
  );
};

export default HomePage;
