import React, { Component } from 'react';
import './AboutMe.css';

import photo from './../../assets/photo.jpg'
import github from './../../assets/github.svg'
import linkedin from './../../assets/linkedin2.svg'

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class AboutMe extends Component{

  render() {
    return (
      <div className="about" id={this.props.id}>
        <div className="about__photo-rounded">
          <img src={photo} alt="photo" className="about__photo"/>
        </div>
        <div className="center-box">
        <ScrollAnimation animateIn="fadeIn" delay={200}><h2 className="about__heading">Hello</h2></ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" delay={500}><p className="about__text-line">I'm Mateusz</p></ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" delay={800}><p className="about__text-line">frontend developer</p></ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" delay={1200}><p className="about__text-line">feel free to contact me at <span className="about__bold">mrpeciak@gmail.com</span> </p></ScrollAnimation>
          
        </div>
        
        <div className="about__socials">
        
               <a href="https://github.com/mrguisher" className="socials-item"><img src={github} alt="github-link" /></a>
               <a href="https://www.linkedin.com/in/mateuszpeciak/" className="socials-item"><img src={linkedin} alt="linkedin-link" /></a>
               <ScrollAnimation animateIn="fadeIn" delay={500}><a href="#" className="about__text-line">download my <span className="about__bold">Curriculum Vitae</span></a></ScrollAnimation>
        
        </div>  
        
      </div>
    );
  }
}
export default AboutMe;