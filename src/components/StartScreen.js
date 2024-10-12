import { useState } from 'react';

function StartScreen({ numQuestions, dispatch }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleQuizSelection = quizName => {
    async function fetchQuizData() {
      try {
        const response = await fetch(
          process.env.NODE_ENV === 'production'
            ? `/${quizName}`
            : `http://localhost:5000/${quizName}`
        );
        const data = await response.json();
        dispatch({ type: 'dataReceived', payload: { data, quizName } });
      } catch (error) {
        dispatch({ type: 'dataFailed' });
      }
    }

    fetchQuizData(); // Fetch the quiz data after button click
  };

  return (
    <>
      <div className="start">
        <h2>Test your theory knowledge in programming languages</h2>
        <h4>chose a programming language to test your skills</h4>
      </div>

      <div className="button-container">
        <button
          className="tech-btn react-btn"
          onClick={() => handleQuizSelection('react')}
        >
          <div className="tech-logo-container">
            <img
              src="/logos/logo192.png"
              alt="React Logo"
              className="tech-logo"
            />
          </div>
          React
        </button>
        <button
          className="tech-btn js-btn"
          onClick={() => handleQuizSelection('javascript')}
        >
          <div className="tech-logo-container">
            <img
              src="/logos/javascript.png"
              alt="JavaScript Logo"
              className="tech-logo"
            />
          </div>
          JavaScript
        </button>
        <button
          className="tech-btn python-btn"
          onClick={() => handleQuizSelection('python')}
        >
          <div className="tech-logo-container">
            <img
              src="/logos/python.png"
              alt="Python Logo"
              className="tech-logo"
            />
          </div>
          Python
        </button>
        <button
          className="tech-btn java-btn"
          onClick={() => handleQuizSelection('java')}
        >
          <div className="tech-logo-container">
            <img src="/logos/java.png" alt="Java Logo" className="tech-logo" />
          </div>
          Java
        </button>
        <button
          className="tech-btn csharp-btn"
          onClick={() => handleQuizSelection('csharp')}
        >
          <div className="tech-logo-container">
            <img src="/logos/csharp.png" alt="C# Logo" className="tech-logo" />
          </div>
          C#
        </button>
        <button
          className="tech-btn cpp-btn"
          onClick={() => handleQuizSelection('cpp')}
        >
          <div className="tech-logo-container">
            <img src="/logos/cpp.png" alt="C++ Logo" className="tech-logo" />
          </div>
          C++
        </button>
        <button
          className="tech-btn html-btn"
          onClick={() => handleQuizSelection('html')}
        >
          <div className="tech-logo-container">
            <img src="/logos/html.png" alt="HTML Logo" className="tech-logo" />
          </div>
          HTML
        </button>
        <button
          className="tech-btn angular-btn"
          onClick={() => handleQuizSelection('angular')}
        >
          <div className="tech-logo-container">
            <img
              src="/logos/angular.png"
              alt="Angular Logo"
              className="tech-logo"
            />
          </div>
          Angular
        </button>
        <button
          className="tech-btn css-btn"
          onClick={() => handleQuizSelection('css')}
        >
          <div className="tech-logo-container">
            <img src="/logos/css.png" alt="css Logo" className="tech-logo" />
          </div>
          CSS
        </button>
        <button className="tech-btn" onClick={handleOpenModal}>
          ABOUT QUIZZER
        </button>
        {isOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="modal-close-btn" onClick={handleCloseModal}>
                X
              </button>
              <div>
                This quiz application helps users test and expand their
                knowledge across multiple programming languages and frameworks
                such as React, JavaScript, Python, Java, C#, C++, HTML, CSS, and
                Angular. It features an intuitive interface where users can
                select their desired topic and take quizzes tailored to that
                technology. The app tracks user progress with immediate feedback
                and a timer to challenge users.
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default StartScreen;
