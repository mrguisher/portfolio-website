import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component{

  constructor() {
    super();
  }

  render() {
    return (
      <div className="main">
        
       
        <header className="main__header">
          <h1 className="main__heading-primary">Mateusz Pęciak</h1>
          <span className="main__heading-sub">&#x0007B; web developer portfolio &#x0007D;</span>
          <div className="code-line">&#x0007C;</div>
        </header>

      </div>
    );
  }
}
export default HomePage;