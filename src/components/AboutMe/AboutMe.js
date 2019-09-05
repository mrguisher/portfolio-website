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
      <React.Fragment>
      <footer className="about" id={this.props.id}>
        <div className="about__photo-rounded">
          <img src={photo} alt="" className="about__photo"/>
        </div>
        <div className="center-box">
          <ScrollAnimation animateOnce="true" animateIn="fadeIn" delay={100}><h2 className="about__heading">Hello</h2></ScrollAnimation>
          <ScrollAnimation animateOnce="true" animateIn="fadeIn" delay={400}><p className="about__text-line">I'm Mateusz</p></ScrollAnimation>
          <ScrollAnimation animateOnce="true" animateIn="fadeIn" delay={700}><p className="about__text-line">frontend developer</p></ScrollAnimation>
          <ScrollAnimation animateOnce="true" animateIn="fadeIn" delay={1000}><p className="about__text-line">feel free to contact me at <span className="about__bold">mrpeciak@gmail.com</span> </p></ScrollAnimation>
        </div>
        <div className="about__socials">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/mrguisher" className="socials-item socials-item__footer"><img src={github} alt="github-link" /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mateuszpeciak/" className="socials-item socials-item__footer"><img src={linkedin} alt="linkedin-link" /></a>
          <a target="_blank" rel="noopener noreferrer" href={`${process.env.PUBLIC_URL}assets/CV_Mateusz_Peciak.pdf`} className="about__text-line">download my <span className="about__bold">Curriculum Vitae</span></a>
        </div>  
      </footer>
      <div className="text-small-box">
        <div className="text-small">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
        <div className="text-small">Icons made by <a href="https://www.flaticon.com/authors/linh-pham" title="Linh Pham">Linh Pham</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
      </div> 
      </React.Fragment>
    );
  }
}
export default AboutMe;