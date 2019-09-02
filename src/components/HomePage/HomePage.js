import React, { Component } from 'react';
import './HomePage.css';

import Typing from 'react-typing-animation';

class HomePage extends Component{

  constructor() {
    super();

    this.state = {
      cursorActive: false
    }
  }

  finishedTyping = () => {
    setTimeout(() => {
      this.setState({cursorActive: true})
    }, 300)
    
  }

  render() {
    return (
      <div className="main" id={this.props.id}>
        <header className="main__header">
          <h1 className="main__heading-primary">Mateusz Pęciak</h1>
          <Typing speed={120} hideCursor={false} onFinishedTyping={this.finishedTyping}>
            <span className="main__heading-sub">&#x0007B; web dev<Typing.Speed ms={50} />eloper  portfo<Typing.Speed ms={130}/>lio &#x0007D;</span>
          </Typing>
         {this.state.cursorActive && <div className="code-line">&#x0007C;</div>}
        </header>

      </div>
    );
  }
}
export default HomePage;