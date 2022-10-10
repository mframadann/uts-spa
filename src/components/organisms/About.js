import { AboutIlustration } from "../../assets/svg";

const About = () => {
  return (
    <section id="about" className="about-contain">
      <div className="about-wrapper">
        <div className="about-ilustration">
          <img src={AboutIlustration} alt="about" />
        </div>
        <div className="about-description">
          <h1>About</h1>
          <p>
            I am an informatics engineering student at one of the campuses in
            cirebon. I starting to focus on programming, especially in the field
            of backend developers since the end of 2021 and I also have
            intermediate skills in the field of frontend developers
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
