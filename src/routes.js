import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import PrivateRoute from './containers/PrivateRoute'
import NotLoggedInRoute from './containers/NotLoggedInRoute'
import CharacterContainer from './containers/CharacterContainer'
import EpisodeContainer from './containers/EpisodeContainer';

const Routes = () => (
  <Router>
    <NotLoggedInRoute exact path='/login' component={LoginPage} />
    <NotLoggedInRoute exact path='/register' component={RegisterPage} />
    <PrivateRoute exact path='/' component={HomePage} />
    <PrivateRoute exact path="/Characters" component={CharacterContainer}/>
    <PrivateRoute exact path="/Episodes" component={EpisodeContainer}/>
  </Router>
)

export default Routes
