import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'

import About from './About';
import Projects from './Projects';
import Home from './Home';
import Page from './Page';

class App extends Component {
    render() {
        return (
            <Router>
                <main>
                    <header className="p-8">
                        <NavLink activeClassName="bg-blue" exact to="/" className="mr-2">Home</NavLink>
                        <NavLink activeClassName="bg-blue" to="/about" className="mr-2">About</NavLink>
                        <NavLink activeClassName="bg-blue" to="/projects" className="mr-2">Projects</NavLink>
                        <NavLink activeClassName="bg-blue" to="/page/sebastiansson" className="mr-2">Page</NavLink>
                    </header>
                    <div>
                        <Route component={Home} exact path="/" />
                        <Route component={About} path="/about" />
                        <Route component={Projects} path="/projects" />
                        <Route component={Page} path="/page/:username" />
                    </div>
                    <footer>
                        
                    </footer>
                </main>
            </Router>
        );
    }
}

export default App;
