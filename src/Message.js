import React from 'react';

class Message extends React.Component {

	render() {
		return <h2 className="">{this.props.message ? this.props.message : 'Blankt Statement'}</h2>
	}
	
}

export default Message;