import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

// App.js is the gateway to our main React Component

class Projects extends Component {
    deleteProject(id){
        this.props.onDelete(id);
    }

    render() {
        let projectItems;
        if (this.props.projects) {
            projectItems = this.props.projects.map(project => {
                
                return (
                    // Assigning each project item to the PrjectItem variable above
                    <ProjectItem onDelete={this.deleteProject(this)} key= {project.title} project = {project} />
                );

            });
        }
        // console.log(this.props); 
        return (
            // when you return it has to all be in one element (one top level div)
            <div className="Projects">
                <h3>Latest Projects</h3>
                    {projectItems}
                
            </div>
        );
    }
}

export default Projects;
