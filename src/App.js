import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import CitySelection from './components/CitySelection';


class App extends Component {

  // some function that updates app state with the current selected city
  // pass that function to your citySelection component as a prop

  render() {
    return (
      <div>
        <Header
        title = 'Weather App'
        message = 'Your Weather'
        />
        <CitySelection>
        </CitySelection>
      </div>
    );
  }
}

export default App;
