import Board from "./components/Board";
import FirstPlayerControls from "./components/FirstPlayerControls";
import GameTrackControls from "./components/GameTrackControls";
import { X_GOES_FIRST } from "./js/utilities";

import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [players, setPlayers] = useState(X_GOES_FIRST);
  const [history, setHistory] = useState([]);
  const [workingHistory, setWorkingHistory] = useState([]);

  const isPresentState = workingHistory.length === history.length;

  const onSquareClick = (index) => {
    setHistory((h) => h.concat([index]));
  };

  useEffect(() => {
    setWorkingHistory(history);
  }, [history]);

  const goBackward = () => {
    setWorkingHistory((oldHistory) => {
      const newHistory = oldHistory.concat();
      newHistory.pop();
      return newHistory;
    });
  };

  const goForward = () => {
    const nextIndex = workingHistory.length;

    setWorkingHistory((oldHistory) => {
      const newHistory = oldHistory.concat();
      newHistory.push(history[nextIndex]);
      return newHistory;
    });
  };

  return (
    <div className="App">
      <div className="controls">
        {workingHistory.length ? (
          <GameTrackControls
            history={workingHistory}
            isPresentState={isPresentState}
            goBackward={goBackward}
            goForward={goForward}
          />
        ) : (
          <FirstPlayerControls players={players} setPlayers={setPlayers} />
        )}
      </div>
      <Board
        history={workingHistory}
        players={players}
        isPresentState={isPresentState}
        onSquareClick={onSquareClick}
      />
    </div>
  );
}

export default App;
