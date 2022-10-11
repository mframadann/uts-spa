import { ArrowRight, Encrypted } from "../../assets/svg";

const CardProjects = (props) => {
  const { image, alt, icons, link, title, description } = props;
  return (
    <div className="projects-card">
      <div className="project-image-box">
        <img src={image} alt={alt} />
      </div>
      <div className="content-project">
        <div className="project-name">
          <h2>{title}</h2>
        </div>
        <div className="tech-stack-label">
          {icons.map((icon, i) => (
            <img src={icon.name} alt={icon.alt} key={i} />
          ))}
        </div>
        <p>{description}</p>
        {link == "private" ? (
          <a href="#projects">
            Private project <img src={Encrypted} alt="private-image" />
          </a>
        ) : (
          <a href={link} target="_blank">
            View project
            <img src={ArrowRight} alt="see" />
          </a>
        )}
      </div>
    </div>
  );
};

export default CardProjects;
