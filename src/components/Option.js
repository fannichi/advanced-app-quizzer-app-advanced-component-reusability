function Option({ question, answer, dispatch }) {
  const isAnswer = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? 'answer' : ''} ${
            isAnswer
              ? index === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          }`}
          key={option}
          disabled={answer !== null}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
        >
          {option}
          {isAnswer && index === question.correctOption && (
            <span style={{ float: 'right' }}>✔️</span>
          )}
          {isAnswer && index !== question.correctOption && (
            <span style={{ float: 'right' }}>✖️</span>
          )}
        </button>
      ))}
    </div>
  );
}

export default Option;
