import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
function App() {
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
          <Input placeholder="Email" type="email"></Input>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input placeholder="password" type="password"></Input>
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">Login</Button>
        <div className="text-center pt-3">
          Or you could use your social account
        </div>
        <FacebookLoginButton className="btn-block"></FacebookLoginButton>
        <div className="text-center">
          <a href="#">Sign Up</a>
          <span className="p-2">|</span>
          <a href="#">Sign In</a>
        </div>
      </Form>
    </div>
  );
}

export default App;
