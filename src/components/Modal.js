import React, { useState } from 'react';
import './Modal.css';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className="open-modal-btn" onClick={handleOpenModal}>
        Show Info About Quiz
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close-btn" onClick={handleCloseModal}>
              X
            </button>
            <div>
              <p>
                This quiz application helps users test and expand their
                knowledge across multiple programming languages and frameworks
                such as React, JavaScript, Python, Java, C#, C++, HTML, CSS, and
                Angular. It features an intuitive interface where users can
                select their desired topic and take quizzes tailored to that
                technology. The app tracks user progress with immediate feedback
                and a timer to challenge users...
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
