import React from 'react';
import './AppFooter.scss';

function AppFooter() {
  return(
    <footer className="app-footer">
      <section className="app-footer__flex">
        <header>
          <h2 className="app-footer__heading">AppFooter</h2>
        </header>
        <p className="app-footer__radioactive-man">My eyes! The goggles do nothing!</p>
        <img className="app-footer__radioactive-man-img" src="/img/rm.png" alt=""/>
      </section>
    </footer>
  )
}

export default AppFooter
