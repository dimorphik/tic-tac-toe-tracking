const GameTrackControls = (props) => {
  return (
    <>
      <div className="prompt">Use these controls to move back and forth in the game history:</div>
      <button
        id="btnBack"
        className="track-btn"
        onClick={props.goBackward}
        disabled={props.history.length < 2}>
        Go Back
      </button>
      <button
        id="btnForward"
        className="track-btn"
        onClick={props.goForward}
        disabled={props.isPresentState}>
        Go Forward
      </button>
    </>
  );
};

export default GameTrackControls;
