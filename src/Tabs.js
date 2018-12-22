import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, withRouter, Redirect } from 'react-router-dom'
import Posed, { PoseGroup } from 'react-pose'
import TabSection from './TabSection';


const TabsRouteContainer = Posed.div({
    enter: {
    x: 0,
    opacity: 1,
    delay: 0,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 30 },
      default: { duration: 300 }
    }
  },
  exit: {
    x: 20,
    opacity: 0,
    transition: { duration: 150 }
  }
});


class Tabs extends React.Component {
    constructor(props) {
        super(props)
    }

	render() {
		return (
			<div className="container p-8">
				<h1>Tabs</h1>
				<div className="py-3">
                	<Link to="/tabs/settings" className="mr-2">Settings</Link>
                	<Link to="/tabs/profile">Profile</Link>
                </div>
                <hr className="bg-grey h-px" />
                <div className="py-4">
                    <PoseGroup animateOnMount="true">
                    {/* We check for the first part of the route to avoid nested route animation */}
                        <TabsRouteContainer key={this.props.location.pathname}>
                            <Route path="/tabs/:section" component={TabSection}/>
                        </TabsRouteContainer>
                    </PoseGroup>
                </div>
            </div>
		)
	}
}

export default withRouter(Tabs);