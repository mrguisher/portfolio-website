import React, { Component } from 'react';
import './Project.css';
import ButtonCta from '../ButtonCta/ButtonCta';
import '../ButtonCta/ButtonCta.css'

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class Project extends Component{

  render() {
    return (
      <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
      <div className="project">
        <div className="project__img-container">
          <img src={this.props.imageLeft} alt={this.props.alt} className="project__image project__image-left"/>
          <img src={this.props.imageCenter} alt={this.props.alt} className="project__image-center project__image"/>
          <img src={this.props.imageRight} alt={this.props.alt} className="project__image"/>
        </div>
      
        <h3 className="project__title">{this.props.title}</h3>
        <p className="project__description">{this.props.description}</p>
        <div className="btn-container">
          <ButtonCta className="btn btn-primary">Watch demo</ButtonCta>
          <ButtonCta className="btn btn-secondary">Show on Github</ButtonCta>
        </div>
      </div>
      </ScrollAnimation>
    );
  }
}
export default Project;