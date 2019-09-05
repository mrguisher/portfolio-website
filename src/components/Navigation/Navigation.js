import React, { Component } from 'react';
import './Navigation.css';

import { BrowserRouter as Router } from "react-router-dom";
// import { HashLink as Link } from 'react-router-hash-link';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import github from './../../assets/github.svg'
import linkedin from './../../assets/linkedin2.svg'
import burger from './../../assets/burger.svg'
import cross from './../../assets/cross.svg'


class Navigation extends Component{

     constructor() {
          super();
          this.state = {
               whichPage: "",
               mobileMenuStatus: "off"
          }
          this.sites = ["home", "portfolio", "contact"]
     }

     checkPage = (page) => {
          if (this.state.whichPage !== page) {
               this.setState({whichPage: {page}});
          } else {
               console.log('null')
          }
     }

     activeLink = () => {
          this.setState({});
          this.mobileMenuToggle();
     }

     mobileMenuToggle = () => {
          this.state.mobileMenuStatus === "off" ? this.setState({mobileMenuStatus: "on"}) : this.setState({mobileMenuStatus: "off"})
     }

  render() { 
     return (
          <React.Fragment>
          <img src={this.state.mobileMenuStatus === "off" ? `${burger}` : `${cross}`} className="mobile-menu__toggle" onClick={this.mobileMenuToggle}></img>
  
          <div className={this.state.mobileMenuStatus === "off" ? "top-bar" : "top-bar hidden"}>
               <div className="socials">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/mrguisher"><img className="socials-item" src={github} alt="github-link" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mateuszpeciak/"><img className="socials-item" src={linkedin} alt="linkedin-link" /></a>
                    <a target="_blank" rel="noopener noreferrer" href={`${process.env.PUBLIC_URL}assets/CV_Mateusz_Peciak.pdf`}  className="socials-item cv">Curriculum Vitae</a>
               </div>
               <nav className="navigation">
                    <ul className="navigation__list">
                    <Router>
                         {this.sites.map((site) => (<NavLink onClick={this.activeLink} smooth to={`/#${site}`} className={this.state.whichPage === `#${site}` ? "navigation__item selected" : "navigation__item"}>{site}</NavLink>))}
                    </Router>
                    </ul>
               </nav>
          </div>
          </React.Fragment>
    );
  }
}
export default Navigation;