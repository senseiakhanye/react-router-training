import React, { Suspense } from 'react';

// import About from './Pages/About/about';
import Contact from './Pages/Contact/contact';
import Home from './Pages/Home/home';
// import Persons from './Pages/Persons/Persons'
import Person from './Pages/Persons/Person/Person';
import NotFound from './Pages/notfound';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import classes from './App.module.css';
// import './App.module.css';

const About = React.lazy(() => import('./Pages/About/about'));
const Persons = React.lazy(() => import('./Pages/Persons/Persons'));

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
          {/* <Route path="/about" exact component={About} /> */}
          <Route path="/about" exact render={() => <Suspense fallback={<div>Loading...</div>}><About/></Suspense>} />
          <Route path="/contact" exact component={Contact} />
          {/* <Route path="/person" exact component={Persons} /> */}
          <Route path="/person" exact render={() => {
            return (
              <Suspense fallback={<div>Loading ...</div>}>
                <Persons />
              </Suspense>);
          }} />
          <Route path="/person/:id" exact component={Person} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
