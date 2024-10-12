function Progress({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
  quizName,
}) {
  return (
    <>
      <h3 style={{ textAlign: 'center', marginTop: '5rem' }}>
        You are now taking {quizName} quiz, good luck 🧑‍💻
      </h3>
      <header className="progress">
        <br />
        <p>
          <strong>Progress</strong>
        </p>
        <progress
          max={numQuestions}
          value={index + Number(answer !== null)}
        ></progress>
        <p>
          Question <strong>{index + 1}</strong>/{numQuestions}
        </p>
        <p>
          <strong>{points}</strong>/{maxPossiblePoints}
        </p>
      </header>
    </>
  );
}

export default Progress;
