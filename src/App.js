import React, { Component } from 'react';
import uuid from 'uuid';
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
        // this adds a new id each time we use it
        id: uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        id: uuid.v4(),
        title: ' Social App',
        category: 'Mobile Development'
      },
      {
        id: uuid.v4(),
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]});
  }

  handleAddProject(project){
     let projects = this.state.projects;
     projects.push(project);
     this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render() {
    return (
      // when you return it has to all be in one element (one top level div)
      <div className="App"> 
       <AddProject addProject={this.handleAddProject.bind(this)} />
       <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
      </div>
    );
  }
}

export default App;
