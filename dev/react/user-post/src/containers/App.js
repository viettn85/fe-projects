import React from 'react';
import '../css/homepage.css';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/login.component';
import Homepage from './Homepage';
import Users from '../components/users.component';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
