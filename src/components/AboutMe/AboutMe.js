import React, { Component } from 'react';
import './AboutMe.css';

import photo from './../../assets/photo.jpg'

class AboutMe extends Component{

  render() {
    return (
      <div className="about" id={this.props.id}>
      <div className="about__photo-rounded">
        <img src={photo} alt="photo" className="about__photo"/>
      </div>
      


      </div>
    );
  }
}
export default AboutMe;