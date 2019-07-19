import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component{


  render() {
    return (
     <div className="top-bar">
          <div className="socials">
               <div className="socials-item">in</div>
               <div className="socials-item">gitHub</div>
          </div>
          <nav className="navigation">
               <ul className="navigation__list">
                    <li className="navigation__item">home</li>
                    <li className="navigation__item">portfolio</li>
                    <li className="navigation__item">about & contact</li>
               </ul>
          </nav>
     </div>
    );
  }
}
export default Navigation;