import React, { Component } from 'react';
import './App.css';
import QuotesList from './components/QuotesList'

class App extends Component {
  render() {
    return (
      <div className="App">
         <QuotesList/>
      </div>
    );
  }
}

export default App;
