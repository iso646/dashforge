import React from 'react';
import logo from './Brad.jpg';
import './Brad.css';

function Brad() {
  return (
    // pre-loader
    <div class="bradPre">
      <span>
          <span class="atail-dot"></span>
          <span class="atail-dot"></span>
          <span class="atail-dot"></span>
      </span>
      <div class="atail-preloader">
        <span>
            <span class="atail-dot"></span>
            <span class="atail-dot"></span>
            <span class="atail-dot"></span>
        </span>
      </div>
    </div>

    <div className="Brad">
      <header className="Brad-header">
        <img src={logo} className="Brad-logo" alt="logo" />
        <p>
          Edit <code>src/Brad.js</code> and save to reload.
        </p>
        <a className="Brad-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header>
  </div>
  );
}

export default Brad;
