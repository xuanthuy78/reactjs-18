import React, {Component} from 'react';
import './App.css';
import Acconridion from './components/Acconridion';
import Ref from './components/Ref';
import Counter from './components/Counter';
import { Alert } from 'reactstrap';
import Function from './components/Function';
class App extends Component {
  constructor() {
    super();
    this.state = {
      showCounter: true
    };
  }
  componentDidUpdate() {
    console.log('componentDidUpdate aaa')
  }
  removeCounter() {
    this.setState({
      showCounter: false
    });
  }
  render () {
    console.log('App render')
    return (
      <div className="App">
        <Alert color="primary">
          This is a primary alert — check it out!
        </Alert>
        <Acconridion heading="heading">
          A JavaScript library for building user interfaces
        </Acconridion>
        <Ref />
        <Function title = 'function in reactjs'/>

        <button onClick={() => this.removeCounter()}>Remove Counter</button>
        { this.state.showCounter && <Counter />}
      </div>
    );
  }
}

export default App;
