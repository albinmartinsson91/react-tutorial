import React from 'react';

import Form from './Form';
import FormField from './FormField';
import List from './List';
import Request from './Request';

class Projects extends React.Component {

	render() {
		return (
			<div className="container">
				<h1 className="p-8">Cool Stuff</h1>
                <div className="border-b p-8 items-center justify-center">
                    <Form />
                </div>
                <div className="border-b p-8 items-center justify-center">
                    <FormField />
                </div>
                <div className="border-b p-8 items-center justify-center">
                    <List />
                </div>
                <div className="border-b p-8 items-center justify-center">
                    <Request />
                </div>
            </div>
		)
	}
}

export default Projects;