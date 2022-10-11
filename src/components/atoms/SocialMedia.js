const SocialMedia = (props) => {
  const { dataIcon, alt, link } = props;

  const handleClick = () => {
    window.open(`${link}`, "_blank");
  };
  return (
    <div className="icon-shape">
      <img src={dataIcon} alt={alt} onClick={() => handleClick()} />
    </div>
  );
};

export default SocialMedia;
