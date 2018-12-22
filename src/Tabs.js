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
                	<NavLink activeClassName="font-bold" to="/tabs/settings" className="mr-2 text-black no-underline">Settings</NavLink>
                	<NavLink activeClassName="font-bold" to="/tabs/profile" className="mr-2 text-black no-underline">Profile</NavLink>
                </div>
                <hr className="bg-grey h-px" />
                <div className="py-4">
                    {/*Sets the initial route to settings - Adds unexpected behavior if the url is changed in browser to /tabs/profile*/}
                    <Redirect from="/tabs" exact to="/tabs/settings" />
                    <PoseGroup animateOnMount="true">
                        <TabsRouteContainer key={this.props.location.pathname}>
                            <Switch location={this.props.location}>
                                <Route path="/tabs/:section" component={TabSection}/>
                            </Switch>
                        </TabsRouteContainer>
                    </PoseGroup>
                </div>
            </div>
		)
	}
}

export default withRouter(Tabs);