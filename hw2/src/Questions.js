/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import React from 'react';

function Questions({ questionList }) {
  // pick a question
  const question = questionList[Math.floor(Math.random() * 10) % 5];

  return (
    <div>
      <img src={question.img} alt="Celebrity" />
      <form>
        <p>Your Answer</p>
        <div>
          <label>
            {question.option1}
            <input
              type="radio"
              id="ans1"
              name="ans"
              value={question.option1}
            />
          </label>
          <label>
            {question.option2}
            <input
              type="radio"
              id="ans2"
              name="ans"
              value={question.option2}
            />
          </label>
          <label>
            {question.option3}
            <input
              type="radio"
              id="ans3"
              name="ans"
              value={question.option3}
            />
          </label>
          <label>
            {question.option4}
            <input
              type="radio"
              id="ans4"
              name="ans"
              value={question.option4}
            />
          </label>
        </div>
        <button type="submit">Submit </button>
      </form>
    </div>
  );
}

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

export default Questions;
