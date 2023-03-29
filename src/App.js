import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

const DEVELOPER = "Emmallex Technologies";

const Footer = () => {
  return (
    <div>
      All rights reserved &copy; {DEVELOPER}
    </div>
  )
}

const Header = () => {
  return (
    <div className='wrapper'>
      <div>
        <h1>Hello World</h1>  
      </div>
      <div>
        This is the test header
      </div>
      <p>
        <Greet />
        <Welcome />
      </p>
    </div>
  );
}

function Wrapper() {
  return (
    <>
      <div className='App'>
        <Header />
          <header>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              This is the test class creation.
            </p>
          </header>
        <Footer />
      </div>
    </>
  );
}

class App extends Component {
  render() {
    return (
      <Wrapper />
    )
  }
}

export default App;
