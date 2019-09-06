import React from 'react';
import logo from './logo.svg';
import './Dash.css';

function Dash() {
  return (
    <div className="Dash">
      <header className="Dash-header">
        <img src={logo} className="Dash-logo" alt="logo" />
        <p>
          Edit <code>src/Dash.js</code> and save to reload.
        </p>
        <a
          className="Dash-link"
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

export default Dash;
