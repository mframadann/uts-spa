const CardProjects = (props) => {
  const { image, alt, icons, link, title } = props;
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          deserunt provident! Quisquam ratione necessitatibus earum?
        </p>
        <a href={link}>View project 🡢</a>
      </div>
    </div>
  );
};

export default CardProjects;
