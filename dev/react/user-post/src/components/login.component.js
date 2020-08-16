import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../css/login.css';
import store from 'store';
import isLoggedIn from '../helpers/is_logged_in';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
  state = {
    username: '',
    password: '',
    error: false,
  };

  handleEmailChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  login = () => {
    const { username, password } = this.state;
    const { history } = this.props;
    this.setState({ error: false });
    if (!(username === 'admin' && password === 'admin')) {
      return this.setState({ error: true });
    }
    store.set('loggedIn', true);
    history.push('/users');
  };

  render() {
    const { error } = this.state;
    if (isLoggedIn()) {
      return <Redirect to="/users" />;
    }
    return (
      <div>
        <div className="text-center">
          <h1>
            <span className="font-weight-bold">studyandshare</span>.com
          </h1>
          <h2>Welcome</h2>
        </div>
        <Form className="login-form">
          <FormGroup>
            <Label>Email</Label>
            <Input
              placeholder="Email"
              type="email"
              onChange={this.handleEmailChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              placeholder="password"
              type="password"
              onChange={this.handlePasswordChange}
            ></Input>
          </FormGroup>
          {error && (
            <Label>That username/password is incorrect. Try again!</Label>
          )}
          <Button className="btn-lg btn-dark btn-block" onClick={this.login}>
            Login
          </Button>
          <div className="text-center">
            <a href="#">Sign Up</a>
            <span className="p-2">|</span>
            <a href="#">Sign In</a>
          </div>
        </Form>
      </div>
    );
  }
}
