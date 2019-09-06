import React from 'react';
import logo from './logo.svg';
import './Brad.css';

function Brad() {
  return (
    <div className="Brad">
      <header className="Brad-header">
        <img src={logo} className="Brad-logo" alt="logo" />
        <p>
          Edit <code>src/Brad.js</code> and save to reload.
        </p>
        <a
          className="Brad-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Brad;
