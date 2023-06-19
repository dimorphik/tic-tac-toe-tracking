const Square = (props) => {
  const populated = !!props.label;
  const disabled = props.isPresentState ? populated : true;

  const onClick = () => {
    if (!disabled) {
      props.onClick();
    }
  };

  return (
    <li
      className={`square ${populated ? "populated" : ""} ${props.isWinner ? "winner" : ""}`}
      disabled={disabled}
      onClick={onClick}>
      {props.label || "\u00A0"}
    </li>
  );
};

export default Square;
