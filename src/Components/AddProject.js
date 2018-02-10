import React, { Component } from 'react';




class AddProject extends Component {

    render() {
        
        return (
            // when you return it has to all be in one element (one top level div)
            <div>
                <h3>Add Project</h3>
                <form>
                    <div>
                        <label>Title</label><br />
                        <input type="text" ref="title" />
                    </div>
                </form>
            </div>
        );
    }
}

export default AddProject;
