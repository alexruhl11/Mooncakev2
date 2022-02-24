/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import PropTypes from 'prop-types';
import './App.css';

export default class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  updateUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  login = () => {
    if (this.state.username === '') {
      alert('enter valid username');
      return;
    }

    if (localStorage.getItem(this.state.username) !== null) {
      // user already exists
      alert(localStorage.getItem(this.state.username));
    } else {
      localStorage.setItem(this.state.username, '0');
    }
    console.log(this.state.username);
  };

  render() {
    return (
      <div className="Login">
        <Form>
          <Form.Group size="user" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              autoFocus
              onChange={this.updateUsername}
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
