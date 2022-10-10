import React from "react";
import {
  Collaborations,
  ProblemSolving,
  TimeManagement,
} from "../../assets/svg";
import { SkillsItems } from "../moleculs";

const Skills = () => {
  return (
    <section className="skills-contain" id="skills">
      <h1>Skills</h1>
      <div className="skill-wrap">
        <SkillsItems
          images={Collaborations}
          title="Collaborations"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, iusto!   "
        />
        <SkillsItems
          images={TimeManagement}
          title="Time Management"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, iusto!   "
          align="content-center"
        />
        <SkillsItems
          images={ProblemSolving}
          title="Problem Solving"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, iusto!"
          align="content-right"
        />
      </div>
    </section>
  );
};

export default Skills;
