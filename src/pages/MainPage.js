import {
  AboutSection,
  ContackSection,
  Footer,
  Hero,
  Navbar,
  ProjectSection,
  SkillSection,
} from "../components";
import { MainLayout } from "../layouts";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <MainLayout>
        <Hero />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContackSection />
        <Footer />
      </MainLayout>
    </>
  );
};

export default MainPage;
