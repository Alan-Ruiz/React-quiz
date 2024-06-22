import { useState, useCallback } from 'react';
import QUESTIONS from '../questions.js';
import quizCompleteImage from '../assets/quiz-complete.png'
import Question from './Question.jsx';



export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUsersAnswers) => {
      return [...prevUsersAnswers, selectedAnswer]
    });
  }, []);
  
  const handleSkipAnswer = useCallback(() => {
    () => handleSelectAnswer(null), 
    [handleSelectAnswer]
  });

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImage} alt="Image for completed quiz" />
        <h2>Quiz completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}