import React, { Component } from 'react';
import './Navigation.css';

import { BrowserRouter as Router } from "react-router-dom";
// import { HashLink as Link } from 'react-router-hash-link';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import github from './../../assets/github.svg'
import linkedin from './../../assets/linkedin2.svg'


class Navigation extends Component{


  render() {
    return (
     <div className="top-bar">
          <div className="socials">
               <a href="https://github.com/mrguisher" className="socials-item"><img src={github} alt="github-link" /></a>
               <a href="https://www.linkedin.com/in/mateuszpeciak/" className="socials-item"><img src={linkedin} alt="linkedin-link" /></a>
               
               <a href="#" className="socials-item">Curriculum Vitae</a>
          </div>
          <nav className="navigation">
               <ul className="navigation__list">
               <Router>
                    <NavLink smooth to="/#home" activeClassName="selected" className="navigation__item">home</NavLink>
                    <NavLink smooth to="/#portfolio" activeClassName="selected" className="navigation__item">portfolio</NavLink>
                    <NavLink smooth to="/#contact" activeClassName="selected" className="navigation__item">about & contact</NavLink>
                    {/* <NavLink >home</NavLink>
                    <NavLink className="navigation__item">portfolio</NavLink>
                    <NavLink className="navigation__item">about & contact</NavLink> */}
               </Router>
               </ul>
          </nav>
     </div>
    );
  }
}
export default Navigation;