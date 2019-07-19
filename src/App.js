import React, { Fragment } from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Portfolio from './components/Portfolio/Portfolio';
import Navigation from './components/Navigation/Navigation';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  
  return (

    <Fragment>
    <Navigation></Navigation>
      <div className="main-wrapper">
        <HomePage></HomePage>
        <Portfolio></Portfolio>
        <AboutMe></AboutMe>
      </div>
    </Fragment>
    
    

  );
}
export default App;