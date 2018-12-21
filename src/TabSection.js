import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, withRouter } from 'react-router-dom'

class TabSection extends React.Component {

	constructor(props) {
        super(props);
    }

	componentDidMount() {
		
	}

	render() {
		return (
			<h1>{this.props.match.params.section}</h1>
		)
	}
}

export default TabSection;