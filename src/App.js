import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './Body.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Hetero-DB</h1>
        </header>
        <div className="main-body">
          <Body />
        </div>
      </div>
    );
  }
}

export default App;
