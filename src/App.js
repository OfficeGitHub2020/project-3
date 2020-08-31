import React, { Component } from 'react';
import './App.css';
import FirstSection from './FirstSection/FirstSection';
import SecondSection from './SecondSection/SecondSection';
// import ThirdSection from './ThirdSection/ThirdSection';
import FourthSection from './FourthSection/FourthSection';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <FirstSection />
        <SecondSection />
        <FourthSection />
      </div>
    );
  }
}

export default App;
