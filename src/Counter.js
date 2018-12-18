import React, { Component } from 'react';

class Counter extends React.Component {

	constructor(props) {
        super(props);
        this.state = { 
        	count: 0
        };
    }

	//Here we use an arrow function to be able to use this.setState
	handleClick = () => {
		//We access the current state
		this.setState({
			//And increment by one each time the event fires
			count: this.state.count + 1
		})
	}
 	componentDidMount() {
 		console.log("Counter Mounted");
 	}

	render() {
		return <div className="inline-flex justify-between w-full items-center">
					<button onClick={this.handleClick} className="p-3 bg-blue-light rounded">{ this.props.label }</button>
					<span className="text-2xl">{this.state.count}</span>
				</div>
	}
}

export default Counter;