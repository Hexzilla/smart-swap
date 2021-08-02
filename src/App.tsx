import React from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import history from './routerHistory'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
