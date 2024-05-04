import React from 'react';
import MatrixBackground from './MatrixBackground';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

function App() {
  return (
    <div>
      <MatrixBackground />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Navigation />
      {/* Content will go here */}
      <Footer />
    </div>
  );
}

export default App;



















