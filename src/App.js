import React, { Component } from 'react';
import './App.scss';

import Container from './components/Container';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <div>
        <Header 
        title = 'Weather App'
        message = 'Your Weather'
        />
        <Container />
      </div>
    );
  }
}

export default App;
