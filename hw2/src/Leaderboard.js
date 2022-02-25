/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import PropTypes from 'prop-types';
import './App.css';

export default class Leaderboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      top10array: [],
    };
  }

  updateLeaderboard = () => {
    this.setState({ top10array: this.props.leadersList });
  };

  fetchLeaderboard = () => {
    localStorage.getItem(this.state.username) !== null)
      alert(localStorage.getItem(this.state.username));
    console.log(this.state.top10array);
  };

  render() {
    return (
      <div className="Leaderboard">
        <Form>
          <Form.Group size="user" controlId="username">
            <Form.Label>Leaderboard</Form.Label>
            <Form.Control
              autoFocus
              onChange={this.updateLeaderboard}
            />
          </Form.Group>
          <Button block size="lg" type="submit" onClick={this.login}>
            Login
          </Button>
        </Form>
      </div>
    );
  }
}
