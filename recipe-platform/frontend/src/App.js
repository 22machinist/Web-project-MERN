import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './styles.css';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const setAuthToken = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {token ? <HomePage /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login" exact>
          <LoginPage setToken={setAuthToken} />
        </Route>
        <Route path="/register" exact>
          <RegisterPage setToken={setAuthToken} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
