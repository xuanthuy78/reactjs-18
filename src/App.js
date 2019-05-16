import React from 'react';
import logo from './logo.svg';
import './App.css';
import List1 from './components/List1';


const data = ['a', 'b', 'c'];
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <List1 data={data} render={item => <div>{item}</div>} />
      <List1 data={data} render={item => <div> + {item}</div>} />
      <List1 data={data} render={item => <div> + {item}</div>} />
    </div>
  );
}

export default App;
