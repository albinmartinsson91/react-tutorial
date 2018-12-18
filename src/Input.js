import React, { Component } from 'react';

class Input extends React.Component {

	constructor(props) {
        super(props);

        //Set current state. Add more state data and separate by comma
        this.state = { 
        	text: 'Albin'
        };
		//This is somehow needed in order to update the value
        this.updateText = this.updateText.bind(this);
    }

	//Here we use an arrow function to be able to use this.setState
	//The function accepts event 
	updateText = (event) => {
		//We access the current state and updates with event(onChange)target.value(input value field)
		this.setState({text: event.target.value});
	}

	render() {
		return <div className="inline-flex flex-row justify-between w-full items-center">
					<input className="border p-4" placeholder="Skriv här" type="text" onChange={this.updateText} />
					<span>{this.state.text}</span>
				</div>
	}
}

export default Input;