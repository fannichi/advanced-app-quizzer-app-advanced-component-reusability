import correct from '../sounds/correct.wav';
import wrong from '../sounds/wrong.mp3';

const correctChoice = new Audio(correct);
const wrongChoice = new Audio(wrong);

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
          onClick={() => {
            dispatch({ type: 'newAnswer', payload: index });
            if (index === question.correctOption) {
              correctChoice.play();
            } else {
              wrongChoice.play();
            }
          }}
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
