import Square from "./Square";

import { generateLabels, generateWinnerFlags } from "../js/utilities";

const Board = (props) => {
  const labels = generateLabels(props.players, props.history);
  const winnerFlags = generateWinnerFlags(labels);

  return (
    <ul>
      {labels.map((label, index) => (
        <Square
          key={index}
          label={label}
          isWinner={winnerFlags[index]}
          isPresentState={props.isPresentState}
          onClick={() => props.onSquareClick(index)}
        />
      ))}
    </ul>
  );
};

export default Board;
