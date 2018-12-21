import React from 'react';

import Message from './Message';
import Counter from './Counter';
import Input from './Input';
import StopWatch from './StopWatch';

class About extends React.Component {

	render() {
		return (
			<div className="container">
				<h1 className="p-8">Awesome Toolbox</h1>
                <div className="border-b p-8 items-center justify-center">
                    <Message message="Hej! Jag är en prop." />
                </div>
                <div className="border-b p-8 items-center justify-center">
                    <Counter label="Click me" />
                </div>
                <div className="border-b p-8 items-center justify-center">
                    <Input />
                </div>
                <div className="border-b p-8 items-center justify-center">
                    <StopWatch />
                </div>
            </div>
		)
	}
}

export default About;