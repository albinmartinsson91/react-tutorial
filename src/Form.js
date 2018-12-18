import React, { Component } from 'react';

class Form extends React.Component {

	constructor(props) {
        super(props);
        this.state = { 
        	username: '',
        };
    }

 	handleSubmit = event => {
 		this.setState({
 			username: event.target.elements.username.value
 		})
		event.preventDefault()
 	}

	render() {
		return (
			<form className="" onSubmit={this.handleSubmit}>
					<label htmlFor="" className="mb-2 block">Label</label>
					<input type="text" name="username" className="p-4 border rounded w-full mb-2"/>
					<span className={this.state.username == '' ? 'w-full hidden' : 'w-full block mb-2'} >You entered: {this.state.username} </span>
					<button type="submit" className="p-3 bg-blue-light rounded">Submit</button>
			</form>
		)
	}
}

export default Form;