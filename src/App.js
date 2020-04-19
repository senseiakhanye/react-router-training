import React from 'react';

import About from './Pages/About/about';
import Contact from './Pages/Contact/contact';
import Home from './Pages/Home/home';
import Persons from './Pages/Persons/Persons'
import Person from './Pages/Persons/Person/Person';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import classes from './App.module.css';
// import './App.module.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className={classes.nav}>
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/about" exact activeClassName="active">About</NavLink>
          <NavLink to="/person" exact>Persons</NavLink>
          <NavLink to="/contact" exact>Contact</NavLink>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/person" exact component={Persons} />
          <Route path="/person/:id" exact component={Person} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
