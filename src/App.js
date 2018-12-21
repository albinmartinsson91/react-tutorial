import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import About from './About';
import Projects from './Projects';
import Home from './Home';
import Page from './Page';
import Tabs from './Tabs';
import PageNotFound from './PageNotFound';

class App extends Component {
    render() {
        return (
            <div>
                <header className="p-8">
                    <NavLink activeClassName="bg-blue" exact to="/" className="mr-2">Home</NavLink>
                    <NavLink activeClassName="bg-blue" to="/about" className="mr-2">About</NavLink>
                    <NavLink activeClassName="bg-blue" to="/projects" className="mr-2">Projects</NavLink>
                    <NavLink activeClassName="bg-blue" to="/tabs" className="mr-2">Tabs</NavLink>
                    <NavLink activeClassName="bg-blue" to="/page/davidohlin" className="mr-2">David</NavLink>
                    <NavLink activeClassName="bg-blue" to="/page/sebastiansson" className="mr-2">Sebastian</NavLink>
                    <NavLink activeClassName="bg-blue" to="/page/albinmartinsson91" className="mr-2">Albin</NavLink>
                    <NavLink activeClassName="bg-blue" to="/error" className="mr-2">404</NavLink>
                </header>
                <main>
                    <Switch>
                        <Route component={Home} exact path="/" />
                        <Route component={About} path="/about" />
                        <Route component={Tabs} path="/tabs" />
                        <Route component={Projects} path="/projects" />
                        <Route component={Page} path="/page/:username" />
                        <Route component={PageNotFound} />
                    </Switch>
                </main>
                <footer>
                    
                </footer>
            </div>
        );
    }
}

export default withRouter(App);
