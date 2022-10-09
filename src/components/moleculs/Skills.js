const Skills = (props) => {
  const { images, title, description, align } = props;
  return (
    <div className="skill-wrapper">
      <div className="skill-ilustrations">
        <img src={images} alt="" />
      </div>
      <div className={`${align} desk-wrapper`}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Skills;
