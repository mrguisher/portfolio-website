import React, { Component } from 'react';
import './Portfolio.css';
import Project from '../Project/Project';

class Portfolio extends Component{

  render() {
    return (
      <div className="portfolio">
        <Project
          title="pierwszy projekt"
          description="krótki opis projektu - short project description"
        ></Project>

      </div>
    );
  }
}
export default Portfolio;