import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Her kan vi dytte inn litt klatredata
        </p>
        <a
          className="App-link"
          href="https://klatreverket.no/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Klatreverket
        </a>
      </header>
    </div>
  );
}

export default App;
