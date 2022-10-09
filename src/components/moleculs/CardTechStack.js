const CardTechStack = (props) => {
  const { isIcon, images, title, alt } = props;
  return (
    <div className="tech-stack">
      {isIcon ? (
        <>
          <img src={images} alt={alt} />
        </>
      ) : (
        <>
          <img src={images} alt={alt} />
          <p>{title}</p>
        </>
      )}
    </div>
  );
};

export default CardTechStack;
