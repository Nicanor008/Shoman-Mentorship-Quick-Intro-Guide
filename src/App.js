import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import LandingPage from './components/landingPage';
import Login from './components/auth/login';
import Career from './components/career';
import Mentors from './components/mentors';
import SignUp from './components/auth/signup';
import Learning from './components/learning';
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/career-advice" component={Career} /> 
            <Route exact path="/mentors" component={Mentors} />
            <Route exact path="/home" component={Learning} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
