import { X_GOES_FIRST, O_GOES_FIRST } from "../js/utilities";

const FirstPlayerControls = (props) => {
  return (
    <>
      <div className="prompt">Which player should go first?</div>
      <button
        id="btnX"
        className={`${props.players[0] === "X" ? "selected" : ""}`}
        onClick={() => props.setPlayers(X_GOES_FIRST)}>
        X
      </button>
      <button
        id="btnO"
        className={`${props.players[0] === "O" ? "selected" : ""}`}
        onClick={() => props.setPlayers(O_GOES_FIRST)}>
        O
      </button>
    </>
  );
};

export default FirstPlayerControls;
