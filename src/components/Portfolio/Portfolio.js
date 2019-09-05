import React, { Component } from 'react';
import './Portfolio.css';
import Project from '../Project/Project';

import weather1 from './img/weather-app/weather1.png';
import weather2 from './img/weather-app/weather2.png';
import weather3 from './img/weather-app/weather3.png';

import blog1 from './img/blog/blog1.png';
import blog2 from './img/blog/blog2.png';
import blog3 from './img/blog/blog3.png';

import turnTimer1 from './img/turn-timer/turn-timer1.png';
import turnTimer2 from './img/turn-timer/turn-timer2.png';
import turnTimer3 from './img/turn-timer/turn-timer3.png';

class Portfolio extends Component{


  render() {
    return (
      <div className="portfolio" id={this.props.id}>
        <Project
          imageLeft={turnTimer2}
          imageCenter={turnTimer1}
          imageRight={turnTimer3}
          title="turn-timer"
          description="Timer application for board games, made with Angular, backend based on Cloud Firestore to perform CRUD operations. This app is designed with the mobile-first approach and responsive to screen size."
          descriptionBold="Angular 7, Sass, Firebase, Angular material"
          websiteUrl={`${process.env.PUBLIC_URL}/turn-timer`}
          githubUrl="https://github.com/mrguisher/turn-timer"
        ></Project>
        <Project
          imageLeft={weather3}
          imageCenter={weather1}
          imageRight={weather2}
          alt="weather-app img"
          title="weather app"
          description="A weather forecast application made with React, fetch data from OpenWeatherMap API"
          descriptionBold="React 16, Fetch Api"
          githubUrl="https://github.com/mrguisher/weather-app"
          websiteUrl={`${process.env.PUBLIC_URL}/weather-app`}
        ></Project>
        <Project
          imageLeft={blog2}
          imageCenter={blog1}
          imageRight={blog3}
          title="e-commerce blogsite"
          description="An e-commerce specialist blog site based on WordPress, connected to MailChimp with custom contact and subscribe form, fully responsive with a media query mixin manager."
          descriptionBold="Sass, BEM methodology, JavaScript (ES6), WordPress, NPM."
          githubUrl="https://github.com/mrguisher/jakpozyskacklienta_pl"
          websiteUrl={`${process.env.PUBLIC_URL}/e-commerce-blogsite`}
        ></Project>
        {/* <Project
          imageLeft=""
          imageCenter=""
          imageRight=""
          title="music band website"
          description="krótki opis projektu - short project description"
          githubUrl="https://github.com/mrguisher/music-band-website"
          websiteUrl={`${process.env.PUBLIC_URL}/music-bank-website`}
        ></Project> */}
        
      </div>
    );
  }
}
export default Portfolio;