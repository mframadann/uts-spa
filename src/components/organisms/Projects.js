import React from "react";
import { Expressjs, Laptop, MongoDB, Nodejs, Reactjs } from "../../assets/svg";
import { CardProject } from "../moleculs";

const Projects = () => {
  const icons = [
    {
      name: Nodejs,
      alt: "nodejs",
    },
    {
      name: Reactjs,
      alt: "reactjs",
    },
    {
      name: Expressjs,
      alt: "expressjs",
    },
    {
      name: MongoDB,
      alt: "mongodb",
    },
  ];
  return (
    <section className="projects-section" id="projects">
      <h1 className="title">Projects</h1>
      <div className="projects-contain">
        <CardProject
          image={Laptop}
          icons={icons}
          alt="images"
          title="Example projects"
        />
        <CardProject
          image={Laptop}
          icons={icons}
          alt="images"
          title="Example projects"
        />
        <CardProject
          image={Laptop}
          icons={icons}
          alt="images"
          title="Example projects"
        />
        <CardProject
          image={Laptop}
          icons={icons}
          alt="images"
          title="Example projects"
        />
        <CardProject
          image={Laptop}
          icons={icons}
          alt="images"
          title="Example projects"
        />
        <CardProject
          image={Laptop}
          icons={icons}
          alt="images"
          title="Example projects"
        />
      </div>
    </section>
  );
};

export default Projects;
