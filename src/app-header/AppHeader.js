import React from 'react';
import './AppHeader.scss';

function AppHeader() {
  return (
    <header className="app-header">
      <img src="https://static.tvmaze.com/uploads/images/medium_portrait/252/632123.jpg"
        className="app-logo"
        alt="logo" />
      <p>
        Look, Ma, no hands!
      </p>
      <a
        className="app-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        See the inner workings of The Zuck.
      </a>
    </header>
  )
}

export default AppHeader;
