const Button = ({ title, style }) => {
  return (
    <a href='#' className={style}>
      {title}
    </a>
  );
};

export default Button;
