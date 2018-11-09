import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './homePage';
import Resume from './resume';
import AboutMe from './aboutme';
import Projects from './projects';
import Contact from './contact';


const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/resume" component={Resume} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Switch>
)

export default Main;