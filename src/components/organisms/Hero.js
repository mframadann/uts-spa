import React from "react";
import {
  DownloadCv,
  Golang,
  HeroImage,
  MongoDB,
  Nextjs,
  Nodejs,
} from "../../assets/svg";
import { TechStack } from "../moleculs";

const Hero = () => {
  const TechstackData = [
    {
      title: "Next.js",
      isIcon: false,
      alt: "nextjs",
      position: "next-js",
      image: Nextjs,
    },
    {
      title: "MongoDB",
      isIcon: false,
      alt: "mongodb",
      position: "mongodb",
      image: MongoDB,
    },
    {
      title: "Node.js",
      isIcon: false,
      alt: "nodejs",
      position: "node-js",
      image: Nodejs,
    },
    {
      title: "Golang",
      isIcon: false,
      alt: "golang",
      position: "golang",
      image: Golang,
    },
  ];

  const handleCv = () => {
    window.open(
      "https://drive.google.com/file/d/1HRsrt5uMh4S-H-LCn6fL9fglDzPKplr0/view?usp=sharing",
      "_blank"
    );
  };

  const handleMorePortfolio = () => {
    window.open(
      "https://drive.google.com/file/d/12alsdOSwHcv9v3kEt-BFuYE_u1qeef-7/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section className="hero" id="home">
      <div className="identity">
        <h2>Hello 👋, I`am </h2>
        <div className="job-desk">
          <h1>Muhamad Firly Ramadan</h1>
          <span>Back End Developer</span>
        </div>
        <div className="simple-description">
          <p>
            I am a junior backend developer and student at one of the campuses
            in Cirebon, West Java. I like to learn about new things in my spare
            time especially in web technology and mobile apps.
          </p>
          <div className="button-wrapper">
            <button className="more" onClick={() => handleMorePortfolio()}>
              More
            </button>
            <button className="download-cv" onClick={() => handleCv()}>
              Download cv
              <img src={DownloadCv} alt="download-cv" />
            </button>
          </div>
        </div>
      </div>
      <div className="skill-image-box">
        <div className="tech-stack-box">
          {TechstackData?.map((item, i) => (
            <TechStack
              isIcon={item.isIcon}
              images={item.image}
              alt={item.alt}
              title={item.title}
              position={item.position}
              key={i}
            />
          ))}
        </div>
        <img src={HeroImage} alt="logo" />
      </div>
    </section>
  );
};

export default Hero;
