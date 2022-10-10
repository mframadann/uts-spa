import React from "react";
import { Hero, Navbar } from "../components";
import { MainLayout } from "../layouts";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <MainLayout>
        <Hero />
      </MainLayout>
    </>
  );
};

export default MainPage;
