import React, { Component } from 'react';

class Counter extends React.Component {

	constructor(props) {
        super(props);
        //Här sätter vi state från början
        this.state = { 
        	count: 0,
        	text: 'Albin'
        };
		
		//This is somehow needed in order to update the value
        this.updateText = this.updateText.bind(this);
    }

	//Here we use an arrow function to be able to use this.setState
	handleClick = () => {
		//We access the current state
		this.setState({
			//And increment by one each time the event fires
			count: this.state.count + 1
		})
	}

	//Here we use an arrow function to be able to use this.setState
	//The function accepts event 
	updateText = (event) => {
		//We access the current state and updates with event(onChange)target.value(input value field)
		this.setState({text: event.target.value});
	}

 	componentDidMount() {
 		console.log("Counter Mounted");
 	}

	render() {
		return <div className="border rounded p-6 inline-flex flex-col justify-center items-center">
					<span className="text-2xl mb-2">{this.state.count}</span>
					<button onClick={this.handleClick} className="p-2 bg-blue mb-4">{ this.props.label }</button>
					<span>{this.state.text}</span>
					<input className="border p-4" placeholder="Skriv här" type="text" onChange={this.updateText} />
				</div>
	}
}

export default Counter;