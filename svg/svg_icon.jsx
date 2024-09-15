const SvgIcon = ({ id, width, height, ...props }) => {
  const style = {
    "--svg-stroke-color": props.color,
    "--svg-fill-color": props.color,
  };

  return (
    <svg width={width} height={height} style={style} {...props}>
      <use href={`#${id}`} />
    </svg>
  );
};

export default SvgIcon;
