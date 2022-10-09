const SocialMedia = (props) => {
  const { dataIcon, alt } = props;
  return (
    <div className="icon-shape">
      <img src={dataIcon} alt={alt} />
    </div>
  );
};

export default SocialMedia;
