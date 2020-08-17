import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Main from './Main'
import Footer from './Footer'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello world</h1>
      </header>
      <Main/>
      <Footer them="red"/>
    </div>
  );
}

export default App;
