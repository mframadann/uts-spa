import { AboutIlustration } from "../../assets/svg";

const About = () => {
  return (
    <section id="about" className="about-contain">
      <div className="about-wrapper">
        <div className="about-ilustration">
          <img src={AboutIlustration} alt="" />
        </div>
        <div className="about-description">
          <h1>About</h1>
          <p>
            making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
