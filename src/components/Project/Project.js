import React, { Component } from 'react';
import './Project.css';
import ButtonCta from '../ButtonCta/ButtonCta';
import '../ButtonCta/ButtonCta.css'

class Project extends Component{

  render() {
    return (
      <div className="project">
        <div className="project__img-container">
          <img src={this.props.imageLeft} alt="weather-app img" className="project__image project__image-left"/>
          <img src={this.props.imageCenter} alt="weather-app img" className="project__image-center project__image"/>
          <img src={this.props.imageRight} alt="weather-app img" className="project__image"/>
        </div>
        <h3 className="project__title">{this.props.title}</h3>
        <p className="project__description">{this.props.description}</p>
        <div className="btn-container">
          <ButtonCta className="btn btn-primary">Watch demo</ButtonCta>
          <ButtonCta className="btn btn-secondary">Show on Github</ButtonCta>     
        </div>
        
      </div>
    );
  }
}
export default Project;