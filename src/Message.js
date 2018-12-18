import React, { Component } from 'react';

class Message extends React.Component {
 	componentDidMount() {
 		console.log('Component Mounted');
 	}
	render() {
		return <h2 className="text-blue">{this.props.message ? this.props.message : 'Blankt Statement'}</h2>
	}
}

export default Message;