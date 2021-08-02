import React from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import history from './routerHistory'
import Swap from './views/Swap'
import logo from './logo.svg';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to smart token swap
        </p>
        <a
          className="App-link"
          href="/swap"
          rel="noopener noreferrer"
        >
          Swap
        </a>
      </header>
    </div>
  )
}

function App() {
  return (
    <Router history={history}>      
      <Switch>
        <Route exact strict path="/" component={Home} />
        <Route exact strict path="/swap" component={Swap} />
        <Route exact strict path="/chart" component={Swap} />
      </Switch>
    </Router>
  );
}

export default App;
