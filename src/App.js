import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
/*

*/


function WelcomeMessage({myprops}) {
  return <p>Howdy!</p>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <WelcomeMessage myprop={'somevalue'} />

        <a
          className="App-link"
          href="descentdevelopment.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home
        </a>
      </header>
    </div>
  );
}

export default App;
