import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';
// Only need app.css imported on the main folder


// App.js is the gateway to our main React Component
 
class App extends Component {
  render() {
    return (
      // when you return it has to all be in one element (one top level div)
      <div className="App">
       My Project Manager App
       <Projects />
      </div>
    );
  }
}

export default App;
