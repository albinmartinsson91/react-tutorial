import React, { Component } from 'react';


class StopWatch extends React.Component {

	constructor(props) {
        super(props);
        this.state = { 
        	running: false,
        	lapse: 0
        };
    }

    handleClick = () => {
    	//This is the set state function but we pass the current state to be able to run if / else statements inside
		this.setState(state => {
			//if state.running = true
			if (state.running) {
				//clear interval - is this native javascript?
				clearInterval(this.timer)
			} 
			//if state is not running
			else {
				const startTime = Date.now() - this.state.lapse;

				//SetInterval is run repeatedly and as fast as possible
				this.timer = setInterval(() => {
					//Everytime the interval runs we update the lapse state
		    		this.setState({
		    			lapse: Date.now() - startTime
		    		})
		    	})
			}
			//Here we actually set the state based on whether it's set or not. Returns true or false.
			return {running: !state.running}
		})
   
    }

    handleClearClick = () => {
    	//This simply resets the state and clears the interval
    	clearInterval(this.timer)
    	this.setState({
    		running:false,
    		lapse:0
    	})
    }

    componentWillUnmount() {
    	clearInterval(this.timer)
    }

	render() {
		return <div className="inline-flex justify-between w-full items-center">
					<div>
						<button onClick={this.handleClick} className="p-3 bg-blue-light rounded mr-2">{ this.state.running ? 'Stop' : 'Start' }</button>
						<button onClick={this.handleClearClick} className="p-3 bg-red-light text-white rounded">Clear</button>
					</div>
					<span className="text-2xl">{this.state.lapse}</span>
				</div>
	}
}

export default StopWatch;