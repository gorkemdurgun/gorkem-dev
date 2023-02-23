import { NextPage } from "next";

import MainContainer from "@/containers/MainContainer";

import AboutPage from "./partials/About";
import ExperiencePage from "./partials/Experience";
import ContactPage from "./partials/Contact";

const HomePage: NextPage = () => {
  return (
    <MainContainer>
      <AboutPage />
      <ExperiencePage />
      <ContactPage />
    </MainContainer>
  );
};

export default HomePage;
