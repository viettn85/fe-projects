import React, { Component } from 'react';
import { Main } from '../components/Main';
import { User } from '../components/User';
import { connect } from 'react-redux';
import { setName } from '../actions/userActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Ducky',
    };
  }

  render() {
    return (
      <div className="container">
        <Main
          changeUsername={() => {
            this.props.setAge(20);
            this.props.setName('Peter');
          }}
        />
        <User username={this.props.user.name} userage={this.props.user.age} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    },
    setAge: (age) => {
      dispatch({
        type: 'SET_AGE',
        payload: age,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
