const Button = ({ onclick, text, customClass }) => {
  return (
    <button className={customClass} onClick={onclick}>
      {text}
    </button>
  );
};

export default Button;
