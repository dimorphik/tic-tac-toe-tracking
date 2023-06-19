const X_GOES_FIRST = ["X", "O"];
const O_GOES_FIRST = ["O", "X"];

const WINNING_PATHS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const createBoxArray = () => Array.apply(null, Array(9)).map(() => undefined);

const generateLabels = (players, history) => {
  const labels = history.reduce((list, squareIndex, historyIndex) => {
    const label = players[historyIndex % 2];
    const newList = list.concat();

    newList[squareIndex] = label;
    return newList;
  }, createBoxArray());

  return labels;
};

const doesPathWin = (playersOnPath) => {
  const playerExists = !!playersOnPath[0];
  const playerOwnsPath =
    playersOnPath[0] === playersOnPath[1] && playersOnPath[1] === playersOnPath[2];
  const doesPathWin = playerExists && playerOwnsPath;

  return doesPathWin;
};

const findWinningPath = (labels) => {
  const winningPath =
    WINNING_PATHS.find((path) => {
      const playersOnPath = path.map((squareIndex) => labels[squareIndex]);
      const isWinningPath = doesPathWin(playersOnPath);

      return isWinningPath;
    }) || [];

  return winningPath;
};

const generateWinnerFlags = (labels) => {
  const winningPath = findWinningPath(labels);
  const winnerFlags = createBoxArray();

  winningPath.forEach((squareIndex) => (winnerFlags[squareIndex] = true));

  return winnerFlags;
};

export { X_GOES_FIRST, O_GOES_FIRST, generateLabels, generateWinnerFlags };
