import React, {Component} from 'react';
import './App.css';
import Acconridion from './components/Acconridion';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Acconridion heading="heading">
          A JavaScript library for building user interfaces
        </Acconridion>
      </div>
    );
  }
}

export default App;
