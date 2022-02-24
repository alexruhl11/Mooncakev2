/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './App.css';

function Quiz(props) {
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [questionNum, setQuestionNum] = useState(0);
  const [question, setQuestion] = useState(props.questionList[Math.floor(Math.random() * 12)]);

  const handleSubmit = () => {
    if (selectedAnswer === question.correct) {
      setScore(score + 1);
    }
    setQuestionNum(questionNum + 1);
    setQuestion(props.questionList[Math.floor(Math.random() * 12)]);

    if (questionNum > 10) {
      alert('end game');
    }
  };

  const handleChange = (e) => {
    setSelectedAnswer(e.target.id);
  };

  return (
    <div>
      <div>
        <div className="box">
          <div className="text">
            Current User
          </div>
        </div>
        <div className="box">
          <div className="text">
            {`Current Score: ${score}`}
          </div>
        </div>
        <div className="box">
          <div className="text">
            User Best Score
          </div>
        </div>
      </div>
      <div>
        <div className="box2">
          <div className="text">
            Current User
          </div>
        </div>
        <div className="box2">
          <div className="text">
            Current Score
          </div>
        </div>
      </div>
      <img className="image" src={question.img} alt="Celebrity" />
      <form>
        <p>Your Answer</p>
        <label className="container">
          {question.option1}
          <input type="radio" name="ans" id="option1" onChange={handleChange} />
          <span className="checkmark" />
        </label>
        <label className="container">
          {question.option2}
          <input type="radio" name="ans" id="option2" onChange={handleChange} />
          <span className="checkmark" />
        </label>
        <label className="container">
          {question.option3}
          <input type="radio" name="ans" id="option3" onChange={handleChange} />
          <span className="checkmark" />
        </label>
        <label className="container">
          {question.option4}
          <input type="radio" name="ans" id="option4" onChange={handleChange} />
          <span className="checkmark" />
        </label>
      </form>
      <button type="submit" onClick={handleSubmit}>submit</button>
    </div>
  );
}
export default Quiz;
