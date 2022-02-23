/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/static-property-placement */
/* eslint-disable import/no-extraneous-dependencies */
import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import './App.css';

export default class Quiz extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      question: [],
      score: 0,
      selectedAnswer: '',
    };
  }

  componentDidMount() {
    this.setState({ question: this.props.questionList[Math.floor(Math.random() * 12)], score: 0, selectedAnswer: '' });
  }

  handleSubmit = () => {
    if (this.state.selectedAnswer === this.state.question.correct) {
      this.setState((prevstate) => ({ score: prevstate.score + 1 }));
    }
    this.setState({ question: this.props.questionList[Math.floor(Math.random() * 12)] });
  };

  handleChange = (e) => {
    this.setState({ selectedAnswer: e.target.id });
  };

  render() {
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
              {`Current Score: ${this.state.score}`}
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
        <img className="image" src={this.state.question.img} alt="Celebrity" />
        <form>
          <p>Your Answer</p>
          <label className="container">
            {this.state.question.option1}
            <input type="radio" name="ans" id="option1" onChange={this.handleChange} />
            <span className="checkmark" />
          </label>
          <label className="container">
            {this.state.question.option2}
            <input type="radio" name="ans" id="option2" onChange={this.handleChange} />
            <span className="checkmark" />
          </label>
          <label className="container">
            {this.state.question.option3}
            <input type="radio" name="ans" id="option3" onChange={this.handleChange} />
            <span className="checkmark" />
          </label>
          <label className="container">
            {this.state.question.option4}
            <input type="radio" name="ans" id="option4" onChange={this.handleChange} />
            <span className="checkmark" />
          </label>
        </form>
        <button type="submit" onClick={this.handleSubmit}>submit</button>
      </div>

    );
  }
}
