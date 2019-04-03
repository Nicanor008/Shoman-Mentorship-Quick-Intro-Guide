import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import LandingPage from './components/landingPage';
import Login from './components/auth/login';
import Career from './components/career';
import Mentors from './components/mentors';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/career-advice" component={Career} /> 
            <Route exact path="/mentors" component={Mentors} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
