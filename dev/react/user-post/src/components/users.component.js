import React, { Component } from 'react';
import { Button } from 'reactstrap';
import store from 'store';
import { Redirect } from 'react-router-dom';
import isLoggedIn from '../helpers/is_logged_in';

export default class Users extends Component {
  logout = () => {
    store.remove('loggedIn');
    this.props.history.push('/login');
  };
  render() {
    if (!isLoggedIn()) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="container">
        <h1>This is logged in page</h1>
        <Button className="btn-lg btn-dark btn-block" onClick={this.logout}>
          Logout
        </Button>
      </div>
    );
  }
}
