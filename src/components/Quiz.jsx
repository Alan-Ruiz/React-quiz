import { useState } from 'react';
import QUESTIONS from '../questions.js';
import quizCompleteImage from '../assets/quiz-complete.png'


export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  console.log(activeQuestionIndex)
  console.log(QUESTIONS.length)
  console.log(quizIsComplete)


  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUsersAnswers) => {
      return [...prevUsersAnswers, selectedAnswer]
    });
  }

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImage} alt="Image for completed quiz" />
        <h2>Quiz completed!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div className="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className='answer'>
              <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
            </li>  
          ))}
        </ul>
      </div>
    </div>
  );
}