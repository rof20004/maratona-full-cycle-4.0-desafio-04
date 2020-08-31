import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Users from './user/User';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Maratona Full Cycle 4.0 - Desafio 04 - SPA com React.js
        </p>

        <Router>
          <div>
            <nav>
              <ul className="App-router-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/users">Lista de Usuários</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/users">
                <Users />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
