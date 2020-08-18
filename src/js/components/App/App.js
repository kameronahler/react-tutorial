import React from 'react';
import AppFooter from '../AppFooter/AppFooter';
import AppHeader from '../AppHeader/AppHeader';
import AppMain from '../AppMain/AppMain';

export default function App() {
  return (
    <div className="app">
      <AppHeader />
      <AppMain />
      <AppFooter />
    </div>
  );
}
