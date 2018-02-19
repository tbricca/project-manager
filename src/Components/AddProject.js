import React, { Component } from 'react';
import uuid from 'uuid';



class AddProject extends Component {
    // To store the data that we submit into the state
    constructor(){
        super();
        this.state = {
            newProject: {}
        }
    }
    static defaultProps = {
        categories: ['Web Design', 'Web Development', 'Mobile Development']
    }
    // for the submit button or else it will submit it and we won't be able to see it on the console
    handleSubmit(e){
        // console.log('Submitted');
       if(this.refs.title.value === ''){
           alert('Title is required');
       } else {
           this.setState({newProject: {
               id: uuid.v4(),
               title: this.refs.title.value,
               category: this.refs.category.value
           }}, function(){
            //    console.log(this.state);
            this.props.addProject(this.state.newProject);
           }); 
       } 
        e.preventDefault();
    }

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key = {category} value = {category}>{category}</option>
        });
        return (
            // when you return it has to all be in one element (one top level div)
            <div>
                <h3>Add Project</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title</label><br /> 
                        <input type="text" ref="title" />
                    </div>
                    <div>
                        <label>Category</label><br />
                        <select ref="category">
                        {categoryOptions}
                        </select>
                    </div>
                    <br />
                    <input type="submit" value="Submit" />
                    <br />
                </form>
            </div>
        );
    }
}

export default AddProject;
