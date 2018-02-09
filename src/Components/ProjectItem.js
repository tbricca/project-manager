import React, { Component } from 'react';


// App.js is the gateway to our main React Component

class ProjectItem extends Component {
    render() {
        // console.log(this.props);
        return (
            // when you return it has to all be in one element (one top level div)
            <li className="Project">
                {this.props.project.title} - {this.props.project.category}
            </li>
        );
    }
}

export default ProjectItem;
