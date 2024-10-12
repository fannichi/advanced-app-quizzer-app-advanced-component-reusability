function FinishScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const pct = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of{' '}
        <strong>{maxPossiblePoints}</strong> ({Math.ceil(pct)}%) points!
      </p>
      <p className="highscore">
        (High Score: <strong>{highScore} points</strong>)
      </p>
      <div className="finish">
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: 'restart' })}
        >
          Retake quiz
        </button>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: 'newQuiz' })}
        >
          Quizzes page
        </button>
      </div>
    </>
  );
}

export default FinishScreen;
