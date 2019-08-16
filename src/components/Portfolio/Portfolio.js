import React, { Component } from 'react';
import './Portfolio.css';
import Project from '../Project/Project';

import weatherCenter1 from './img/weather-app/weather1.png';
import weatherCenter2 from './img/weather-app/weather2.png';
import weatherCenter3 from './img/weather-app/weather3.png';

class Portfolio extends Component{


  render() {
    return (
      <div className="portfolio">
        <Project
          imageLeft={weatherCenter3} 
          imageCenter={weatherCenter1}
          imageRight={weatherCenter2}
          title="turn-timer"
          description="krótki opis projektu - short project description"
        ></Project>
        <Project
          imageBack=""
          imageCenter=""
          imageFront=""
          title="weather app"
          description="krótki opis projektu - short project description"
        ></Project>
        <Project
          imageBack=""
          imageCenter=""
          imageFront=""
          title="e-commerce blogsite"
          description="krótki opis projektu - short project description"
        ></Project>
        <Project
          imageBack=""
          imageCenter=""
          imageFront=""
          title="music band website"
          description="krótki opis projektu - short project description"
        ></Project>
        
      </div>
    );
  }
}
export default Portfolio;