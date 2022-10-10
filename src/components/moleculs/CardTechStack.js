const CardTechStack = (props) => {
  const { isIcon, images, title, alt, position } = props;
  return (
    <div className={`${position} tech-stack`}>
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
