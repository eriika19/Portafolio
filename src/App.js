import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects';
import Experimental from './views/Experimental';
import Contact from './views/Contact';


import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/experimental" component={Experimental} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
