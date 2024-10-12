import { useEffect, useState } from 'react';

function Timer({ dispatch }) {
  const [secondsRemaining, setSecondsRemaining] = useState(420);

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const timerId = setInterval(() => {
      setSecondsRemaining(prevSeconds => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          return 0; // Set to 0, but avoid dispatching in the interval
        }
      });
    }, 1000);

    // Cleanup the interval when component unmounts
    return () => clearInterval(timerId);
  }, []);

  // Effect to handle dispatch when the time reaches 0
  useEffect(() => {
    if (secondsRemaining === 0) {
      dispatch({ type: 'finishQuiz' });
    }
  }, [secondsRemaining, dispatch]);

  return (
    <div className="timer">
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}

export default Timer;
