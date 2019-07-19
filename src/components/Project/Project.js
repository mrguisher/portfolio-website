import React, { Component } from 'react';
import './Project.css';

class Project extends Component{

  render() {
    return (
      <div className="project">
        <div className="project__img-container">
          <img src={this.props.imageBack} alt="" className="project__image-back"/>
          <img src={this.props.imageCenter} alt="" className="project__image-center"/>
          <img src={this.props.imageFront} alt="" className="project__image-front"/>
        </div>
        <h3 className="project__title">{this.props.title}</h3>
        <p className="project__description">{this.props.description}</p>
      </div>
    );
  }
}
export default Project;