import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects';
import Experimental from './views/Experimental';
import Contact from './views/Contact';

import './App.css';

function App() {
  return (
                  <Router basename={window.location.pathname || ''} >

      <Switch>
      <Route exact path="/" render={props => < Home />}></Route>
      <Route exact path="/about" render={props => < About />}></Route>
      <Route exact path="/projects" render={props => < Projects />}></Route>
      <Route exact path="/experimental" render={props => < Experimental />}></Route>
      <Route exact path="/contact" render={props => < Contact />}></Route>
      </Switch>
      </Router>
  );
}

export default App;
