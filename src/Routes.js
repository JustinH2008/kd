import React from 'react'
import { Switch, Route } from 'react-router-dom'
import homePage from './components/homePage'
import aboutUs from './components/aboutUs'
import contactUs from './components/contactUs'


const Routes = () => (

  <Switch>
    <Route exact path='/' component={homePage} />
    <Route exact path='/aboutUs' component={aboutUs} />
    <Route exact path='/contactUs' component={contactUs} />
  </Switch>
);

export default Routes;


// Created from https://youtu.be/nciUU_gtN9w tutorial.
