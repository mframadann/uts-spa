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
          description="I have 10 month collaboration experience in alphadev and 5 month in PT.Litedex digital indonesia"
        />
        <SkillsItems
          images={TimeManagement}
          title="Time Management"
          description="As a developer of course I can manage my time well. either in terms of work or personal affairs."
          align="content-center"
        />
        <SkillsItems
          images={ProblemSolving}
          title="Problem Solving"
          description="As a back end developer, I have a pretty good problem solving in overcoming bugs, errors or flow from the application/web that I build"
          align="content-right"
        />
      </div>
    </section>
  );
};

export default Skills;
