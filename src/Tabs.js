import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, withRouter } from 'react-router-dom'
import TabSection from './TabSection';

class Tabs extends React.Component {

	render() {
		return (
			<div className="container p-8">
				<h1>Tabs</h1>
				<div className="py-3">
                	<Link className="mr-2" to="/tabs/settings">Settings</Link>
                	<Link to="/tabs/profile">Profile</Link>
                </div>
                <hr className="bg-grey h-px" />
                <div className="py-4">
                	<Route path="/tabs/:section" component={TabSection}/>
                </div>
            </div>
		)
	}
}

export default Tabs;