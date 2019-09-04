import React, { Component } from 'react';
import './Project.css';
import ButtonCta from '../ButtonCta/ButtonCta';
import '../ButtonCta/ButtonCta.css'

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class Project extends Component{

  render() {
    return (
      <ScrollAnimation  animateOnce="true" animateIn="fadeIn" animateOut='fadeOut' duration={.7}>
      <div className="project">
        <div className="project__img-container">
          <img src={this.props.imageLeft} alt={this.props.alt} className="project__image project__image-left"/>
          <img src={this.props.imageCenter} alt={this.props.alt} className="project__image-center project__image"/>
          <img src={this.props.imageRight} alt={this.props.alt} className="project__image"/>
        </div>
        <h3 className="project__title">{this.props.title}</h3>
        <p className="project__description">{this.props.description}
          <span className="project__description-bold">Environment:</span>
          {this.props.descriptionBold}
        </p>
        <div className="btn-container">
          <a target="_blank" rel="noopener noreferrer" href={this.props.websiteUrl}><ButtonCta className="btn btn-primary">Watch demo</ButtonCta></a>
          <a target="_blank" rel="noopener noreferrer" href={this.props.githubUrl}><ButtonCta className="btn btn-secondary">Show on Github</ButtonCta></a>
        </div>
      </div>
      </ScrollAnimation>
    );
  }
}
export default Project;