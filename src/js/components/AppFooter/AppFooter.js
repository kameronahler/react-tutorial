import React from 'react';
import './AppFooter.scss';

export default function AppFooter() {
  return(
    <footer className="app-footer">
      <section className="app-footer__flex">
        <header>
          <h1 className="app-footer__heading">AppFooter</h1>
        </header>
        <p className="app-footer__radioactive-man">My eyes! The goggles do nothing!</p>
        <img className="app-footer__radioactive-man-img" src="/img/rm.png" alt=""/>
      </section>
    </footer>
  )
}
