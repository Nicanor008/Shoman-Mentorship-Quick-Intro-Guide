import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './components/navBar';
import LandingPage from './components/landingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          <LandingPage />
        </header>
      </div>
    );
  }
}

export default App;
