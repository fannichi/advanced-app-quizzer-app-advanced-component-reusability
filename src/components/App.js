import { useReducer } from 'react';
import Error from './Error';
import FinishScreen from './FinishScreen';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import NextButton from './NextButton';
import Progress from './Progress';
import Question from './Question';
import StartScreen from './StartScreen';
import Timer from './Timer';
import Confetti from 'react-confetti';

const initialState = {
  questions: [],

  //possible status  loading, error, ready, active, finished
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  quizName: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'newQuiz':
      return { ...initialState, status: 'loading' };
    case 'startQuiz':
      return { ...state, status: 'ready' };
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload.data,
        status: 'active',
        quizName: action.payload.quizName,
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };

    case 'newAnswer':
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null };

    case 'finishQuiz':
      return {
        ...state,
        questions: state.questions,
        status: 'finished',
        highScore: Math.max(state.points, state.highScore),
        quizName: null,
      };

    case 'restart':
      return {
        ...initialState,
        status: 'active',
        highScore: state.highScore,
        questions: state.questions,
        quizName: state.quizName,
      };

    default:
      throw new Error('Unhandled action type');
  }
}

function App() {
  const [
    {
      questions,
      status,
      index,
      answer,
      points,
      highScore,
      secondsRemaining,
      quizName,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (acc, curr) => acc + curr.points,
    0
  );

  return (
    <div className="app">
      <Header />
      <Main>
        {status === 'loading' && (
          <StartScreen
            numQuestions={numQuestions}
            dispatch={dispatch}
            quizName={quizName}
          />
        )}
        {status === 'error' && <Error />}
        {status === 'active' && (
          <>
            <Progress
              numQuestions={numQuestions}
              index={index}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
              quizName={quizName}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            ></Question>
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
              />
            </Footer>
          </>
        )}
        {status === 'finished' && (
          <>
            <FinishScreen
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              highScore={highScore}
              dispatch={dispatch}
            />
            {points > 200 && (
              <Confetti
                numberOfPieces={300}
                gravity={0.2}
                colors={['#ff6b6b', '#feca57', '#54a0ff', '#00d2d3']}
              />
            )}
          </>
        )}
      </Main>
      <em>By youssef fannichi&copy;</em>
    </div>
  );
}

export default App;
