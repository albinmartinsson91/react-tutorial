import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Posed, { PoseGroup } from 'react-pose'

import About from './About';
import Projects from './Projects';
import Home from './Home';
import Page from './Page';
import Tabs from './Tabs';
import ReduxCounter from './ReduxCounter';
import PageNotFound from './PageNotFound';

import { connect } from 'react-redux'
import store from './store'

const mapStateToProps = store => {
    return {
        count: store.counter
    }
}

const RouteContainer = Posed.div({
    enter: {
    y: 0,
    opacity: 1,
    delay: 200,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 30 },
      default: { duration: 200 }
    }
  },
  exit: {
    y: 20,
    opacity: 0,
    transition: { duration: 150 }
  }
});

class App extends Component {
    render() {
        return (
            <div>
                <header className="p-8">
                    <NavLink activeClassName="font-bold" exact to="/" className="mr-2 text-black no-underline">Home</NavLink>
                    <NavLink activeClassName="font-bold" to="/about" className="mr-2 text-black no-underline">About</NavLink>
                    <NavLink activeClassName="font-bold" to="/projects" className="mr-2 text-black no-underline">Projects</NavLink>
                    <NavLink activeClassName="font-bold" to="/tabs" className="mr-2 text-black no-underline">Tabs</NavLink>
                    <NavLink activeClassName="font-bold" to="/page/davidohlin" className="mr-2 text-black no-underline">David</NavLink>
                    <NavLink activeClassName="font-bold" to="/page/sebastiansson" className="mr-2 text-black no-underline">Sebastian</NavLink>
                    <NavLink activeClassName="font-bold" to="/page/albinmartinsson91" className="mr-2 text-black no-underline">Albin</NavLink>
                    <NavLink activeClassName="font-bold" to="/redux-counter" className="mr-2 text-black no-underline">Redux Counter</NavLink>
                    <NavLink activeClassName="font-bold" to="/error" className="mr-2 text-black no-underline">404</NavLink>
                    <span>Current Count: {this.props.count} </span>
                </header>
                <main>
                    <PoseGroup animateOnMount="true">
                        {/* We check for the first part of the route to avoid nested route animation */}
                        <RouteContainer key={this.props.location.pathname.split('/')[1]}>
                            <Switch location={this.props.location}>
                                <Route component={Home} exact path="/" />
                                <Route component={About} path="/about" />
                                <Route component={Tabs} path="/tabs" />
                                <Route component={Projects} path="/projects" />
                                <Route component={ReduxCounter} path="/redux-counter" />
                                <Route component={Page} path="/page/:username" />
                                <Route component={PageNotFound} />
                            </Switch>
                        </RouteContainer>
                    </PoseGroup>
                </main>
                <footer>
                    
                </footer>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(App));
