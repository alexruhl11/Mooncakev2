/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line import/no-extraneous-dependencies
// import PropTypes from 'prop-types';
import React from 'react';
import './App.css';

function Questions({ questionList }) {
  // pick a question
  const question = questionList[Math.floor(Math.random() * 12)];
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
            Current Score
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
        <div className="buttons">
          <button className="action_button" type="button">{question.option1}</button>
          <button className="action_button" type="button">{question.option2}</button>
        </div>
        <div className="buttons">
          <button className="action_button" type="button">{question.option3}</button>
          <button className="action_button" type="button">{question.option4}</button>
        </div>
        <button type="submit">Submit </button>
      </form>
    </div>
  );
}

/*
Questions.defaultProps = {
  questionList: null,
};

Questions.propTypes = {
  questionList: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string(),
    option1: PropTypes.string(),
    option2: PropTypes.string(),
    option3: PropTypes.string(),
    option4: PropTypes.string(),
  })),
};
*/
export default Questions;
