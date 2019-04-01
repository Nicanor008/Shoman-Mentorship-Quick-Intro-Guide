import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './components/navBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          <h2>Mentorship 101</h2>
        </header>
      </div>
    );
  }
}

export default App;
