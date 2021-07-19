import React from 'react';
import './App.css';
import {Navbar} from './components/navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Resume} from './pages/resume/Resume'
import {Projects} from './pages/projects/Projects'
import {Landing} from './pages/landing/Landing'
import {AboutMe} from './pages/aboutme/AboutMe'
import {ContactMe} from './pages/contactme/ContactMe'
import {ParticlesBG} from './components/particles/ParticlesBG'

function App() {
  return (
    <>
      <ParticlesBG />

      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/aboutme">
              <AboutMe />
            </Route>
            <Route exact path="/contactme">
              <ContactMe />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
