import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';
import AddProject from './Components/AddProject';
// Only need app.css imported on the main folder


// App.js is the gateway to our main React Component
 
class App extends Component {
  // this is where we define our initial state
  constructor() { 
    // Have to call super() when you call a constructor()
    super();
    this.state = {
      projects: []
    }
  }
// lifecycle mehtod fires off everytime the component is re rendered
  componentWillMount(){

    this.setState({projects: [
      {
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        title: ' Social App',
        category: 'Mobile Development'
      },
      {
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]});
  }
  render() {
    return (
      // when you return it has to all be in one element (one top level div)
      <div className="App"> 
       <AddProject />
       <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
